<template>
  <q-card flat class="overflow-hidden cursor-pointer" @click="goTo">
    <!-- IMAGEM -->
    <q-img :src="image" />

    <!-- FOOTER -->
    <q-card-section class="bg-blue-9 text-white">
      <div class="text-weight-medium">
        {{ title }}
      </div>

      <div class="row items-center justify-between q-mt-sm">
        <span class="text-cyan-4"> Ofertas </span>

        <q-badge color="white" text-color="dark">
          {{ type }}
        </q-badge>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'ALUGUEL', // ou COMPRA
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
