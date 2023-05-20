// shortcut zum Erstellen functional component = rfec

function TodoItem({ itemProp, setTodos, deleteTodo }) {
  // console.log(itemProp);

  const handleChange = (id) => {
    // prevState steht für den todos Array
    // prevState = aktueller Zustand von aktuellen State
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
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <span>{itemProp.title}</span>
      <button onClick={() => deleteTodo(itemProp.id)}>Delete todo</button>
    </li>
  );
}

export default TodoItem;
