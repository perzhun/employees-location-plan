import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import mainGridReducer from './reducers/mainGridReducer';
import firstFloorReducer from './reducers/firstFloorReducer';

const middleware = [thunk];

// redux store connecting menu , render and reducer

export default () => {
  const store = createStore(
    combineReducers({
      menu: menuReducer,
      render: mainGridReducer,
      room: firstFloorReducer,
    }),
  );

  return store;
};
