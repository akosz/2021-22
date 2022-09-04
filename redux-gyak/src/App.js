import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./actions";
import { getTodo } from "./selector";

function App() {
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector(getTodo);

  const handleClick = ({ target }) => {
    if (key !== "") {
      dispatch(editTodo(value, key));
      setKey("");
    } else dispatch(addTodo(value));
    setValue("");
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handleEdit = (todo, id) => {
    setValue(todo);
    setKey(id);
  };

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={(e) => handleClick(e)}>
        {key !== "" ? "Módosít" : "Felvétel"}
      </button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td onClick={() => handleDelete(todo.id)}>{todo.title}</td>
              <td>
                <button onClick={() => handleEdit(todo.title, todo.id)}>
                  Változtat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
