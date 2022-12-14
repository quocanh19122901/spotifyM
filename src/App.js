import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import DetailSong from "./component/DetailSong";
import ListSong from "./component/ListSong";
import { songs } from "./Context";
import dataSongs from "./songs.json";
import StatePlay from "./component/StatePlay";
import { useState } from "react";
function App() {
  const [Song, setSong] = useState(dataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = dataSongs.find((song) => song.id === idSong);
    if (!song) setSong(dataSongs[0]);
    else setSong(song);
    setSong(song);
  };
  return (
    <songs.Provider value={{ dataSongs, Song, handleSetSong }}>
      <div className="App bg-black text-white">
        <Navbar />

        <div className="grid grid-cols-3 h-[84.5vh] bg-slate-700 overflow-hidden">
          <DetailSong className="" />
          <ListSong className="" />
        </div>
        <StatePlay />
      </div>
    </songs.Provider>
  );
}

export default App;
