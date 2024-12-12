<template>
  <q-page padding>
    <q-card dark bordered class="bg-lime my-card">
      <q-card-section>
        <q-img src="~assets/knjiga.jpg" alt="Slika" :height="300">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">O nama</div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h4 text-justify">
        {{ onama }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup () {
    const onama = 'Naša knjižnica je mjesto gdje ljubav prema knjigama susreće strast prema učenju. S bogatom kolekcijom knjiga, časopisa i drugih medija, pružamo resurse koji potiču intelektualni rast svih generacija. Kroz naše programe i aktivnosti, nastojimo biti središte kulture i zajedništva. Bilo da ste ljubitelj fikcije, povijesti, znanstvene literature ili tražite alat za osobni razvoj, naša knjižnica nudi bogatstvo sadržaja koji će zadovoljiti vaše interese. Posjetite nas i otkrijte svijet knjiga koji čeka da ga istražite.';
    
    return { onama };
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>