// Mit der nachfolgenden Zeile schalten wir
// eine eslint regel ab
import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, setTodos, deleteTodo, mainText }) => {
  // Alternative zu map
  // forEach ist ein statement, keine Expression
  // => deswegen können wir es nicht innerhalb von jsx verwenden
  // const todoOutputArray = [];
  // props.todosProps.forEach( todo => {
  //   todoOutputArray.push(<li>{todo.title}</li>)
  // })

  return (
    <>
      <ul>
        {todosProps.map((todo) => (
          <TodoItem
            key={todo.id}
            itemProp={todo}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        ))}

        {/*
    <p>Alternative zu map (siehe oben "forEach") </p> 
    {todoOutputArray} 
  */}
      </ul>

      <br />
      {mainText}
    </>
  );
};

export default TodosList;
