const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

let songs = [
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    year: "2019",
    imageUrl: "https://i1.sndcdn.com/artworks-000677174977-d6v04a-t500x500.jpg",
  },
  {
    title: "Mast Nazron Se",
    artist: "Jubin Nautiyal",
    year: "2022",
    imageUrl:
      "https://sklktecdnems02.cdnsrv.jio.com/c.saavncdn.com/194/Mast-Nazron-Se-Hindi-2022-20220331031015-500x500.jpg",
  },
  {
    title: "Mehabooba",
    artist: "Anaya Bhat",
    year: "2022",
    imageUrl:
      "https://snoidcdnems07.cdnsrv.jio.com/c.saavncdn.com/592/KGF-Chapter-2-Hindi-2022-20220415034804-500x500.jpg",
  },
  {
    title: "Heat Waves ",
    artist: "Glass Animals",
    year: "2020",
    imageUrl:
      "https://sdlhivkecdnems01.cdnsrv.jio.com/c.saavncdn.com/764/Heat-Waves-English-2020-20200628183428-500x500.jpg",
  },
  {
    title: "Harleys In Hawaii",
    artist: "Katy Perry",
    year: "2019",
    imageUrl:
      "https://sdlhivkcdnems04.cdnsrv.jio.com/c.saavncdn.com/289/Harleys-In-Hawaii-English-2019-20191015230756-500x500.jpg",
  },
  {
    title: "Rockabye",
    artist: "Clean Bandit",
    year: "2016",
    imageUrl:
      "https://sdlhivkcdnems04.cdnsrv.jio.com/c.saavncdn.com/728/Rockabye-feat-Sean-Paul-Anne-Marie-English-2016-500x500.jpg",
  },
];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.status(200).send(songs);
});

app.post("/api/add-song", (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.title) {
    songs.push(body);
  }
  res.status(201);
});

app.use(express.static(path.join(__dirname, "client")));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
