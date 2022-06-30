import React from "react";
import "./SongLists.css";
import Table from "react-bootstrap/Table";

const SongLists = ({ songs }) => {
  return (
    <Table striped responsive className="text-center">
      <thead>
        <tr>
          <th>Artwork</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Realesed</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => {
          return (
            <tr key={song.title+song.artist+Math.random()}>
              <td>
                <img src={song.imageUrl} alt="" className="song__image" />
              </td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.year}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SongLists;
