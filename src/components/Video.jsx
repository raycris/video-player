import React, { useState } from "react";

import styles from "./Video.module.css";

const Video = ({ videoSelected }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [videoLoop, setVideoLoop] = useState(false);

 
  const handleLoop = () => {
    setVideoLoop(!videoLoop);
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <div className={styles.container}>
      <video
        controls
        muted
        autoPlay={autoPlay}
        loop={videoLoop}
        className={styles.videoCase}
        autostart="true"
        src={videoSelected}
      />
      <div className={styles.btnContainer}>
        <button
          onClick={handleLoop}
          className={`${styles.btn} ${
            videoLoop ? styles.btnStop : styles.btnPlay
          }`}
        >
          {videoLoop ? "Stop loop" : "Play loop"}
        </button>
        <button
          onClick={handleAutoPlay}
          className={`${styles.btn} ${
            autoPlay ? styles.btnPlay : styles.btnStop
          } `}
        >
          {autoPlay ? "Stop autoPlay" : "Auto play"}
        </button>
      </div>
    </div>
  );
};

export default Video;
