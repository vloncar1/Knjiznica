<template>
  <div class="fullscreen bg-lime text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        Error
      </div>

      <div class="text-h2" style="opacity:.4">
        Not found
      </div>

      <q-btn
        class="q-mt-xl"
        color="Lime"
        text-color="Lime"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>