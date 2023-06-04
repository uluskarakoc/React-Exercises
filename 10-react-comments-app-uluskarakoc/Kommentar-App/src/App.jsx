import styles from "./App.module.scss";
import Form from "./Form/Form";
import { useState, useEffect } from "react";
import KommentarItem from "./KommentarItem/KommentarItem";

function App() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("dataLocal");
    return storedData ? JSON.parse(storedData) : [];
  });
 
  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(data));
  }, [data]);

  return (
    <div className={styles.app}>
      <p> {length} ali</p>
      <KommentarItem data={data}  />
      <Form setData={setData}  />
    </div>
  );
}

export default App;
