import { useState } from "react";

const InputTodo = ({addTodoItem}) => {
  // title state soll hier verwendet
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    // auf den eingegeben Text zugreifen
    const userInput = event.target.value

    // hier soll title state geändert werden
    setTitle(userInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if(title !== "") {
      addTodoItem( title.trim() );
      
      // Formularfeld leeren
      setTitle('');

      // eventuelle error Nachricht leeren
      setError('')

    } else {
      setError("💀 Bitte Text eingeben");
    }


  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Todo hinzufügen"
        // onChange={handleChange}
        // Alternative, ohne separate Funktion
        onChange={e => setTitle(e.target.value)}
        value={title}
        // hier haben wir jetzt ein two way binding
      />
      <button className="input-submit">Hinzufügen</button>

      <p className="submit-warning">{error}</p>
      {/* mit conditional rendering könnte man
      die error message optimieren */}
      
    </form>
  )

}

export default InputTodo;