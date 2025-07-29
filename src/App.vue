<script setup>
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <router-view />
  <SpeedInsights />
  <Footer />
</template>

<style scoped>
/* Add global styles here if needed */
</style>