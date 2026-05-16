import MusicCard from "../components/MusicCard";

function Albums() {
  const albums = [
    {
      title: "Neon Nights",
      artist: "Arctic Sound",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000"
    },
    {
      title: "Moonlight",
      artist: "Aurora",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000"
    },
    {
      title: "Infinity",
      artist: "Pulse",
      image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1000"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Popular Albums</h1>

      <div className="music-grid">
        {albums.map((album, index) => (
          <MusicCard key={index} {...album} />
        ))}
      </div>
    </div>
  );
}

export default Albums;