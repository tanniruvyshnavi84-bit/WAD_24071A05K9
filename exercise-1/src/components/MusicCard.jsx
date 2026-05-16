function MusicCard({ title, artist, image }) {
  return (
    <div className="music-card">
      <img src={image} alt={title} />

      <div className="music-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default MusicCard;