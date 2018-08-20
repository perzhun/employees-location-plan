import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import './styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
