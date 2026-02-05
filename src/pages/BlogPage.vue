<template>
  <section class="q-py-xl">
    <div class="row justify-center">
      <div class="col-10">


        <div class="row q-col-gutter-lg">
          <div v-for="post in paginatedPosts" :key="post.id" class="col-7">
            <BlogCard
              :title="post.title"
              :meta="`Por ${post.author} • ${formatDate(post.date)}`"
              :content="post.content"
              :image="post.image"

              :link="`/blog/${post.slug}`"
            />
          </div>
        </div>

        <div class="row justify-center items-center q-mt-xl q-gutter-sm">
          <q-btn flat icon="chevron_left" :disable="currentPage === 1" @click="prev" />

          <q-btn
            v-for="n in visiblePages"
            :key="n"
            flat
            :label="n"
            :color="n === currentPage ? 'primary' : 'grey'"
            @click="currentPage = n"
          />

          <q-btn flat icon="chevron_right" :disable="currentPage === totalPages" @click="next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import posts from './../data/posts_vabimob.json'
import BlogCard from './../components/BlogCard.vue'

const perPage = 4
const currentPage = ref(1)
const maxVisible = 6 // quantas páginas aparecem

const sortedPosts = computed(() => {
  return [...posts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
})


const visiblePages = computed(() => {
  let start = Math.max(
    1,
    currentPage.value - Math.floor(maxVisible / 2)
  )

  let end = start + maxVisible - 1

  if (end > totalPages.value) {
    end = totalPages.value
    start = Math.max(1, end - maxVisible + 1)
  }

  return Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  )
})

const totalPages = computed(() => Math.ceil(posts.length / perPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return sortedPosts.value.slice(start, end)
})

const next = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prev = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

/* 🔥 ESSA FUNÇÃO FALTAVA */
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}
</script>
