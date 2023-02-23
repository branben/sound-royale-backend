const express = require("express");
const rooms = express.Router();
const {
    getAllRooms,
    getRoom,
    createRoom,
    addTrackToRoom
} = require("../queries/rooms");

//INDEX
rooms.get("/", async (req, res) => {
    const allRooms = await getAllRooms(true);
    console.log(allRooms);
     res.status(200).json(allRooms);
  });


// SHOW
rooms.get("/:id", async (req, res) => {
    const { id } = req.params;
    const room = await getRoom(id);
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE
  rooms.post("/", async (req, res) => {
    // console.log(req.body)    
    try {
      const room = await createRoom(req.body);
      res.json(room);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });

  // ADD TRACKS TO ROOM TRACKS TABLE
  rooms.post("/:id/tracks/:track_id", async (req, res) => {
const { id, track_id } = req.params;
try {
  const trackToRoom = await addTrackToRoom(id, track_id)
  res.status(200).json(trackToRoom);
}
catch (error) {
  console.log(error);
  res.status(400).json({error})
}
  })

  module.exports = rooms;