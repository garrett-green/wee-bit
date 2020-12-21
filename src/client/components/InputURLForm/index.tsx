import { h, FunctionComponent, Fragment } from 'preact';
import { useState } from 'preact/hooks';

interface InputURLFormProps {
  createLink: (URL: string) => void;
}

const InputURLForm: FunctionComponent<InputURLFormProps> = ({ createLink }) => {
  const [input, setInput] = useState<string>('');

  const handleInput = ({ target }: InputEvent) => {
    const inputValue = target.value as string;

    const URL = inputValue.startsWith('http')
      ? inputValue
      : `http://${inputValue}`;

    setInput(URL);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    createLink(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="URL"
        onInput={handleInput}
        type="url"
        placeholder="https://"
        required
        value={input}
      />
      <button type="submit">Make It Wee</button>
    </form>
  );
};

export default InputURLForm;
