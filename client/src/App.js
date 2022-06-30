import React, { useEffect, useState } from "react";
import axios from "./axios";
import AddSong from "./components/AddSong";
import SongLists from "./components/SongLists";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api");
      setMessage(res.data);
      console.log(res.data);
    }

    fetchData();
  }, []);

  const onAddSongClick = (bool) => {
    setIsHome(bool);
  };

  return (
    <>
      <NavBar onClickHandler={onAddSongClick} />
      {isHome && <SongLists songs={message} />}
      {!isHome && <AddSong />}
    </>
  );
};

export default App;
