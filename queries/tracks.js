const db = require("../db/dbConfig.js"); 


// gets all tracks
const getAllTracks = async () => {
    try {
      const allTracks = await db.any("SELECT * FROM tracks");
      // gets all columns from the table 'tracks'
      return allTracks;
    } catch (error) {
      return error;
    }
  };

  // gets one Track

  const getTrack = async (id) => {
    try {
      const oneTrack = await db.oneOrNone
      ("SELECT * FROM tracks WHERE id=$1", id);
      // security above, keeps you safe 
      return oneTrack;
    } catch (error) {
      return error;
    }
  };


// Creates one track

const createTrack  = async (track) => {
    const { title, runtime, date, link, description, album } = track;
    try {
      const newTrack = await db.oneOrNone(
        "INSERT INTO tracks (title, runtime, date, link, description, album) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, runtime, date, link, description, album]
      );
      // if there's more than one column, the values have to be in an array
      return newTrack;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Delete a Track

  const deleteTrack = async (id) => {
    try {
      const deletedTrack = await db.one(
        "DELETE FROM tracks WHERE id = $1 RETURNING *",
        id
      );
      return deletedTrack;
    } catch (error) {
      return error;
    }
  };

  // Update a Track

  const updateTrack = async (id, track) => {
    const { title, runtime, date, link, description, album } = track;
    try {
      const updatedTrack = await db.one(
        "UPDATE tracks SET title=$1, runtime=$2, date=$3, link=$4, description=$5, album=$6 WHERE id=$7 RETURNING *",
        [title, runtime, date, link, description, album, id]
      );
      return updatedTrack;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllTracks,
    getTrack,
    createTrack,
    deleteTrack,
    updateTrack,
  }