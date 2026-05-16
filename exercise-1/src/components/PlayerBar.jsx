import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

function PlayerBar() {
  return (
    <div className="player-bar">
      <FaStepBackward className="player-icon" />
      <FaPlay className="player-icon play-btn" />
      <FaPause className="player-icon" />
      <FaStepForward className="player-icon" />
    </div>
  );
}

export default PlayerBar;