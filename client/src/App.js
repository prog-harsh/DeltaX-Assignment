import React, { useEffect, useState } from "react";
import axios from "./axios";
import AddSong from "./components/AddSong";
import SongLists from "./components/SongLists";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [isData, setIsData] = useState(false);
  const [songs, setSongs] = useState([]);
  const [filteredSong, setFilteredSong] = useState(songs);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api");
      setSongs(res.data);
      setFilteredSong(res.data);
      setIsData(true);
      console.log(res.data);
    }

    fetchData();
  }, []);

  const onSearchSubmit = (search) => {
    const filteredSong = songs.filter((song) =>
      song.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ? true
        : false
    );
    setFilteredSong(filteredSong);
  };

  const onAddSongClick = (bool) => {
    setIsHome(bool);
  };

  return (
    <>
      <NavBar onClickHandler={onAddSongClick} onSubmit={onSearchSubmit} />
      {!isData ? (
        <div className="center_fetching">
          <h3>Fetching data...</h3>
		  <h5>Please check your internet connection</h5>
        </div>
      ) : (
        isHome && <SongLists songs={filteredSong} />
      )}
      {!isHome && <AddSong />}
    </>
  );
};

export default App;
