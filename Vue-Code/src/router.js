import Vue from 'vue'
import Router from 'vue-router'
// import CreatorPage from './views/CreatorPage.vue'
// import EditorPage from './views/EditorPage.vue'
import QuizCreate from './components/QuizCreate.vue'
import QuizEdit from './components/QuizEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/quiz/create',
      name: 'quizCreate',
      component: QuizCreate,
      props: true
    },
    {
      path: '/quiz/edit/:id',
      name: 'quizEdit',
      component: QuizEdit,
      props: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
