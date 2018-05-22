// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import indexPage from './pages/index'
import detailPage from './pages/detail'
import countPage from './pages/detail/count'
import forecastPage from './pages/detail/forecast'
import publishPage from './pages/detail/publish'
import analysisPage from './pages/detail/analysis'


// import router from './router'

// Vue.config.productionTip = false

Vue.use(Router)
Vue.use(VueResource)
let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: indexPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/count',
      children: [{
          path: 'count',
          component: countPage

        },
        {
          path: 'forecast',
          component: forecastPage
        },
        {
          path: 'publish',
          component: publishPage
        },
        {
          path: 'analysis',
          component: analysisPage
        },

      ]
    }

  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
