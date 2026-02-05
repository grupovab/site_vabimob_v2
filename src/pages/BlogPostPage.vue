<template>
  <div class="row justify-center bg-secondary q-pb-xl q-pt-xl">
    <div class="col-10">
      <span class="text-white text-h4">{{ post.title }}</span>
    </div>
  </div>

  <div class="row justify-center">
    <div class="col-10">
      <div class="row">
        <div class="col-8">
          <div v-if="post">
            <img :src="post.image" class="post-image" />

            <div class="post-content" v-html="post.content"></div>
          </div>

          <div v-else>
            <h2>Post não encontrado</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import posts from './../data/posts_vabimob.json'

const route = useRoute()
const slug = route.params.slug

const post = posts.find((p) => p.slug === slug)
</script>

<style>
.post-image {
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
}

.post-content p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.post-content strong {
  display: block;
  margin: 24px 0 8px;
  font-size: 18px;
}

.post-content ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.post-content li {
  margin-bottom: 6px;
}
</style>
