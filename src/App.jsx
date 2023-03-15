import { useState } from "react";
import "./App.css";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.deer);

  function onSelectVideo(video) {
    const videoSelected = videos[video];
    setVideoSrc(videoSelected);
  }

  return (
    <div>
      <h1>Video Player</h1>
    </div>
  );
}

export default App;
