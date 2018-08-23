import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import mainGridReducer from './reducers/mainGridReducer';
import gridDataReducer from './reducers/gridData';
import employeeReducer from './reducers/employeeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux store connecting menu , render and reducer

export default () => {
  const store = createStore(
    combineReducers({
      menu: menuReducer,
      render: mainGridReducer,
      grid: gridDataReducer,
      employees: employeeReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
