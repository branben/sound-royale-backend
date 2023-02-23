const express = require("express");
const tracks = express.Router();
const {
  getAllTracks,
  getTrack,
  createTrack,
  deleteTrack,
  updateTrack,
} = require("../queries/tracks");

//INDEX
tracks.get("/", async (req, res) => {
    const allTracks = await getAllTracks();
    console.log(allTracks);
    if (allTracks[0]) {
      res.status(200).json(allTracks);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });


// SHOW
tracks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const track = await getTrack(id);
    if (track) {
      res.json(track);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE
  tracks.post("/", async (req, res) => {
    // console.log(req.body)    
    try {
      const track = await createTrack(req.body);
      res.json(track);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });
  
  //DELETE
  tracks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedtrack = await deleteTrack(id);
    if (deletedtrack.id) {
      res.status(200).json(deletedtrack);
    } else {
      res.status(404).json("track not found");
    }
  });
  
  //UPDATE
  tracks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedtrack = await updateTrack(id, req.body);
    res.status(200).json(updatedtrack);
  });
  
  module.exports = tracks;
  
  