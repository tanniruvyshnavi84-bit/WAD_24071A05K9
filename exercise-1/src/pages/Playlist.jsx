function Playlist() {
  const playlist = [
    "Blinding Lights",
    "Shape of You",
    "Levitating",
    "Starboy",
    "Believer"
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Your Playlist</h1>

      <div className="glass-card list-card">
        {playlist.map((song, index) => (
          <div className="song-row" key={index}>
            <span>{index + 1}</span>
            <p>{song}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;