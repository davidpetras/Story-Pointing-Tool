const express = require("express");
const app = express();
const votes = [];

app.use(express.static("public"));
app.use(express.json());

app.post("/vote", (req, res) => {
  const { name, story, point } = req.body;
  if (!story || !point) return res.status(400).send("invalid vote");
  votes.push({ name: name || "Anonymous", story, point });
  res.sendStatus(200);
});

app.get("/votes", (req,res) => res.json(votes));

app.post("/clear", (req, res) => {
  votes.length = 0;
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server listening on port ${PORT}'));
