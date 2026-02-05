<template>
  <q-card flat class="overflow-hidden">

    <!-- IMAGEM -->
    <q-img :src="image" />



    <!-- CONTEÚDO -->
    <q-card-section class="bg-cyan-6 text-white">
      <div class="text-h6 text-weight-bold">
        {{ title }}
      </div>

      <div class="text-subtitle1 text-weight-medium">
        {{ subtitle }}
      </div>

      <div class="text-caption q-mt-xs">
        {{ meta }}
      </div>
    </q-card-section>

    <q-card>
      <div class="text-body2" color="black">
        {{ content }}
      </div>

    </q-card>

    <q-btn flat color="white" label="Ler mais" class="q-mt-md bg-warning" @click="goTo" />

  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const goTo = () => {
  router.push(props.link)
}
</script>
