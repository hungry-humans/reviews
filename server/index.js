/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(cors());
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

app.put('/biz/:business_id/reviews/:review_id/:count/:action/:type/:active', (req, res) => {
  const action = (req.params.action === 'increment') ? '+ 1' : '- 1';
  const queryString = `UPDATE reviews SET ${req.params.count} = ${req.params.count} ${action}, ${req.params.type} = ${req.params.active} WHERE reviews.review_id = ${req.params.review_id}`
  db.query(queryString, (error, result) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
