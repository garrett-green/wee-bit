import { h, render, FunctionComponent, Fragment } from 'preact';
import { Header, Main } from './components';

export const App: FunctionComponent = () => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

render(<App />, document.getElementById('app')!);
