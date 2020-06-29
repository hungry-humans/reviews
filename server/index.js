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

app.post('/biz/:business_id/reviews', (req, res) => {
  const queryString = `INSERT INTO reviews (user_id, business_id, business_name, created_at, rating, check_ins, body, useful_count, funny_count, cool_count, useful_active, funny_active, cool_active)
  VALUES (${req.body.user_id}, ${req.body.business_id}, '${req.body.business_name.replace("\'", "\'\'")}', CURRENT_TIMESTAMP, ${req.body.rating}, ${req.body.check_ins}, '${req.body.body.replace("\'", "\'\'")}', ${req.body.useful_count}, ${req.body.funny_count}, ${req.body.cool_count}, ${req.body.useful_active}, ${req.body.funny_active}, ${req.body.cool_active})`;
  db.query(queryString, (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
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
