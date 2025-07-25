<script setup>
import NavbarComponent from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'
</script>

<template>
  <NavbarComponent />
  <router-view />
  <FooterComponent />
</template>

<style scoped>
/* Add global styles here if needed */
</style>