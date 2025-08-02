import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Services from "./pages/Services.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const vuetify = createVuetify();

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
