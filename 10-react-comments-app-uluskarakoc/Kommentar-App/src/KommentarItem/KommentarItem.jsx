import React from "react";
import styles from "./kommentarItem.module.scss";

function KommentarItem({ data }) {
  return (
    <div className={styles.item}>
      <ul>
        <p>{data.length}</p>
        {data.map((el, index) => (
          <li key={index}>
            {el.name} {el.kommentar}
          </li>
        ))}
      </ul>

      {/* <button onClick={()=>deleteCommentar(el.id)}>Delete</button> */}
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
