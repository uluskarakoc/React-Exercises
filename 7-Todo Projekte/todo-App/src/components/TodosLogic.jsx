import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { useState } from 'react';
import { v4 as uuid } from "uuid";


const TodosLogic = () => {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: 'Setup development environment',
      completed: true
    },
    {
      id: uuid(),
      title: 'Develop website and add content',
      completed: false
    },
    {
      id: uuid(),
      title: 'Deploy to live server',
      completed: false
    }
  ])

  // "Todo" Item hinzufügen
  const addTodoItem = (title) => {
    // Funktion Implementieren:
    // neues Todo basierend auf übergebenen title
    // erzeugen und dem todo state array hinzufügen
    const newTodo = {
      id: uuid(), //Alternativ z.b. crypto.randomUUID()
      title: title,
      completed: false
    }

    // newTodosArray besteht aus alten todos (...todos)
    // und dem zuvor erzeugtem neuen todo-object (newTodo)
    const newTodosArray = [newTodo, ...todos ]

    // newTodosArray unserem state zuordnen
    // (Info: besser wäre über callback, da wir auf unsere
    // "alten" todos zugreifen müssen)
    setTodos(newTodosArray)
  
  }


  // hier speichern wir die Daten, deshalb hier die CRUD (Create Read Update  Delete) Operationen (löschen von todos)
  const deleteTodo = (clickedTodoId) => {
    // Array "überschreiben"

    // durch destructering "..." wird das todo array kopiert
    // das wird hier quasi "zur Sicherheit" gemacht, da man
    // das todo array nie selbst direkt ändern darf
    // Hier ist es aber eigentlich überflüssig, das filter schon ein
    // neues Array erstellt
    const newFilteredArray = [...todos.filter((todo) => {
      // alle die nicht geklickt wurden werden im Array bleiben
      return todo.id !== clickedTodoId
    })
    ]
    setTodos(newFilteredArray)

    // 2. Möglichkeit ein Todo zu löschen ( ohne desctructerin "...")
    const newTodos = todos.filter((todo) => {
      return todo.id !== clickedTodoId
    })
    setTodos(newTodos)

  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        mainText="Hi"
      />
    </div>
  )

}

export default TodosLogic;




// KEY Erklärung
/*
- "Keys" sind spezielle Attribute, die React helfen, Elemente in einer Liste zu identifizieren.
- Sie sind wichtig, wenn du mit dynamischen Listen arbeitest, 
  also wenn du mehrere Elemente auf einmal renderst.
- Ohne Keys kann React durcheinander kommen, welche Elemente hinzugefügt, geändert oder entfernt wurden. 
- Keys sollten einzigartig sein, damit React die Elemente richtig identifizieren kann.
- Man benutzt meistens die IDs von Datenobjekten als Keys.
- Keys werden direkt auf die Elemente gesetzt, 
  die in einer Liste gerendert werden, z.B. beim Mappen von Arrays.
*/