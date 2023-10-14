const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlValues = req.body;
    const query = `
    SELECT horse_pic.image
        FROM horse_pic
        WHERE id = $1
    `;
    pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get horse pic', err);
        res.sendStatus(500)
      })
  });