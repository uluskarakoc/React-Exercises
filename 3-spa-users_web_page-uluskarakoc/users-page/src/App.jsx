import { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  });
  console.log("users", users);
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    if (users.length === 0) {
      fetchData();
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <div className=" flex justify-center align-baseline ">
      <h1 className="text-5xl font-bold underline text-center bg-orange-500 " >Hello world!</h1>
    </div>
  );
}

export default App;
