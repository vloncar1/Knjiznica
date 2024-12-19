<template>
    <q-page padding>
      <h1>Popis Knjiga</h1>
      <p>Popis svih dostupnih knjiga. Kliknite na "Rezerviraj" kako biste rezervirali knjigu.</p>
      <q-table
        :rows="books"
        :columns="columns"
        row-key="id"
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
            stanje: 1, 
            rezervirano: false 
          },
          { 
            id: 2, 
            naslov: 'Fahrenheit 451', 
            autor: 'Ray Bradbury', 
            opis: 'Distopijski roman koji opisuje budućnost američkog društva u kojem su knjige zabranjene.',
            stanje: 4, 
            rezervirano: false 
          },
          { 
            id: 3, 
            naslov: 'Vodič kroz galaksiju za autostopere', 
            autor: 'Douglas Adams', 
            opis: 'Britanski znanstvenofantastični satirični roman o uništenju Zemlje.', 
            stanje: 2, 
            rezervirano: false 
          },
          { 
            id: 4, 
            naslov: 'Tajna krvavog mosta', 
            autor: 'Marija Jurić Zagorka', 
            opis: 'Roman koji opisuje povijesno hrvatsko plemstvo te misterij serijskog ubojice.', 
            stanje: 2, 
            rezervirano: false 
          },
          { 
            id: 5, 
            naslov: 'Crveni ustanak', 
            autor: 'Pierce Brown', 
            opis: 'Prvi roman distopijskog serijala knjiga koji opisuju budućnost čovječanstva, kolonije na Marsu i društvo u njima.', 
            stanje: 3, 
            rezervirano: false 
          },
          { 
            id: 6, 
            naslov: 'Zločin i kazna', 
            autor: 'Fjodor Dostojevski', 
            opis: 'Ruski roman koji istražuje dubinu ljudske duše i moralne dileme jednog ubojice.', 
            stanje: 1, 
            rezervirano: false 
          },
          { 
            id: 7, 
            naslov: 'Percy Jackson i Olimpijci', 
            autor: 'Rick Riordan', 
            opis: 'Roman o 12-godišnjem Percy Jacksonu koji putuje kroz SAD i doživljava razne mitološke avanture.', 
            stanje: 1, 
            rezervirano: false 
          },
        ],
        columns: [
          { name: 'id', label: 'ID', field: 'id', align: 'left' },
          { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
          { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
          { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
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
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .q-table td {
    padding: 8px;
  }
  </style>
  