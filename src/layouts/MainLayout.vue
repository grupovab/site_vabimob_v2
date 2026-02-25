<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-dark">
      <div>
        <div class="row items-center lt-md">
          <q-btn flat dense icon="menu" @click="drawer = true" />

          <q-img
            src="./../assets/logo-vabimob.svg"
            alt="Vabimob"
            class="q-ml-sm"
            style="width: 120px"
            to="/"
          />
        </div>

        <!-- DESKTOP -->
        <div class="row justify-center gt-sm">
          <div class="col-10">
            <div class="row">
              <div class="col-2 items-center justify-center flex">
                <q-img
                  src="./../assets/logo-vabimob.svg"
                  alt="Vabimob"
                  class="q-ml-sm"
                  style="width: 120px"
                  to="/"
                />
              </div>
              <div class="col-md">
                <div class="">
                  <div class="flex justify-right items-center q-pa-sm">
                    <a :href="whatsLink" target="_blank" class="text-dark no-decoration">
                      <q-icon name="call" size="18px" class="q-mr-xs" />
                      11 99665-3427
                    </a>

                    <q-btn flat round icon="mdi-linkedin" />
                    <q-btn flat round icon="mdi-whatsapp" :href="whatsLink" target="_blank" />
                    <q-btn flat round icon="mdi-facebook" />
                    <q-btn flat round icon="mdi-instagram" />
                  </div>

                  <q-separator />

                  <div class="">
                    <q-tabs align="left" active-color="primary" indicator-color="primary">
                      <q-route-tab to="/" label="Início" />
                      <q-route-tab to="/quem-somos" label="Quem somos" />
                      <q-route-tab to="/compra" label="Compra" />
                      <q-route-tab to="/aluguel" label="Aluguel" />
                      <q-route-tab to="/blog" label="Blog" />
                      <q-route-tab to="/contato" label="Contato" />
                    </q-tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="drawer" side="left" overlay bordered>
      <q-list>
        <q-item clickable to="/">
          <q-item-section>Início</q-item-section>
        </q-item>

        <q-item clickable to="/quem-somos">
          <q-item-section>Quem somos</q-item-section>
        </q-item>

        <q-item clickable to="/compra">
          <q-item-section>Compra</q-item-section>
        </q-item>

        <q-item clickable to="/aluguel">
          <q-item-section>Aluguel</q-item-section>
        </q-item>

        <q-item clickable to="/blog">
          <q-item-section>Blog</q-item-section>
        </q-item>

        <q-item clickable to="/contato">
          <q-item-section>Contato</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable :href="whatsLink" target="_blank">
          <q-item-section>📞 11 99665-3427</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="newsletter row justify-center">
      <div class="col-10">
        <div class="row items-center q-col-gutter-x-sm">
          <div class="col-12 col-md-4 text-white text-h6">Novidades</div>

          <div class="col-12 col-md-8">
            <div class="row no-wrap">
              <q-input outlined dense placeholder="Seu Nome" class="col" bg-color="white" />

              <q-input
                outlined
                dense
                placeholder="Seu E-mail"
                class="col q-mx-sm"
                bg-color="white"
              />

              <q-btn label="INSCREVER-SE" class="btn-newsletter" unelevated />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer bg-secondary text-white row justify-center">
      <div class="col-10">
        <div class="row q-col-gutter-x-sm">
          <!-- LOGO -->
          <div class="col-12 col-md-3">
            <div class="row items-center q-mb-md">
              <q-img
                src="./../assets/logo-vabimob-branco.svg"
                class="q-mr-sm"
                style="width: 150px"
              />
            </div>

            <p class="text-caption">
              Focada na compra, venda e locação de imóveis comerciais e residenciais.
            </p>
          </div>

          <!-- NAVEGAÇÃO -->
          <div class="col-12 col-md-6">
            <p class="text-bold q-mb-sm">NAVEGAÇÃO</p>

            <div class="row">
              <div class="col">
                <q-btn no-caps  flat class="full-width" to="/" label="Início" />
              </div>
              <div class="col">
                <q-btn no-caps  flat class="full-width" no-wrap to="/quem-somos" label="Quem somos" />
              </div>
              <div class="col">
                <q-btn no-caps  flat class="full-width" to="/compra" label="Compra" />
              </div>
              <div class="col">
                <q-btn no-caps  flat class="full-width" to="/aluguel" label="Aluguel" />
              </div>
              <div class="col">
                <q-btn no-caps  flat class="full-width" to="/blog" label="Blog" />
              </div>
              <div class="col">
                <q-btn no-caps  flat class="full-width" to="/contato" label="Contato" />
              </div>
            </div>
          </div>

          <!-- REDES -->
          <div class="col-12 col-md-3">
            <p class="text-bold q-mb-sm">SIGA-NOS</p>

            <div class="row q-gutter-sm">
              <q-btn flat round icon="mdi-facebook" />
              <q-btn flat round icon="mdi-linkedin" />
              <q-btn flat round icon="mdi-instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const whatsLink = 'https://wa.me/5511996653427'
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 16px;
}

.no-decoration {
  text-decoration: none;
}

/* NEWSLETTER */
.newsletter {
  background: #c9ced6;
  padding: 24px 0;
}

.btn-newsletter {
  background: #e18b2c;
  color: white;
  border-radius: 0;
}

/* FOOTER */
.footer {
  padding: 40px 0;
}

/* MOBILE */
@media (max-width: 768px) {
  .newsletter .row {
    flex-direction: column;
  }

  .btn-newsletter {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
