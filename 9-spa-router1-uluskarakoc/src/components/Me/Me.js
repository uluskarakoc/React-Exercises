import React from "react";
import styles from "./me.module.scss";

function Me() {
  return (
    <div className={styles.me}>
      <div className={styles.foto}>
        <img src="images/rathaus-ulus.jpg"></img>
      </div>
      <div className={styles.infoAboutMe}>
        <div>
          <h1>Ulus Karakoc</h1>
        </div>
        <div>
          <p>
            Hi, ich bin Ulus und kommme aus der Türkei. In der Türkei habe ich
            Lehramt studiert und ich habe in verschiedenen Länder als Lehrer
            gearbeitet. Seit vielen jahre hatte ich lust für einige Software Program zu lernen und endlich 
            habe ich meine Traum in Deutschland realisiert.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
