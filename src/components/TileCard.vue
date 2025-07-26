<template>
  <div class="card h-100 bg-dark text-white border-secondary">
    <img :src="imageSrc" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title" @click="copyTitle(title)">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <transition name="fade">
        <span v-if="showCopiedMessage" class="copied-message">Copied!</span>
      </transition>
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
  },
  data() {
    return {
      showCopiedMessage: false
    };
  },
  methods: {
    copyTitle(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.showCopiedMessage = true;
        setTimeout(() => {
          this.showCopiedMessage = false;
        }, 1500); // Message disappears after 1.5 seconds
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
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
  transform: translateY(20px);
  transition: transform 0.3s ease;
  cursor: pointer; /* Indicate that the title is clickable */
}

.card-text {
  font-size: 0.9rem;
  transform: translateY(20px);
  transition: transform 0.3s ease 0.1s;
}

.card:hover .card-title,
.card:hover .card-text {
  transform: translateY(0);
}

.copied-message {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
}

/* Fade transition for copied message */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>