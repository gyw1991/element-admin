import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import NewArticles from '@/views/articles/NewArticles'
import ArticleList from '@/views/articles/ArticleList'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/articles/list'
    },
    {
      path: '/articles/new',
      name: 'NewArticles',
      component: NewArticles
    },
    {
      path: '/articles/list',
      name: 'ArticleList',
      component: ArticleList
    }

  ]
})
