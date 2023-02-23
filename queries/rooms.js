const db = require("../db/dbConfig.js");

// gets all rooms
const getAllRooms = async (roomFilter) => {
  try {
    if (roomFilter) {
      const allRooms = await db.any(
        "SELECT * FROM rooms where ends_at > now()::timestamp(0);"
      );
      return allRooms;
    } else {
      const allRooms = await db.any(
        "SELECT * FROM rooms where ends_at < now()::timestamp(0);"
      );
      return allRooms;
    }



    // gets all columns from the table 'rooms'
  } catch (error) {
    
    return error;
  }
};

  // gets one Track

  const getRoom = async (id) => {
    try {
      const oneRoom = await db.oneOrNone
      ("SELECT * FROM rooms WHERE id=$1", id);
      // security above, keeps you safe 
      return oneRoom;
    } catch (error) {
      return error;
    }
  };

  

// Creates one Room

const createRoom = async (room) => {
  const { name, description } = room;
  try {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 30);
    const newRoom = await db.oneOrNone(
      "INSERT INTO rooms (name, description, ends_at) VALUES($1, $2, $3) RETURNING *",
      [name, description, date]
    );
    // if there's more than one column, the values have to be in an array
    return newRoom;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// adds track to room

const addTrackToRoom = async (id, track_id) => {
  try {
    const newRoomTrack = await db.oneOrNone("INSERT INTO rooms_tracks (room_id, track_id) VALUES ($1, $2) RETURNING *", [id, track_id])
    return newRoomTrack
}
catch (error) {
  console.log(error);
  throw error
}
  }
  

module.exports = {
  getAllRooms,
  getRoom,
  createRoom,
  addTrackToRoom
};
