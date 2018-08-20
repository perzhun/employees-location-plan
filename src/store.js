import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import mainGridReducer from './reducers/mainGridReducer';

const middleware = [thunk];

export default () => {
  const store = createStore(
    combineReducers({
      menu: menuReducer,
      render: mainGridReducer,
    }),
  );

  return store;
};
