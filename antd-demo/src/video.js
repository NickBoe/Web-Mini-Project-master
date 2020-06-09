import React from "react";
import ReactPlayer from "react-player/youtube";
import "./video.css";

const video = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=SmuAiq0Sk6E"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default video;

