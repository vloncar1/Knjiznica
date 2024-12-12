const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'vloncar',
  password: '11',
  database: 'vloncar'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
