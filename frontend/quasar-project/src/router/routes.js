const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/PopisKnjiga', component: () => {
          return import('pages/PopisKnjigaPage.vue')
        }
      },
      { path: '/Pretrazivanje', component: () => { return import('pages/PretrazivanjePage.vue') } },
      { path: '/Onama', component: () => { return import('src/pages/OnamaPage.vue') } },
      { path: '/Lokacija', component: () => { return import('pages/LokacijaPage.vue') } },
      { path: '/Login', component: () => { return import('pages/LoginPage.vue') } },
      { path: '/Registracija', component: () => { return import('pages/RegistracijaPage.vue') } },
<<<<<<< HEAD
      { path: '/PopisKnjiga1', component: () => { return import('pages/PopisKnjiga1Page.vue') } },
      { path: '/Rezervacija', component: () => { return import('pages/RezervacijaPage.vue') } },
      { path: '/Admin', component: () => { return import('pages/AdminPage.vue') } }
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/', component: () => { return import('pages/AdminPage.vue') } },
      { path: '/admin/popis_knjiga', component: () => { return import('pages/PopisKnjigaPage.vue') } },
      { path: '/admin/pretrazivanje', component: () => { return import('pages/PretrazivanjePage.vue') } },
      { path: '/admin/popis_korisnika', component: () => { return import('pages/PopisKorisnikaPage.vue') } },
      { path: '/admin/unos_knjiga', component: () => { return import('pages/UnosKnjigaPage.vue') } },
      { path: '/logout', component: () => { return import('pages/LogoutPage.vue') } }
    ]
  },

=======
      { path: '/PopisKnjigaBaza', component: () => { return import('pages/PopisKnjigaBazaPage.vue') } },
      { path: '/Rezervacija', component: () => { return import('pages/RezervacijaPage.vue') } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
>>>>>>> 0fb2a8b26752c70423a731a678831be55799ffef
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
