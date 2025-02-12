# M05W11 - SQL Intro

### To Do
- [ ] Introduction to RDBMS
- [ ] The Relational Data Model (Tables, Columns, Rows)
- [ ] `SELECT` Statements
- [ ] Filtering and ordering
- [ ] Joining tables
- [ ] Grouping records
- [ ] Aggregation functions
- [ ] `LIMIT` and `OFFSET`

client <======= tcp/http ======> server <================> database

### RDBMS
* Relational Database Management System/Server

### Database
* a collection of tables

|ID|Menu Item|Price|Calories|
|---|---|---|---|
|1|Big Mac|4.99|500|
|2|Large Fries|3.50|750|

* row === record
* column === field

### Primary Key
* unique indentifier
* PK

### Relational Database
* each table is related to one or more of the other tables
* Foreign Key => a primary key stored in a different table

```js
const urlDatabase = {
  b2xvn2: {
    longUrl: 'http:///',
    userId: 'abcd'
  }
};

const users = {
  abcd: {
    email:
    password: 
  }
};
```








### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(id) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < '02/11/25';

SELECT *, NOW()
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

-- this is a comment
SELECT *, CURRENT_DATE -- this will grab the current date
-- selecting from the users table
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;

```

7. List all albums along with how many songs each album has

```sql
SELECT album_name, COUNT(songs.id)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;

SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

8. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.id) > 10;
```

9. List ALL albums in the database, along with their songs if any

```sql
-- SELECT *
-- FROM albums
-- LEFT JOIN songs ON albums.id = songs.album_id;

SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id;
```

10. List ONLY the first 10 songs from the songs table

```sql
SELECT * FROM users LIMIT 10 OFFSET 20;
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
