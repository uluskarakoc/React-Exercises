import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TodoDetail = () => {
    const [todo, setTodo] = useState({})

    

    // dynmaischen Parameter, der in der URL übergeben wurde,
    // soll "ausgelesen" werden
    const { id } = useParams();
    // URL: ".../todo/5" => id = 5
    // URL: ".../todo/34234-sdfsdf-234d-dd" => id = 34234-sdfsdf-234d-dd

   const url = `https://tiny-house-helden.de/api/todo.php?id=${id}`;
   // wegen CORS brauchen wir einen proxy (geht jetzt ohne cors proxy)
    // const proxyUrl = 'https://corsproxy.io/?' + url;


   const getTodo = async () => {

    const response = await fetch(url);
    const todoObj = await response.json();
    setTodo(todoObj)
   }

   useEffect( () => {
       getTodo();
   }, [])



    return (
        <div>
            <h1>Mein Todo </h1>
            <p>Todo Titel: {todo.title}  </p>
            <p>Todo Beschreibung: {todo.details} </p>
        </div>
    )
};

export default TodoDetail;