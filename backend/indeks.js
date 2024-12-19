require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "ucka.veleri.hr",
  user: "vloncar",
  password: "11",
  database: "vloncar",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the database!");
});

app.use(cors());

app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ message: "Error fetching books" });
    }
    res.send(results);
  });
});

app.get("/api/knjige/naslov/:naslov", (req, res) => {
  const naslov = `%${req.params.naslov}%`;
  connection.query(
    "SELECT * FROM knjiga WHERE naslov LIKE ?",
    [naslov],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send({ message: "Error fetching books by title" });
      }
      res.send(results);
    }
  );
});

app.get("/api/knjige/autor/:autor", (req, res) => {
  const autor = `%${req.params.autor}%`;
  connection.query(
    "SELECT * FROM knjiga WHERE autor LIKE ?",
    [autor],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send({ message: "Error fetching books by author" });
      }
      res.send(results);
    }
  );
});

app.get("/api/slob_knjige", (req, res) => {
  const query = `
  SELECT 
  (knjiga.stanje - COUNT(rezervacija.knjiga_id)) AS slobodne, 
  knjiga.id, knjiga.naslov, knjiga.stanje 
  FROM knjiga 
  LEFT JOIN rezervacija ON knjiga.id = rezervacija.knjiga_id 
  GROUP BY knjiga.id`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ message: "Error fetching available books" });
    }
    res.send(results);
  });
});

app.post("/api/rezerv_knjige/:knjiga_id", (req, res) => {
  const knjiga_id = req.params.knjiga_id;
  const { korisnik_id, datum } = req.body;

  connection.query(
    "SELECT stanje FROM knjiga WHERE id = ?",
    [knjiga_id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send({ message: "Error checking book availability" });
      }

      const stanje = results[0]?.stanje || 0;
      if (stanje <= 0) {
        return res.status(400).send({ message: "No available copies of this book" });
      }

      connection.query(
        "INSERT INTO rezervacija (datum_rezervacije, knjiga_id, korisnik_id) VALUES (?, ?, ?)",
        [datum, knjiga_id, korisnik_id],
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).send({ message: "Error making reservation" });
          }

          connection.query(
            "UPDATE knjiga SET stanje = stanje - 1 WHERE id = ?",
            [knjiga_id],
            (error, updateResults) => {
              if (error) {
                console.error(error);
                return res.status(500).send({ message: "Error updating book availability" });
              }

              res.send({ message: "Reservation successful" });
            }
          );
        }
      );
    }
  );
});

app.delete("/api/rezerv_knjige/:knjiga_id", (req, res) => {
  const knjiga_id = req.params.knjiga_id;

  connection.query(
    "SELECT * FROM rezervacija WHERE knjiga_id = ? LIMIT 1",
    [knjiga_id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send({ message: "Error fetching reservation" });
      }
      if (results.length === 0) {
        return res.status(404).send({ message: "Reservation not found" });
      }

      connection.query(
        "DELETE FROM rezervacija WHERE knjiga_id = ?",
        [knjiga_id],
        (error, deleteResults) => {
          if (error) {
            console.error(error);
            return res.status(500).send({ message: "Error deleting reservation" });
          }

          connection.query(
            "UPDATE knjiga SET stanje = stanje + 1 WHERE id = ?",
            [knjiga_id],
            (error, updateResults) => {
              if (error) {
                console.error(error);
                return res.status(500).send({ message: "Error updating book availability" });
              }

              res.send({ message: "Reservation cancelled and stock updated" });
            }
          );
        }
      );
    }
  );
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
