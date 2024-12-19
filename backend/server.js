const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // to handle CORS errors

const app = express();
const port = 3000;

// Allow your Quasar app to access this server
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',  // Your database host
  user: 'vloncar',       // Your database user
  password: '11',       // Your database password
  database: 'vloncar' // Your database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Simple route to test the connection
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
