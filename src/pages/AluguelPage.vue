<template>
  <div class="row justify-center q-my-xl">
    <div class="col-10">
      <div class="row">
        <div class="col-12">
          <div class="row q-col-gutter-lg">
            <div v-for="(item, i) in imoveis" :key="i" class="col-12 col-md-4">
              <ImovelCard
                :title="item.title"
                :image="item.image"
                :type="item.type"
                :link="item.link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImovelCard from './../components/ImovelCard.vue'

import img1 from '../assets/img-2-imoveis-alugueis.jpeg'
import img2 from '../assets/img-3-imoveis-alugueis.jpeg'
import img3 from '../assets/img-4-imoveis-alugueis.jpeg'
import img4 from '../assets/img-5-imoveis-alugueis.jpg'
import img5 from '../assets/img-6-imoveis-alugueis.jpg'
import img6 from '../assets/img-7-imoveis-alugueis.png'
import img7 from '../assets/img-5.jpeg'

// import img8 from '../assets/img-8.jpeg'


const imoveis = [
  {
    title: 'LOJA RIACHUELO 221',
    image: img1,
    type: 'ALUGUEL',
    link: '/aluguel/loja-riachuelo-221',
  },
  {
    title: 'LOJA 51 - SÉ',
    image: img2,
    type: 'ALUGUEL',
    link: '/aluguel/loja-51-se',
  },
  {
    title: 'LOJA 33 - SÉ',
    image: img3,
    type: 'ALUGUEL',
    link: '/aluguel/loja-33-se',
  },
  {
    title: 'AL. SANTO AMARO',
    image: img4,
    type: 'ALUGUEL',
    link: '/aluguel/4313-2',
  },
  {
    title: 'CÁSPER LÍBERO',
    image: img5,
    type: 'ALUGUEL',
    link: '/aluguel/casper-libero',
  },
  {
    title: 'SANFRAN 43',
    image: img6,
    type: 'ALUGUEL',
    link: '/aluguel/apartamento-sanfran',
  },
  {
    title: 'ED. HERCULANO',
    image: img7,
    type: 'ALUGUEL',
    link: '/aluguel/apartamento-herculano',
  },
]
</script>
