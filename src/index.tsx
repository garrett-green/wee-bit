import { h, render, Fragment } from 'preact';

const App = () => (
  <Fragment>
    <h1>Hello from Preact and Typescript!</h1>
  </Fragment>
);

render(<App />, document.getElementById('app')!);
