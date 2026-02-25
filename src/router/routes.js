const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // INÍCIO
      { path: 'quem-somos', component: () => import('pages/QuemSomosPage.vue') },
      { path: 'compra', component: () => import('pages/CompraPage.vue') },
      { path: 'aluguel', component: () => import('pages/AluguelPage.vue') },
      { path: 'blog', component: () => import('src/pages/BlogPage.vue') },
      { path: 'blog/:slug', component: () => import('pages/BlogPostPage.vue') },
      { path: 'contato', component: () => import('pages/ContatoPage.vue') },
      { path: 'aluguel/:slug', component: () => import("src/pages/ImovelDetalhePage.vue") },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
