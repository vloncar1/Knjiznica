<template>
    <q-page padding>
      <h1>Popis Knjiga</h1>
      <p>Popis svih dostupnih knjiga. Odaberite knjigu za rezervaciju.</p>
  
      <q-table
        :rows="books"
        :columns="columns"
        row-key="id"
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
            stanje: 1 
          },
          { 
            id: 2, 
            naslov: 'Fahrenheit 451', 
            autor: 'Ray Bradbury', 
            opis: 'Distopijski roman koji opisuje budućnost američkog društva u kojem su knjige zabranjene.', 
            stanje: 4 
          },
          { 
            id: 3, 
            naslov: 'Vodič kroz galaksiju za autostopere', 
            autor: 'Douglas Adams', 
            opis: 'Britanski znanstvenofantastični satirični roman o uništenju Zemlje.', 
            stanje: 2 
          },
          { 
            id: 4, 
            naslov: 'Tajna krvavog mosta', 
            autor: 'Marija Jurić Zagorka', 
            opis: 'Roman koji opisuje povijesno hrvatsko plemstvo te misterij serijskog ubojice.', 
            stanje: 2
          },
          { 
            id: 5, 
            naslov: 'Crveni ustanak', 
            autor: 'Pierce Brown', 
            opis: 'Prvi roman distopijskog serijala knjiga koji opisuju budućnost čovječanstva, kolonije na Marsu i društvo u njima.', 
            stanje: 3 
          },
          { 
            id: 6, 
            naslov: 'Zločin i kazna', 
            autor: 'Fjodor Dostojevski', 
            opis: 'Ruski roman koji istražuje dubinu ljudske duše i moralne dileme jednog ubojice.', 
            stanje: 1 
          },
          { 
            id: 7, 
            naslov: 'Percy Jackson i Olimpijci', 
            autor: 'Rick Riordan', 
            opis: 'Roman o 12-godišnjem Percy Jacksonu koji putuje kroz SAD i doživljava razne mitološke avanture.', 
            stanje: 1 
          },
        ],
        columns: [
          { name: 'id', label: 'ID', field: 'id', align: 'left' },
          { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
          { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
          { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
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
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  q-btn {
    margin-top: 5px;
  }
  </style>
  