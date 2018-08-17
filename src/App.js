import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import './styles/app.scss';

const App = () => {
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
