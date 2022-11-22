import express from "express";
import fs from "fs";
import notes from "./Develop/db/db.json";
import path from "path";
import uuid from "uuid";
import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";


const app = express();
var PORT = process.env.PORT || 4023;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"))
});
// ADD NOTES 
app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes))
  res.json(notes);
});
// REMOVE NOTES 
app.delete("/api/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
  res.json(deleteNote);
});

app.listen(PORT, function () {
  console.log("Application listening on PORT: " + PORT);
});