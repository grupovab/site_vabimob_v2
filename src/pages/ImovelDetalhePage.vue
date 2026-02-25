<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-10">
        <!-- TOPO: GALERIA + INFORMAÇÕES -->
        <div class="row q-col-gutter-lg">
          <!-- Galeria -->
          <div class="col-12 col-md-7">
            <q-card flat bordered class="overflow-hidden">
              <q-carousel
                v-model="slide"
                animated
                arrows
                navigation
                height="420px"
                class="bg-grey-2"
              >
                <q-carousel-slide
                  v-for="(img, idx) in imagens"
                  :key="idx"
                  :name="idx"
                >
                  <q-img :src="img" class="fit" />
                </q-carousel-slide>

                <div v-if="imagens.length === 0" class="q-pa-lg text-grey-7">
                  Sem imagens cadastradas.
                </div>
              </q-carousel>
            </q-card>
          </div>

          <!-- Card de Info -->
          <div class="col-12 col-md-5">
            <q-card flat class="card-info q-pa-lg">
              <div class="text-h6 text-weight-bold text-white">
                {{ imovel?.title || "Imóvel" }}
              </div>

              <div class="text-primary q-mt-xs text-weight-medium">Ofertas</div>

              <!-- Só mostra o que existe -->
              <div class="row q-col-gutter-md q-mt-md">
                <div
                  v-for="(item, idx) in infoTopo"
                  :key="idx"
                  :class="`col-12 col-md-${item.col || 6}`"
                >
                  <div class="label">{{ item.label }}</div>
                  <div class="valor">{{ item.value }}</div>
                </div>

                <div v-if="infoTopo.length === 0" class="col-12 text-white">
                  Sem informações adicionais cadastradas para este imóvel.
                </div>
              </div>

              <q-separator dark class="q-my-lg" />

              <q-btn
                flat
                icon="print"
                label="Imprimir"
                class="text-white full-width"
                @click="imprimir"
              />
            </q-card>
          </div>
        </div>

        <!-- BOTÕES -->
        <div class="row q-col-gutter-md q-mt-lg">
          <div class="col-auto">
            <q-btn
              rounded
              unelevated
              color="primary"
              icon="photo"
              label="Ver fotos"
              @click="irPara('sec-descricao')"
            />
          </div>

          <div class="col-auto">
            <q-btn
              rounded
              outline
              color="grey-8"
              icon="360"
              label="Ver 360°"
              :disable="!tour360Html"
              @click="abrir360 = true"
            />
          </div>

          <div class="col-auto">
            <q-btn
              rounded
              outline
              color="grey-8"
              icon="map"
              label="Ver mapa"
              @click="irPara('sec-mapa')"
            />
          </div>

          <div class="col-auto">
            <q-btn
              rounded
              outline
              color="grey-8"
              icon="streetview"
              label="Ver rua"
              :disable="!temCoordenadas"
              @click="abrirRuaNoGoogle"
            />
          </div>
        </div>

        <!-- CONTEÚDO + LATERAL -->
        <div class="row q-col-gutter-xl q-mt-lg">
          <!-- ESQUERDA -->
          <div class="col-12 col-md-8">
            <!-- Descrição -->
            <section id="sec-descricao">
              <div class="titulo-secao">
                <q-icon name="description" size="20px" />
                <div>Descrição</div>
              </div>

              <div v-if="dados.endereco" class="text-grey-8 q-mb-md">
                <span class="text-weight-medium">Localização:</span>
                {{ dados.endereco }}
              </div>

              <div
                v-if="imovel?.content"
                class="conteudo-html"
                v-html="imovel.content"
              ></div>

              <div v-else class="text-grey-7">
                Sem descrição cadastrada.
              </div>
            </section>

            <!-- IPTU / Condomínio (só aparece se existir algo) -->
            <div
              v-if="dados.iptu || dados.condominioTaxa"
              class="row q-col-gutter-xl q-mt-xl"
            >
              <div v-if="dados.iptu" class="col-12 col-md-6">
                <div class="titulo-mini">
                  <q-icon name="receipt_long" />
                  <div>IPTU</div>
                </div>
                <div class="text-grey-9">{{ dados.iptu }}</div>
              </div>

              <div v-if="dados.condominioTaxa" class="col-12 col-md-6">
                <div class="titulo-mini">
                  <q-icon name="request_quote" />
                  <div>Taxa de condomínio</div>
                </div>
                <div class="text-grey-9">{{ dados.condominioTaxa }}</div>
              </div>
            </div>

            <!-- Texto Condomínio (só aparece se existir) -->
            <div v-if="dados.condominioTexto" class="q-mt-xl">
              <div class="titulo-secao text-primary">
                <q-icon name="apartment" size="20px" />
                <div>Condomínio</div>
              </div>

              <div class="text-grey-9">
                {{ dados.condominioTexto }}
              </div>
            </div>

            <!-- Proximidades (só aparece se tiver algo) -->
            <div v-if="dados.proxTransporte || dados.proxMuseus" class="q-mt-xl">
              <div class="titulo-secao text-primary">
                <q-icon name="near_me" size="20px" />
                <div>Proximidades</div>
              </div>

              <div v-if="dados.proxTransporte" class="q-mb-md">
                <div class="text-weight-bold">Transporte público:</div>
                <div class="text-grey-8">{{ dados.proxTransporte }}</div>
              </div>

              <div v-if="dados.proxMuseus">
                <div class="text-weight-bold">Museus, teatros e shows:</div>
                <div class="text-grey-8">{{ dados.proxMuseus }}</div>
              </div>
            </div>

            <!-- Mapa -->
            <div class="q-mt-xl" id="sec-mapa">
              <div class="titulo-secao text-primary">
                <q-icon name="map" size="20px" />
                <div>Localização</div>
              </div>

              <q-card bordered flat class="overflow-hidden">
                <div v-if="temCoordenadas" style="height: 380px">
                  <iframe
                    :src="mapaSrc"
                    width="100%"
                    height="380"
                    style="border: 0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div v-else class="q-pa-md text-grey-7">
                  Sem coordenadas no JSON (REAL_HOMES_property_location).
                </div>
              </q-card>
            </div>
          </div>

          <!-- DIREITA -->
          <div class="col-12 col-md-4">
            <!-- Form -->
            <q-card flat bordered class="q-pa-lg bg-primary text-white">
              <div class="text-subtitle1 text-weight-bold">Agendar visita</div>
              <div class="text-caption q-mb-md">
                Ligue-nos ou preencha o formulário
              </div>

              <div class="row items-center q-gutter-sm q-mb-sm">
                <q-icon name="call" />
                <div>11 3456 7899</div>
              </div>
              <div class="row items-center q-gutter-sm q-mb-md">
                <q-icon name="smartphone" />
                <div>11 9 9876 5432</div>
              </div>

              <div class="text-subtitle2 text-weight-bold q-mb-sm">Mensagem</div>

              <q-input
                dense
                filled
                bg-color="white"
                v-model="form.nome"
                label="Nome"
                class="q-mb-sm"
              />
              <q-input
                dense
                filled
                bg-color="white"
                v-model="form.email"
                label="E-mail"
                class="q-mb-sm"
              />
              <q-input
                dense
                filled
                bg-color="white"
                v-model="form.telefone"
                label="Telefone"
                class="q-mb-sm"
              />
              <q-input
                dense
                filled
                bg-color="white"
                type="textarea"
                v-model="form.mensagem"
                label="Mensagem"
              />

              <q-btn
                class="q-mt-md full-width"
                color="white"
                text-color="primary"
                label="Enviar"
                @click="enviarMock"
              />
            </q-card>

            <!-- Semelhantes -->
            <q-card flat bordered class="q-mt-lg">
              <div class="q-pa-md bg-green-6 text-white row items-center justify-between">
                <div class="text-subtitle2 text-weight-bold">Imóveis semelhantes</div>
                <div class="row q-gutter-xs">
                  <q-btn dense flat icon="chevron_left" @click="voltarSemelhante" />
                  <q-btn dense flat icon="chevron_right" @click="avancarSemelhante" />
                </div>
              </div>

              <div class="q-pa-md">
                <q-card
                  v-if="semelhanteAtual"
                  flat
                  bordered
                  class="overflow-hidden cursor-pointer"
                  @click="irParaImovel(semelhanteAtual.slug)"
                >
                  <q-img :src="semelhanteAtual.thumb" ratio="16/9" />
                  <div class="q-pa-md">
                    <div class="text-weight-bold">{{ semelhanteAtual.title }}</div>
                    <div class="text-primary q-mt-xs">Ofertas</div>

                    <div class="text-grey-8 q-mt-sm">
                      <span v-if="String(semelhanteAtual?.metas?.REAL_HOMES_property_bedrooms || '').trim()">
                        Quartos: {{ semelhanteAtual.metas.REAL_HOMES_property_bedrooms }}
                      </span>
                      <span
                        v-if="String(semelhanteAtual?.metas?.REAL_HOMES_property_bathrooms || '').trim()"
                      >
                        <span v-if="String(semelhanteAtual?.metas?.REAL_HOMES_property_bedrooms || '').trim()"> · </span>
                        Banheiros: {{ semelhanteAtual.metas.REAL_HOMES_property_bathrooms }}
                      </span>

                      <span
                        v-if="!String(semelhanteAtual?.metas?.REAL_HOMES_property_bedrooms || '').trim() &&
                              !String(semelhanteAtual?.metas?.REAL_HOMES_property_bathrooms || '').trim()"
                      >
                        Sem dados adicionais.
                      </span>
                    </div>
                  </div>
                </q-card>

                <div v-else class="text-grey-7">Sem imóveis semelhantes.</div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- 360 -->
    <q-dialog v-model="abrir360">
      <q-card style="width: 900px; max-width: 95vw">
        <q-card-section class="row items-center justify-between">
          <div class="text-subtitle1 text-weight-bold">Tour 360°</div>
          <q-btn flat icon="close" v-close-popup />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div v-if="tour360Html" v-html="tour360Html"></div>
          <div v-else class="text-grey-7">Sem tour 360° cadastrado.</div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Não encontrado -->
    <q-dialog v-model="naoEncontrou">
      <q-card>
        <q-card-section class="text-h6">Imóvel não encontrado</q-card-section>
        <q-card-section class="text-grey-7">Slug: {{ slug }}</q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Voltar" v-close-popup @click="router.back()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { computed, reactive, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import imoveis from "src/data/imoveis.json";

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

const slug = computed(() => String(route.params.slug || ""));
const imovel = computed(() => imoveis.find((i) => i.slug === slug.value));

const naoEncontrou = ref(false);
watchEffect(() => {
  naoEncontrou.value = !!slug.value && !imovel.value;
});

const slide = ref(0);

const imagens = computed(() => {
  if (!imovel.value) return [];
  const lista = [imovel.value.thumb, ...(imovel.value.gallery || [])].filter(Boolean);
  return Array.from(new Set(lista));
});

function meta(chave) {
  const v = imovel.value?.metas?.[chave];
  return String(v ?? "").trim();
}

function temValor(v) {
  return String(v ?? "").trim().length > 0;
}

const dados = computed(() => {
  const idImovel = meta("REAL_HOMES_property_id");
  const quartos = meta("REAL_HOMES_property_bedrooms");
  const banheiros = meta("REAL_HOMES_property_bathrooms");
  const area = meta("REAL_HOMES_property_size") || meta("REAL_HOMES_property_size_postfix");
  const endereco = meta("REAL_HOMES_property_address");

  const iptu = meta("iptu");
  const condominioTaxa = meta("taxa_de_condominio");
  const condominioTexto = meta("condominio");

  const proxTransporte = meta("proximidades_transporte_publico");
  const proxMuseus = meta("proximidades_museus_teatro_show");

  const tipoOperacao = String(imovel.value?.tipo || "").toLowerCase();
  const operacaoLabel = tipoOperacao === "aluguel" ? "Aluguel" : (tipoOperacao || "");

  return {
    idImovel,
    quartos,
    banheiros,
    area,
    endereco,
    iptu,
    condominioTaxa,
    condominioTexto,
    proxTransporte,
    proxMuseus,
    operacaoLabel,
  };
});

const infoTopo = computed(() => {
  return [
    { label: "Código do imóvel", value: dados.value.idImovel, mostrar: temValor(dados.value.idImovel) },
    { label: "Área", value: dados.value.area, mostrar: temValor(dados.value.area) },
    { label: "Quartos", value: dados.value.quartos, mostrar: temValor(dados.value.quartos) },
    { label: "Banheiros", value: dados.value.banheiros, mostrar: temValor(dados.value.banheiros) },
    { label: "Operação", value: dados.value.operacaoLabel, mostrar: temValor(dados.value.operacaoLabel) },
    { label: "Endereço", value: dados.value.endereco, mostrar: temValor(dados.value.endereco), col: 12 },
  ].filter((x) => x.mostrar);
});

// MAPA
const localRaw = computed(() => meta("REAL_HOMES_property_location"));
const coords = computed(() => {
  const p = String(localRaw.value || "").split(",").map((x) => x.trim());
  const lat = Number(p[0]);
  const lng = Number(p[1]);
  const zoom = Number(p[2] || 14);
  return { lat, lng, zoom };
});

const temCoordenadas = computed(
  () => Number.isFinite(coords.value.lat) && Number.isFinite(coords.value.lng)
);

const mapaSrc = computed(() => {
  const { lat, lng, zoom } = coords.value;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
});

function abrirRuaNoGoogle() {
  if (!temCoordenadas.value) return;
  const { lat, lng } = coords.value;
  window.open(
    `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`,
    "_blank"
  );
}

// 360
const abrir360 = ref(false);
const tour360Html = computed(() => meta("REAL_HOMES_360_virtual_tour"));

// FORM
const form = reactive({
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
});

function enviarMock() {
  $q.notify({ type: "positive", message: "Mensagem enviada (mock). Depois você liga no backend." });
}

// Semelhantes
const semelhantes = computed(() => {
  if (!imovel.value) return [];
  const mesmaOperacao = imoveis.filter(
    (x) => x.slug !== imovel.value.slug && x.tipo === imovel.value.tipo
  );
  return mesmaOperacao.length ? mesmaOperacao : imoveis.filter((x) => x.slug !== imovel.value.slug);
});

const indiceSemelhante = ref(0);
watchEffect(() => {
  indiceSemelhante.value = 0;
});

const semelhanteAtual = computed(() => semelhantes.value[indiceSemelhante.value] || null);

function voltarSemelhante() {
  indiceSemelhante.value = Math.max(0, indiceSemelhante.value - 1);
}

function avancarSemelhante() {
  indiceSemelhante.value = Math.min(semelhantes.value.length - 1, indiceSemelhante.value + 1);
}

function irParaImovel(slugDestino) {
  router.push(`/imovel/${slugDestino}`);
}

function irPara(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function imprimir() {
  window.print();
}
</script>

<style scoped>
.card-info {
  background: #3f4750;
  border-radius: 6px;
}

.label {
  color: rgba(255, 255, 255, 0.65);
  font-size: 12px;
}

.valor {
  color: #fff;
  font-weight: 700;
  margin-top: 2px;
}

.titulo-secao {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.titulo-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 6px;
}

.conteudo-html :deep(p),
.conteudo-html :deep(span),
.conteudo-html :deep(li) {
  color: #222;
  line-height: 1.6;
}

.conteudo-html :deep(ul) {
  padding-left: 18px;
}
</style>
