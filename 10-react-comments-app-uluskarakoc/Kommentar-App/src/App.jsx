import styles from "./App.module.scss";
import Form from "./Form/Form";
import { useState, useEffect } from "react";
import KommentarItem from "./KommentarItem/KommentarItem";

function App() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("dataLocal");
    return storedData ? JSON.parse(storedData) : [];
  });

  const zahl = data.length;
  console.log(zahl);
  const [length, setLength] = useState(zahl);
  

  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(data));
  }, [data]);

  return (
    <div className={styles.app}>
      <p> {length} ali</p>
      <KommentarItem data={data} length={length} />
      <Form setData={setData} />
    </div>
  );
}

export default App;
