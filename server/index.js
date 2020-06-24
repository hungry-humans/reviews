/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/biz/:business_id/reviews', (req, res) => {
  const queryString = `SELECT * FROM reviews INNER JOIN users
    ON reviews.user_id = users.user_id
    WHERE business_id = '${req.params.business_id}'`;
  db.query(queryString, (error, result) => {
    res.send(result.rows);
  });
});

app.get('/biz/:business_id/reviews/:review_id/photos', (req, res) => {
  const queryString = `SELECT * FROM photos
    WHERE review_id = ${req.params.review_id}`;
  db.query(queryString, (error, result) => {
    res.send(result.rows);
  });
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
