import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './reducers/menuReducer';

const middleware = [thunk];

export default () => {
  const store = createStore(
    combineReducers({
      menu: menuReducer,
    }),
  );

  return store;
};
