import React from "react";
import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <div className={styles.Aside}>
      <div className={styles.BoxA}>
        <div className={styles.BoxMap}>
          <img
            src="/public/Images/north-island.png"
            alt="Queenstown View"
            className="image-style"
          />
          <p>Newzealand Map</p>
        </div>
      </div>
      <div className={styles.BoxB}>
        <div className={styles.BoxMap}>
          <img
            src="/public/Images/Auckland.jpg"
            alt="Queenstown View"
            className="image-style"
          />
          <p>Auckland City</p>
        </div>
      </div>
      <div className={styles.BoxC}>
        <div className={styles.BoxMap}>
          <img
            src="/public/Images/kiwi.jpg"
            alt="Queenstown View"
            className="image-style"
          />
          <p>Kiwi Bird</p>
        </div>
      </div>
    </div>
  );
}
