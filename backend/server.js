const express = require('express');
const mysql = require('mysql2');
<<<<<<< HEAD
const cors = require('cors'); // to handle CORS errors
=======
const cors = require('cors');
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef

const app = express();
const port = 3000;

<<<<<<< HEAD
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
=======
app.use(cors());

const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'vloncar',
  password: '11',
  database: 'vloncar'
});

>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

<<<<<<< HEAD
// Simple route to test the connection
=======
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
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
