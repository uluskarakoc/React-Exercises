import styles from "./TodoItem.module.scss";

// shortcut zum Erstellen functional component = rfec


function TodoItem({ itemProp, setTodos, deleteTodo }) {
    // console.log(itemProp);
    console.log("styles von TodoItem", styles)

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
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )
    }

 
    return (
        <li className={styles.item}>
            <div className={styles.content}>
        
                <input
                    type='checkbox'
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                <span className={styles.header}>{itemProp.title}</span>
                <button onClick={()=>deleteTodo(itemProp.id)}>Delete todo</button>
            </div>
        </li>
    )
}

export default TodoItem