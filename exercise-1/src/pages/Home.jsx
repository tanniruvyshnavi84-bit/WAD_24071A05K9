import MusicCard from "../components/MusicCard";

function Home() {
  const songs = [
    {
      title: "Midnight Echo",
      artist: "DJ Nova",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000"
    },
    {
      title: "Electric Dreams",
      artist: "WaveX",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000"
    },
    {
      title: "Skyline",
      artist: "Luna",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1000"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Trending Music</h1>

      <div className="music-grid">
        {songs.map((song, index) => (
          <MusicCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
}

export default Home;