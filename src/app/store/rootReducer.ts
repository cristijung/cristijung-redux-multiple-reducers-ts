import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import todoReducer from './todo/todoSlice';
import catReducer from './cat/catSlice';
import formReducer from './form/formSlice';


const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  cat: catReducer,
  form: formReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
