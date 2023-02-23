DROP DATABASE IF EXISTS sound_royale_db;
CREATE DATABASE sound_royale_db;

\c sound_royale_db;


CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(17) NOT NULL,
    runtime INT NOT NULL,
    date DATE NOT NULL,
    link TEXT NOT NULL,
    description TEXT,
    album TEXT
);

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description TEXT,
    ends_at TIMESTAMP
);

CREATE TABLE rooms_tracks(
    track_id INT references tracks(id),
    room_id INT references rooms(id)
);