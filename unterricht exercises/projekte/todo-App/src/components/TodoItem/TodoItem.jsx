import styles from "./TodoItem.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { useState } from "react";

function TodoItem({ itemProp, setTodos, deleteTodo }) {
  
  const {deleteme}=useContext(ThemeContext)

 



  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        // vergleichen von id mit todo
        if (todo.id === id) {
          // ändern der todo mit !
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span className={styles.header}>{itemProp.title}</span>
        <button onClick={() => deleteTodo(itemProp.id)}>Delete todo</button>
      </div>
    </li>
  );
}

export default TodoItem;
