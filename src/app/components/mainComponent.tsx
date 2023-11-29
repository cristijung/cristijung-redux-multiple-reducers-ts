// src/app/components/MainComponent.tsx

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { increment, decrement } from "../store/counter/counterSlice";
import { addTodo, toggleTodo } from "../store/todo/todoSlice";

const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const todos = useSelector((state: RootState) => state.todo.todos);

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
      <h1>Contador: {counter}</h1>
      <button onClick={handleIncrement} className="btn">Incrementar</button>
      <button onClick={handleDecrement} className="btn">Decrementar</button>

      <hr />
      <h2>ToDos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.text} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Adicionar ToDo"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
            handleAddTodo(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default MainComponent;
