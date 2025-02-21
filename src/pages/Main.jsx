import React from "react";
import styles from "./Main.module.css";
import Navbar from "./Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className={styles.Main}>
        <div className={styles.Topsection}>
          <div className={styles.TopsectionLeft}>
            <div className={styles.TopsectionLeftHeading}>
              "New Zealand, a land of breathtaking lush green valleys, golden
              beaches, and majestic mountains, continues to captivate travelers
              with its untouched natural beauty, diverse landscapes, and serene
              wilderness, making it a true paradise on Earth."
            </div>
          </div>
          <div className={styles.TopsectionRight}>
            <img
              src="/public/Images/top.jpg"
              alt="Queenstown View"
              className="image-style"
            />
          </div>
        </div>
        <div className={styles.search}>
          <input className={styles.searchbar} type="text" />
          <label>Search</label>
        </div>
      </div>
    </div>
  );
}
export default Main;
