import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Albums from "./pages/Albums";
import Player from "./pages/Player";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/player" element={<Player />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;