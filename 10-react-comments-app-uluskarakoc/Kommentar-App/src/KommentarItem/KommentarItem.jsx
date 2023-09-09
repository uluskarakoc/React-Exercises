import React from "react";
import styles from "./kommentarItem.module.scss";

function KommentarItem({ data, setData }) {
  const deleteCommentar = (id) => {
    const deletedCommentar = data.filter((comment) => comment.id !== id);
    setData(deletedCommentar);
  };

  return (
    <div className={styles.item}>
      <h2 className={styles.number}>{data.length}</h2>
      <ul>
        {data.map((el, index) => (
          <li key={index}>
            <div className={styles.name}> {el.name}</div>
            <p className={styles.paragraph}>{el.kommentar}</p>
            <button onClick={() => deleteCommentar(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KommentarItem;
{
  /* {data.map((el, index)=>
<li key={index}>
    <p>{el.comentar}</p>
    <div>name:{el.name}</div>
    <button onClick={()=>deleteCommentar(el.id)}>Delete</button>
</li>
)} */
}
