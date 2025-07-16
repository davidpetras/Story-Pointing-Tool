const express = require("express");
const app = express();
const votes = [];

app.use(express.static("public"));
app.use(express.json());

app.post("/vote", (req, res) => {
  const { name, story, point } = req.body;
  if (!name || !point) return res.status(400).send("Name and point are required");
  votes.push({ name, story: story || "(no story)", point });
  res.sendStatus(200);
});

app.get("/votes", (req,res) => res.json(votes));

app.post("/clear", (req, res) => {
  votes.length = 0;
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server listening on port ${PORT}'));
