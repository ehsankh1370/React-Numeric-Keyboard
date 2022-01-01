import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NumericKeyboard from './components/numeric-keyboard';

const App = () => {
  return <NumericKeyboard isOpen />;
};

ReactDOM.render(<App />, document.getElementById('root'));
