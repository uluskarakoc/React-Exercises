import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const [saveTodo, setSaveTodo] = useState("");

  // dynmaischen Parameter, der in der URL übergeben wurde,
  // soll "ausgelesen" werden
  const { id } = useParams();
  // URL: ".../todo/5" => id = 5
  // URL: ".../todo/34234-sdfsdf-234d-dd" => id = 34234-sdfsdf-234d-dd

  const url = `https://tiny-house-helden.de/api/todo.php?id=${id}`;
  // wegen CORS brauchen wir einen proxy
  const proxyUrl = "https://corsproxy.io/?" + url;

  const getTodo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSaveTodo(data);
  };
  useEffect(() => {
    getTodo();
  }, []);
  getTodo();

  return (
    <div>
      <h1>Mein Todo </h1>
      <p>
        {saveTodo.title}: (hier der "title" des todos mit der ID aus der URL){" "}
      </p>
      <p>
        {saveTodo.detail} (hier das "details" des todos mit der ID aus der URL){" "}
      </p>
    </div>
  );
};

export default TodoDetail;
