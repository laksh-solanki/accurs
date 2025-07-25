<template>
  <div class="card h-100 bg-dark text-white border-secondary">
    <img :src="imageSrc" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileCard',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  width: 400px; /* Fixed width */
  height: 250px; /* Fixed height */
  overflow: hidden;
  position: relative;
  display: flex;
  border: none;
  justify-self: center;
  align-items: center;
  cursor: pointer;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the area */
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
}

.card:hover .card-body {
  opacity: 1;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
}
</style>