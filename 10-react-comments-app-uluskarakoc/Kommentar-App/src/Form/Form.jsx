import React from "react";
import { useState } from "react";
import styles from "./form.module.scss";

function Form({ setData }) {
  const [kommentar, setKommentar] = useState("");
  const [name, setName] = useState("");
  const onChangeKommentar = (e) => setKommentar(e.target.value);
  const onChangeInput = (e) => setName(e.target.value);
  const submitHandeln = (e) => {
    e.preventDefault();
    const neuKommentar = {
      id: crypto.randomUUID(),
      name,
      kommentar,
    };
    console.log(neuKommentar);
    setData((prevdata) => [...prevdata, neuKommentar]);
  };
  return (
    <div className={styles.form}>
      <form onSubmit={submitHandeln}>
        <label htmlFor="textarea">Text Me</label>
        <textarea name=""  id="textarea" value={kommentar} onChange={onChangeKommentar}></textarea>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={onChangeInput} />
        <button>Kommentar Abschicken</button>
      </form>
    </div>
  );
}

export default Form;
