import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import todoReducer from './todo/todoSlice';
import catReducer from './cat/catSlice';


const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  cat: catReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
