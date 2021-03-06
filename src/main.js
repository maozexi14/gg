import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from './components/toast/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$bus = new Vue()
Vue.use(toast)
new Vue({
    el: '#app',
    router,
    store,

    render: h => h(App)
})