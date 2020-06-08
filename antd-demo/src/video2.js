import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

const video2 = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=36mcBVTrD5E"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default video2;
