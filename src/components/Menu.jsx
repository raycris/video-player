import React from "react";

import styles from "./Menu.module.css";

const Menu = ({ onSelectVideo, videoValues }) => {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, index) => (
        <div key={index} className={styles["radio-inputs-container"]}>
          <input
            type="radio"
            name="src"
            value={value}
            className={styles.radio}
          />
          {value}
        </div>
      ))}
    </form>
  );
};

export default Menu;
