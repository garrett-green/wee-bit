import axios from 'axios';
import { useEffect, useState } from 'preact/hooks';
import { Link } from '../types';

const API_POST_ROUTE = '/api';

interface CreateWeeLinkHookState {
  data?: Link;
  loading: boolean;
  error?: Error;
}

const initialState: CreateWeeLinkHookState = {
  loading: false,
};

export function useCreateWeeLink(): [
  CreateWeeLinkHookState,
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
