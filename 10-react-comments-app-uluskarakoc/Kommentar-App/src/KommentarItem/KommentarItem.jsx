import React from "react";
import styles from "./kommentarItem.module.scss"

function KommentarItem({ data },{length}) {
  return (
    <div className={styles.item}>
      <h2>{length}</h2>
      <h1> {data.map((el) => el.name)}</h1>
      <p>{data.map((el) => el.kommentar)}</p>
    </div>
  );
}

export default KommentarItem;
