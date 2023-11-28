// src/app/components/MainComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { increment, decrement } from '../store/counter/counterSlice';
import { addTodo, toggleTodo } from '../store/todo/todoSlice';
import CountryList from './countryList';

const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const todos = useSelector((state: RootState) => state.todo.todos);

  const [currentComponent, setCurrentComponent] = useState<string>('main');

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.text} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>

      <button onClick={() => setCurrentComponent('country')}>View Country List</button>

      {currentComponent === 'country' && <CountryList />}
      
      <input
        type="text"
        placeholder="Add Todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            handleAddTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default MainComponent;
