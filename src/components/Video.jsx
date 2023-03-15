import React, { useState } from "react";

import styles from "./Video.module.css";

const Video = ({ videoSelected }) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [videoLoop, setVideoLoop] = useState(false);

  const handleLoop = () => {
    setVideoLoop(!videoLoop);
    console.log(videoLoop);
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
    console.log("autoplay: "+autoPlay);
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

      <button onClick={handleLoop}>
        {videoLoop ? "Stop loop" : "Play loop"}
      </button>
      <button onClick={handleAutoPlay}>
        {autoPlay ? "Stop autoPlay" : "Auto play"}
      </button>
      </div>
    </div>
  );
};

export default Video;
