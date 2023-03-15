import React from "react";

const Video = (videoSelected) => {
  return (
    <div>
      <video
        loop
        controls
        autoPlay
        muted
        autostart="true"
        src={videoSelected}
      />
    </div>
  );
};

export default Video;
