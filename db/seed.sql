\c sound_royale_db
INSERT INTO tracks (
        title,
        runtime,
        date,
        link,
        description,
        album
    )
VALUES (
        'Passionfruit',
        300,
        '01/10/2021',
        'https://soundcloud.com/forss/in-paradisum?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fforss%252Fin-paradisum',
        '',
        ''
    );

INSERT INTO rooms( 
    name, description, ends_at
 ) VALUES (
    'Slow Winter Songs', 'An assortment of slow songs for winter time... self explanatory', now()::timestamp(0)
  );

INSERT INTO rooms_tracks ( 
    track_id, room_id
) VALUES ( 
    1, 1
);