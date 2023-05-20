import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  // title state soll hier verwendet
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    // auf den eingegeben Text zugreifen
    const userInput = event.target.value;

    // hier soll title state geändert werden
    setTitle(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "") {
      addTodoItem(title.trim());

      // Formularfeld leeren
      setTitle("");

      // eventuelle error Nachricht leeren
      setError("");
    } else {
      setError("💀 Bitte Text eingeben");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo hinzufügen"
        // onChange={handleChange}
        // Alternative, ohne separate Funktion
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // hier haben wir jetzt ein two way binding
      />
      <button>Hinzufügen</button>

      <p>{error}</p>
      {/* mit conditional rendering könnte man
      die error message optimieren */}
    </form>
  );
};

export default InputTodo;
