<template>
    <q-page padding>
      <h1>Popis Knjiga</h1>
<<<<<<< HEAD
      <p>Popis svih dostupnih knjiga. Odaberite knjigu za rezervaciju.</p>
  
=======
      <p>Popis svih dostupnih knjiga. Kliknite na "Rezerviraj" kako biste rezervirali knjigu.</p>
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
      <q-table
        :rows="books"
        :columns="columns"
        row-key="id"
<<<<<<< HEAD
        :rows-label="rowsLabel"
      >
        <template v-slot:body-cell-stanje="props">
          <q-td :props="props">
            <span>{{ props.row.stanje }} dostupno</span>
            <q-btn
              v-if="props.row.stanje > 0"
              color="primary"
              label="Rezerviraj"
              @click="rezervirajKnjigu(props.row)"
            />
            <span v-else>Kniga nije dostupna</span>
=======
        :rows-per-page-options="[5, 10, 15]"
      >
        <template v-slot:body-cell-stanje="props">
          <q-td :props="props">
            <div>
              {{ props.row.stanje }} <span v-if="props.row.stanje > 0">(Dostupno)</span>
              <q-btn
                v-if="props.row.stanje > 0 && !props.row.reservirano"
                color="primary"
                label="Rezerviraj"
                @click="reserveBook(props.row)"
                size="sm"
              />
              <span v-if="props.row.reservirano">Rezervirano</span>
            </div>
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          </q-td>
        </template>
      </q-table>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [
          { 
            id: 1, 
            naslov: 'Posljednja želja', 
            autor: 'Andrzej Sapkowski', 
            opis: '“Posljednja želja” prva je od sedam knjiga “Sage o vješcu”, koju čine dvije zbirke pripovjedaka i pet romana.',
<<<<<<< HEAD
            stanje: 1 
=======
            stanje: 1, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 2, 
            naslov: 'Fahrenheit 451', 
            autor: 'Ray Bradbury', 
<<<<<<< HEAD
            opis: 'Distopijski roman koji opisuje budućnost američkog društva u kojem su knjige zabranjene.', 
            stanje: 4 
=======
            opis: 'Distopijski roman koji opisuje budućnost američkog društva u kojem su knjige zabranjene.',
            stanje: 4, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 3, 
            naslov: 'Vodič kroz galaksiju za autostopere', 
            autor: 'Douglas Adams', 
            opis: 'Britanski znanstvenofantastični satirični roman o uništenju Zemlje.', 
<<<<<<< HEAD
            stanje: 2 
=======
            stanje: 2, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 4, 
            naslov: 'Tajna krvavog mosta', 
            autor: 'Marija Jurić Zagorka', 
            opis: 'Roman koji opisuje povijesno hrvatsko plemstvo te misterij serijskog ubojice.', 
<<<<<<< HEAD
            stanje: 2
=======
            stanje: 2, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 5, 
            naslov: 'Crveni ustanak', 
            autor: 'Pierce Brown', 
            opis: 'Prvi roman distopijskog serijala knjiga koji opisuju budućnost čovječanstva, kolonije na Marsu i društvo u njima.', 
<<<<<<< HEAD
            stanje: 3 
=======
            stanje: 3, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 6, 
            naslov: 'Zločin i kazna', 
            autor: 'Fjodor Dostojevski', 
            opis: 'Ruski roman koji istražuje dubinu ljudske duše i moralne dileme jednog ubojice.', 
<<<<<<< HEAD
            stanje: 1 
=======
            stanje: 1, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
          { 
            id: 7, 
            naslov: 'Percy Jackson i Olimpijci', 
            autor: 'Rick Riordan', 
            opis: 'Roman o 12-godišnjem Percy Jacksonu koji putuje kroz SAD i doživljava razne mitološke avanture.', 
<<<<<<< HEAD
            stanje: 1 
=======
            stanje: 1, 
            rezervirano: false 
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          },
        ],
        columns: [
          { name: 'id', label: 'ID', field: 'id', align: 'left' },
          { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
          { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
          { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
<<<<<<< HEAD
          { name: 'stanje', label: 'Stanje', field: 'stanje', align: 'left' },
        ],
        rowsLabel: 'Knjižna ponuda',
      };
    },
    methods: {
      rezervirajKnjigu(knjiga) {
        if (knjiga.stanje > 0) {
          knjiga.stanje--;
          this.$q.notify({
            color: 'green',
            icon: 'check_circle',
            message: `Knjiga "${knjiga.naslov}" uspješno rezervirana!`
          });
        } else {
          this.$q.notify({
            color: 'negative',
            icon: 'error',
            message: `Knjiga "${knjiga.naslov}" nije dostupna za rezervaciju.`
=======
          { name: 'stanje', label: 'Stanje', field: 'stanje', align: 'left' }
        ]
      };
    },
    methods: {
      reserveBook(book) {
        if (book.stanje > 0 && !book.rezervirano) {
          book.stanje -= 1;
          book.rezervirano = true;
          this.$q.notify({
            type: 'positive',
            message: `Knjiga "${book.naslov}" je uspješno rezervirana!`
          });
        } else {
          this.$q.notify({
            type: 'negative',
            message: `Knjiga "${book.naslov}" trenutno nije dostupna za rezervaciju.`
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
<<<<<<< HEAD
  q-btn {
    margin-top: 5px;
=======
  .q-table td {
    padding: 8px;
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
  }
  </style>
  