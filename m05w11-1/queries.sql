-- SELECT *
-- FROM albums
-- LEFT JOIN songs ON albums.id = songs.album_id;

SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id;
