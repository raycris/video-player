import { useState } from "react";
import "./App.css";

import Menu from "./components/Menu";
import Video from "./components/Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);
console.log(videoNames);

function App() {
  const [videoSelected, setVideoSelected] = useState(videos.deer);

  function onSelectVideo(video) {
    const videoSelected = videos[video];
    console.log(videoSelected);
    setVideoSelected(videoSelected);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames}/>
      <Video videoSelected={videoSelected} />
    </div>
  );
}

export default App;
