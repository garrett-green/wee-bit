import axios from 'axios';
import { useEffect, useState } from 'preact/hooks';

interface Link {
  shortURL: string;
  URL: string;
}
const API_POST_ROUTE = '/api';

interface HookState<T = unknown> {
  data?: T;
  loading: boolean;
  error?: Error;
}

const initialState: HookState<Partial<Link>> = {
  loading: false,
};

export function useCreateWeeLink(): [
  HookState<Partial<Link>>,
  (URL: string) => void
] {
  const [state, setState] = useState(initialState);
  const [URL, setURL] = useState<string>('');

  const createWeeLink = async () => {
    setState({ ...state, loading: true });
    try {
      const { data } = await axios.post<Link>(API_POST_ROUTE, {
        URL: URL,
      });
      setState({ data, loading: false });
    } catch (e) {
      setState({ ...state, error: e as Error, loading: false });
    }
  };

  useEffect(() => {
    if (URL) {
      createWeeLink();
    }
  }, [URL]);

  return [state, (URL: string) => setURL(URL)];
}
