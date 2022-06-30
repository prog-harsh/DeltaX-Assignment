import React, { useState, useEffect } from "react";
import axios from "../axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

const AddSong = (props) => {
  const [enteredArtist, setEnteredArtist] = useState("");
  const [enteredSong, setEnteredSong] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [newSong, setNewSong] = useState({});

  useEffect(() => {
    async function postData() {
      const response = await axios.post("/api/add-song", newSong);
      console.log(response);
    }
    postData();
  }, [newSong]);

  const songChangeHandler = (event) => {
    setEnteredSong(event.target.value);
  };
  const artistChangeHandler = (event) => {
    setEnteredArtist(event.target.value);
  };
  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const submitHandler = (event) => {

    const song = {
      title: enteredSong,
      artist: enteredArtist,
      year: enteredYear,
      imageUrl:
        "https://i1.sndcdn.com/artworks-000677174977-d6v04a-t500x500.jpg",
    };
    setNewSong(song);

    setEnteredArtist("");
    setEnteredSong("");
    setEnteredYear("");
  };

  return (
    <>
      <h3 className="m-5">Add a new Song</h3>
      <Form className="m-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicSong">
          <Form.Label>Song Name</Form.Label>
          <Form.Control
            onChange={songChangeHandler}
            value={enteredSong}
            type="text"
            placeholder="Enter song name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicArtist">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control
            onChange={artistChangeHandler}
            value={enteredArtist}
            type="text"
            placeholder="Artist"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Realesed Year</Form.Label>
          <Form.Control
            onChange={yearChangeHandler}
            value={enteredYear}
            type="text"
            placeholder="Realesed Year"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Song
        </Button>
      </Form>
    </>
  );
};

export default AddSong;
