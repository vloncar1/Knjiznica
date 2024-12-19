<<<<<<< HEAD
require('dotenv').config();

=======
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
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
<<<<<<< HEAD
    console.error("Error connecting to the database:", err);
=======
    console.error("Greška prilikom spajanja na bazu:", err);
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
    process.exit(1);
  }
  console.log("Connected to the database!");
});

app.use(cors());

app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
<<<<<<< HEAD
    if (error) {
      console.error(error);
      return res.status(500).send({ message: "Error fetching books" });
    }
=======
    if (error) throw error;
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
    res.send(results);
  });
});

<<<<<<< HEAD
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

=======
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
app.get("/api/slob_knjige", (req, res) => {
  const query = `
  SELECT 
  (knjiga.stanje - COUNT(rezervacija.knjiga_id)) AS slobodne, 
  knjiga.id, knjiga.naslov, knjiga.stanje 
  FROM knjiga 
  LEFT JOIN rezervacija ON knjiga.id = rezervacija.knjiga_id 
  GROUP BY knjiga.id`;
  connection.query(query, (error, results) => {
<<<<<<< HEAD
    if (error) {
      console.error(error);
      return res.status(500).send({ message: "Error fetching available books" });
    }
=======
    if (error) throw error;
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
    res.send(results);
  });
});

app.post("/api/rezerv_knjige/:knjiga_id", (req, res) => {
  const knjiga_id = req.params.knjiga_id;
  const { korisnik_id, datum } = req.body;

<<<<<<< HEAD
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
=======
  const checkQuery = `
  SELECT stanje - (SELECT COUNT(*) FROM rezervacija WHERE knjiga_id = ?) AS slobodne
  FROM knjiga WHERE id = ?`;

  connection.query(checkQuery, [knjiga_id, knjiga_id], (checkError, checkResults) => {
    if (checkError) throw checkError;
    const slobodne = checkResults[0].slobodne;

    if (slobodne > 0) {
      const query = `
      INSERT INTO rezervacija (datum_rezervacije, knjiga_id, korisnik_id) 
      VALUES (?, ?, ?)`;

      connection.query(query, [datum, knjiga_id, korisnik_id], (error, results) => {
        if (error) throw error;

        const updateQuery = "UPDATE knjiga SET stanje = stanje - 1 WHERE id = ?";
        connection.query(updateQuery, [knjiga_id], (updateError, updateResults) => {
          if (updateError) throw updateError;
          res.send({ message: "Knjiga je uspješno rezervirana!" });
        });
      });
    } else {
      res.status(400).send({ message: "Nema slobodnih knjiga za rezervaciju." });
    }
  });
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
});

app.delete("/api/rezerv_knjige/:knjiga_id", (req, res) => {
  const knjiga_id = req.params.knjiga_id;
<<<<<<< HEAD

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

=======
  const { korisnik_id } = req.body;

  const query = `
  DELETE FROM rezervacija WHERE knjiga_id = ? AND korisnik_id = ?`;

  connection.query(query, [knjiga_id, korisnik_id], (error, results) => {
    if (error) throw error;

    const updateQuery = "UPDATE knjiga SET stanje = stanje + 1 WHERE id = ?";
    connection.query(updateQuery, [knjiga_id], (updateError, updateResults) => {
      if (updateError) throw updateError;
      res.send({ message: "Rezervacija je uspješno otkazana." });
    });
  });
});

app.get("/api/korisnici", (req, res) => {
  connection.query("SELECT * FROM korisnik", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.put("/api/izmj_kor/:korisnik_id", (req, res) => {
  const korisnik_id = req.params.korisnik_id;
  const { ime, email, broj_telefona } = req.body;
  const query = `
  UPDATE korisnik 
  SET ime = ?, email = ?, broj_telefona = ? 
  WHERE id = ?`;

  connection.query(query, [ime, email, broj_telefona, korisnik_id], (error, results) => {
    if (error) throw error;
    res.json({ message: "Podaci korisnika su ažurirani" });
  });
});
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
