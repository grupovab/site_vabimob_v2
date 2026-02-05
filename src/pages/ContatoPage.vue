<template>
  <q-page class="q-pa-xl bg-grey-2">
    <!-- ROW CENTRAL -->
    <div class="row justify-center">
      <div class="col-10">
        <!-- ROW INTERNA -->
        <div class="row shadow-2 bg-white">
          <!-- COL 12 (container) -->
          <div class="col-12 row">
            <!-- BLOCO ESQUERDO -->
            <div class="col-12 col-md-6 q-pa-xl">
              <p class="text-positive">Endereço</p>
              <div class="row items-center q-mb-md">
                <q-icon name="place" size="18px" class="q-mr-sm" />
                <span> Largo da Concórdia, 88 Brás - CEP 03012-010, São Paulo, SP </span>
              </div>

              <div class="row q-mt-lg">
                <!-- Telefones -->
                <div class="col-6">
                  <p class="text-positive">Telefones</p>
                  <p><q-icon name="call" size="16px" /> 11 3777-5034</p>
                  <p><q-icon name="call" size="16px" /> 11 99665-3427</p>
                </div>

                <!-- Horário -->
                <div class="col-6">
                  <p class="text-positive">Horário</p>
                  <p>
                    <q-icon name="schedule" size="16px" />
                    Segunda – Sexta 8h – 17h
                  </p>
                </div>
              </div>

              <div class="q-mt-lg">
                <p class="text-positive">E-mail</p>
                <p>
                  <q-icon name="mail" size="16px" />
                  contato@vabimob.com.br
                </p>
              </div>
            </div>

            <!-- BLOCO DIREITO (FORM) -->
            <div class="col-12 col-md-6 bg-secondary q-pa-xl text-white">
              <h6 class="q-mb-lg">Preencha o Formulário</h6>

              <q-input v-model="form.nome" dense filled label="Nome" class="q-mb-md bg-white"  />
              <q-input v-model="form.email" dense filled label="E-mail" class="q-mb-md bg-white"  />
              <q-input v-model="form.telefone" dense filled label="Telefone" class="q-mb-md bg-white"  />
              <q-input v-model="form.mensagem" dense filled type="textarea" label="Mensagem" class="q-mb-lg bg-white" />

              <!-- CAPTCHA FAKE -->
              <div class="bg-white q-pa-sm q-mb-lg text-black" style="max-width: 300px">
                <q-checkbox label="Não sou um robô" />

              </div>

              <q-btn label="ENVIAR" color="orange" unelevated class="q-px-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { reactive } from 'vue';

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  mensagem: ''
});
</script>
