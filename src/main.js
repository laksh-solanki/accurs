import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createRouter, createWebHistory } from 'vue-router'
import { inject } from "@vercel/speed-insights/vue"
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Services from './pages/Services.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

inject();
createApp(App).use(router).mount('#app')