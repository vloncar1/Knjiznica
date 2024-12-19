<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
<<<<<<< HEAD
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
=======
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef

        <q-toolbar-title class="text-h3">
          Knjižnica
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

<<<<<<< HEAD
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
=======
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Naslovnica',
    caption: 'Početna stranica',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis knjiga u knjižnici',
    icon: 'book',
    link: '#/popisKnjiga'
  },
  {
    title: 'Pretraživanje ',
    caption: 'Pretraživanje knjiga',
    icon: 'search',
    link: '#/Pretrazivanje'
  },
  {
    title: 'O nama',
    caption: 'Opći podatci',
    icon: 'record_voice_over',
    link: '#/Onama'
  },
  {
    title: 'Lokacija',
    caption: 'Lokacija knjižnice',
    icon: 'map',
    link: '#/Lokacija'
  },
  {
    title: 'Login',
    caption: 'Prijava',
    icon: 'login',
    link: '#/Login'
  },
  {
    title: 'Registracija',
    caption: 'Registracija',
    icon: 'app_registration',
    link: '#/Registracija'
  },
  {
<<<<<<< HEAD
    title: 'PopisKnjiga1',
    caption: 'PopisKnjiga1',
    icon: 'book',
    link: '#/PopisKnjiga1'
=======
    title: 'Popis Knjiga Baza',
    caption: 'Popis Knjiga Baza',
    icon: '',
    link: '#/PopisKnjigaBaza'
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
  },
  {
    title: 'Rezervacija',
    caption: 'Rezervacija',
<<<<<<< HEAD
    icon: 'note',
    link: '#/Rezervacija'
  },
  {
    title: 'Admin',
    caption: 'Admin',
    icon: 'admin',
    link: '#/Admin'
  },
=======
    icon: '',
    link: '#/Rezervacija'
  },
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
]

const leftDrawerOpen = ref(false)

<<<<<<< HEAD
function toggleLeftDrawer () {
=======
function toggleLeftDrawer() {
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
