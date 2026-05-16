import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaMusic /> BeatWave
      </div>

      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/player">Player</Link>
        <Link to="/subscription">Subscription</Link>
      </div>
    </nav>
  );
}

export default Navbar;