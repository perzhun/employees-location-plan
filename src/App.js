import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import HomePage from './components/HomePage';
import './styles/app.scss';

const store = configureStore();

console.log(store.getState());

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
