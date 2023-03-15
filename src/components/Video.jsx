import React from "react";

import styles from "./Video.module.css"

const Video = ({videoSelected}) => {
  console.log(videoSelected);
  return (
    <div className={styles.container}>
      <video
        loop
        controls
        autoPlay
        muted
        className={styles.videoCase}
        autostart="true"
        src={videoSelected}
      />
    </div>
  );
};

export default Video;
