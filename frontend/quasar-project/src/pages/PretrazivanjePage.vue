<template>
  <q-page padding>
    <h1>Pretrazivanje</h1>
    <p>Pretrazivanje knjiga</p>

    <!-- Pretraga -->
    <div class="search-container">
      <q-input
        v-model="searchQuery"
        label="Unesite naziv knjige"
        filled
        clearable
      />

      <q-checkbox
        v-model="searchByTitle"
        label="Pretraži po naslovu"
        color="blue"
      />

      <q-checkbox
        v-model="searchByAuthor"
        label="Pretraži po autoru"
        color="blue"
      />

      <q-btn
        label="Traži"
        color="black"
        @click="searchBooks"
        class="search-button"
      />
    </div>

    <!-- Tabela s rezultatima -->
    <q-table
      v-if="filteredBooks.length > 0"
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
      flat
      bordered
      class="results-table"
    >
      <template v-slot:body-cell-slika="props">
        <q-img
          :src="props.row.slika"
          alt="Naslovnica knjige"
          style="width: 50px; height: auto"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      searchByTitle: true,
      searchByAuthor: false,
      searchExecuted: false,
      books: [
        {
          id: 1, 
          naslov: 'Posljednja želja', 
          autor: 'Andrzej Sapkowski', 
          opis: '“Posljednja želja” prva je od sedam knjiga “Sage o vješcu”, koju čine dvije zbirke pripovjedaka i pet romana.',
          slika: 
            "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/1202478.jpg",
          stanje: 1 
        },
        {
          id: 2, 
          naslov: 'Fahrenheit 451', 
          autor: 'Ray Bradbury', 
          opis: 'Distopijski roman koji opisuje budućnost američkog društva u kojem su knjige zabranjene.', 
          slika: 
            "https://vortopalabra.hr/wp-content/uploads/2022/10/fahrenheit-451.jpg",
          stanje: 4 
        },
        { 
          id: 3, 
          naslov: 'Vodič kroz galaksiju za autostopere', 
          autor: 'Douglas Adams', 
          opis: 'Britanski znanstvenofantastični satirični roman o uništenju Zemlje.', 
          slika: "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/176539.jpg",
          stanje: 2 
        },
        {
          id: 4,
          naslov: "Tajna krvavog mosta",
          autor: "Marija Jurić Zagorka",
          opis: "Roman koji opisuje povijesno hrvatsko plemstvo te misterij serijskog ubojice.",
          slika:
            "https://najboljeknjige.com/images/images/books/1560_big.jpg",
          stanje: 2,
        },
        { 
          id: 5, 
          naslov: 'Crveni ustanak', 
          autor: 'Pierce Brown', 
          opis: 'Prvi roman distopijskog serijala knjiga koji opisuju budućnost čovječanstva, kolonije na Marsu i društvo u njima.', 
          slika: 
            "https://znanje.hr/product-images/eba82f7e-2b75-4330-94bd-e1291628d0d8.jpg",
          stanje: 3 
        },
        { 
          id: 6, 
          naslov: 'Zločin i kazna', 
          autor: 'Fjodor Dostojevski', 
          opis: 'Ruski roman koji istražuje dubinu ljudske duše i moralne dileme jednog ubojice.', 
          slika: 
            "https://www.sareni-ducan.hr/wp-content/uploads/2023/01/zlocin_kazna.jpg",
          stanje: 1 
        },
        { 
          id: 7, 
          naslov: 'Percy Jackson i Olimpijci', 
          autor: 'Rick Riordan', 
          opis: 'Roman o 12-godišnjem Percy Jacksonu koji putuje kroz SAD i doživljava razne mitološke avanture.', 
          slika: 
            "https://www.profil.hr/wp-content/uploads/Kradljivac_groma.jpg",
          stanje: 1 
        },
      ],
      filteredBooks: [],
      columns: [
        { name: "id", label: "ID", field: "id", align: "left" },
        { name: "naslov", label: "Naslov", field: "naslov", align: "left" },
        { name: "autor", label: "Autor", field: "autor", align: "left" },
        { name: "opis", label: "Opis", field: "opis", align: "left" },
        { name: "slika", label: "Slika", field: "slika", align: "center" },
        {
          name: "stanje",
          label: "Stanje (ukupan broj primjeraka)",
          field: "stanje",
          align: "right",
        },
      ],
    };
  },
  methods: {
    searchBooks() {
      this.searchExecuted = true;
      this.filteredBooks = this.books.filter((book) => {
        const query = this.searchQuery.toLowerCase();
        return (
          (this.searchByTitle && book.naslov.toLowerCase().includes(query)) ||
          (this.searchByAuthor && book.autor.toLowerCase().includes(query))
        );
      });
    },
  },
};
</script>
