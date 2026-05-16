import PlayerBar from "../components/PlayerBar";

function Player() {
  return (
    <div className="center-container">
      <div className="glass-card player-screen">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000"
          alt="music"
        />

        <h2>Midnight Echo</h2>
        <p>DJ Nova</p>

        <PlayerBar />
      </div>
    </div>
  );
}

export default Player;