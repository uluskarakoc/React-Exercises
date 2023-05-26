import React from "react";
import styles from "./hobbies.module.scss";

function Hobbies() {
  return (
    <div className={styles.hobbies}>
      
      <div className={styles.hobby}>
        <div>
          <h2>Cycling</h2>
        </div>
        <div className={styles.hobbyImages}>
          <img src="images/cycling2.jpg" alt="" />
          <img src="images/sportsman.jpg" alt="" />
          <img src="images/maraton.jpg" />
          <img src="images/to-go-biking.jpg" />
        </div>
      </div>

      <div className={styles.hobby}>
        {" "}
        <div>
          <h2>Laufen</h2>
        </div>
        <div className={styles.hobbyImages}>
          <img src="images/laufen/man.jpg" />
          <img src="images/laufen/road.jpg" />
          <img src="images/laufen/achieve.jpg" />
          <img src="images/laufen/horses.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
