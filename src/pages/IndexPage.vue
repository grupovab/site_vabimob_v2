<template>
  <section class="relative-position">
    <!-- BACKGROUND -->
    <q-img src="./../assets/img-2.png" fit="cover" class="full-height" style="height: 85vh" />

    <!-- OVERLAY -->
    <div class="absolute-full bg-black" style="opacity: 0.25" />

    <!-- CONTENT -->
    <div class="absolute-full row items-center justify-center">
      <div class="col-11 col-md-10">
        <div class="row items-center justify-between q-col-gutter-xl">
          <!-- TEXTO -->
          <div class="col-12 col-md-7 text-white">
            <div class="text-h3 text-weight-medium">Ideal para você!</div>
          </div>

          <!-- CARD -->
          <div class="col-12 col-md-4">
            <q-card flat class="bg-blue-grey-10 text-white" bordered>
              <q-card-section>
                <div class="text-h6">SANFRAN 43</div>

                <div class="row items-center q-mt-sm">
                  <span class="text-primary q-mr-sm"> Ofertas </span>

                  <q-badge color="white" text-color="dark"> ALUGUEL </q-badge>
                </div>
              </q-card-section>

              <q-separator dark />

              <q-card-section>
                <div class="row items-center q-mb-sm">
                  <q-icon name="bed" size="18px" class="q-mr-xs" />
                  Quartos:
                  <span class="text-weight-bold q-ml-xs"> 1 </span>
                </div>

                <div class="row items-center q-mb-sm">
                  <q-icon name="bathtub" size="18px" class="q-mr-xs" />
                  Banheiros:
                  <span class="text-weight-bold q-ml-xs"> 1 </span>
                </div>

                <div class="row items-start q-mb-md">
                  <q-icon name="home" size="18px" class="q-mr-xs q-mt-xs" />
                  Tipo:
                  <span class="text-weight-bold q-ml-xs">
                    Apartamento, Prédio, Residencial, Studio
                  </span>
                </div>

                <q-btn
                  label="Ver mais"
                  color="primary"
                  unelevated
                  icon-right="chevron_right"
                  class="full-width"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="destaques">
    <div class="row justify-center">
      <div class="col-10">
        <!-- TÍTULO -->
        <h2 class="text-h5 q-mb-lg">Imóveis em Destaque</h2>

        <!-- GRID -->
        <div class="row q-col-gutter-lg">
          <!-- CARD 1 -->
          <div class="col-12 col-md-4">
            <q-card flat class="imovel-card">
              <q-img src="./../assets/img-3.jpg" />

              <div class="card-footer">
                <div class="titulo">CÁSPER LÍBERO</div>

                <div class="row items-center justify-between q-mt-sm">
                  <span class="oferta"> Ofertas </span>

                  <q-badge color="white" text-color="dark"> ALUGUEL </q-badge>
                </div>
              </div>
            </q-card>
          </div>

          <!-- CARD 2 -->
          <div class="col-12 col-md-4">
            <q-card flat class="imovel-card">
              <q-img src="./../assets/img-4.png" />

              <div class="card-footer">
                <div class="titulo">SANFRAN 43</div>

                <div class="row items-center justify-between q-mt-sm">
                  <span class="oferta"> Ofertas </span>

                  <q-badge color="white" text-color="dark"> ALUGUEL </q-badge>
                </div>
              </div>
            </q-card>
          </div>

          <!-- CARD 3 -->
          <div class="col-12 col-md-4">
            <q-card flat class="imovel-card">
              <q-img src="./../assets/img-5.jpeg" />

              <div class="card-footer">
                <div class="titulo">Ed. HERCULANO</div>

                <div class="row items-center justify-between q-mt-sm">
                  <span class="oferta"> Ofertas </span>

                  <q-badge color="white" text-color="dark"> ALUGUEL </q-badge>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-grey-1 q-py-xl">
    <div class="row justify-center">
      <div class="col-11 col-md-10">
        <!-- HEADER -->
        <div class="row items-center justify-between q-mb-lg">
          <div class="text-h5 text-weight-medium">Últimas notícias</div>

          <!-- SETAS -->
          <div class="row q-gutter-sm">
            <q-btn flat round icon="chevron_left" @click="prev" />

            <q-btn flat round icon="chevron_right" @click="next" />
          </div>
        </div>

        <!-- CAROUSEL -->
        <q-carousel
          v-model="slide"
          animated
          swipeable
          infinite
          height="260px"
          navigation="false"
          arrows="false"
        >
          <!-- SLIDE 1 -->
          <q-carousel-slide :name="1">
            <div class="row q-col-gutter-xl">
              <div class="col-12 col-md-6">
                <q-card flat>
                  <div class="row q-col-gutter-md">
                    <div class="col-5">
                      <q-img src="./../assets/img-6.png" />
                    </div>

                    <div class="col-7">
                      <div class="text-h6">O que podemos esperar de 2026?</div>

                      <div class="text-caption q-mt-xs">
                        Por <span class="text-primary">Vabimob</span>
                      </div>

                      <div class="q-mt-sm text-body2">
                        O que podemos esperar de 2026? Um ano que promete novas oportunidades...
                      </div>

                      <q-btn
                        flat
                        color="primary"
                        label="Leia mais"
                        icon-right="chevron_right"
                        class="q-mt-sm"
                      />
                    </div>
                  </div>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <q-card flat>
                  <div class="row q-col-gutter-md">
                    <div class="col-5">
                      <q-img src="./../assets/img-7.png" />
                    </div>

                    <div class="col-7">
                      <div class="text-h6">
                        Sanfran 43 e 217: tradição, modernidade e estilo de vida urbano
                      </div>

                      <div class="text-caption q-mt-xs">
                        Por <span class="text-primary">Vabimob</span>
                      </div>

                      <div class="q-mt-sm text-body2">
                        Tradição, modernidade e um estilo de vida urbano que está cada vez mais...
                      </div>

                      <q-btn
                        flat
                        color="primary"
                        label="Leia mais"
                        icon-right="chevron_right"
                        class="q-mt-sm"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>

          <!-- SLIDE 2 -->
          <q-carousel-slide :name="2">
            <div class="row q-col-gutter-xl">
              <div class="col-12 col-md-6">
                <q-card flat>
                  <div class="row q-col-gutter-md">
                    <div class="col-5">
                      <q-img src="./../assets/img-8.png" />
                    </div>

                    <div class="col-7">
                      <div class="text-h6">O novo bairro dos jovens profissionais</div>

                      <div class="text-caption q-mt-xs">
                        Por <span class="text-primary">Vabimob</span>
                      </div>

                      <div class="q-mt-sm text-body2">
                        O centro de São Paulo está vivendo um novo capítulo...
                      </div>

                      <q-btn
                        flat
                        color="primary"
                        label="Leia mais"
                        icon-right="chevron_right"
                        class="q-mt-sm"
                      />
                    </div>
                  </div>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <q-card flat>
                  <div class="row q-col-gutter-md">
                    <div class="col-5">
                      <q-img src="./../assets/img-9.png" />
                    </div>

                    <div class="col-7">
                      <div class="text-h6">Viver em um VABIMOB é ter tudo a poucos passos</div>

                      <div class="text-caption q-mt-xs">
                        Por <span class="text-primary">Vabimob</span>
                      </div>

                      <div class="q-mt-sm text-body2">
                        Viver em um VABIMOB é estar conectado a tudo...
                      </div>

                      <q-btn
                        flat
                        color="primary"
                        label="Leia mais"
                        icon-right="chevron_right"
                        class="q-mt-sm"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>

          <!-- SLIDE 3 -->
          <q-carousel-slide :name="3">
            <div class="row q-col-gutter-xl">
              <div class="col-12 col-md-6">
                <q-card flat>
                  <div class="row q-col-gutter-md">
                    <div class="col-5">
                      <q-img src="./../assets/img-10.png" />
                    </div>

                    <div class="col-7">
                      <div class="text-h6">São Paulo: 2025 foi um ano forte de eventos!</div>

                      <div class="text-caption q-mt-xs">
                        Por <span class="text-primary">Vabimob</span>
                      </div>

                      <div class="q-mt-sm text-body2">
                        São Paulo nunca para — e 2025 provou isso! 🚀
                      </div>

                      <q-btn
                        flat
                        color="primary"
                        label="Leia mais"
                        icon-right="chevron_right"
                        class="q-mt-sm"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const totalSlides = 3

const next = () => {
  slide.value = slide.value < totalSlides ? slide.value + 1 : 1
}

const prev = () => {
  slide.value = slide.value > 1 ? slide.value - 1 : totalSlides
}
</script>

<style>
.destaques {
  padding: 80px 0;
}

.imovel-card {
  border-radius: 0;
  overflow: hidden;
}

.card-footer {
  background: #2f4b87;
  padding: 16px;
  color: #fff;
}

.titulo {
  font-weight: 600;
  font-size: 14px;
}

.oferta {
  color: #00c3ff;
  font-size: 13px;
}
</style>
