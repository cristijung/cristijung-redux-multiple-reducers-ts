import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import todoReducer from './todo/todoSlice';
import countryReducer from './country/countrySlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
