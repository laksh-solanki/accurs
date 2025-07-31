<script>
import TileCard from "../components/TileCard.vue";

export default {
  name: "HomePage",
  components: {
    TileCard,
  },
};
</script>

<template>
  <div class="container-fluid text-white py-5" style="background-color: #000">
    <!-- Hero Section -->
    <div class="container text-center mb-5">
      <h1 class="display-4 fw-bold">
        Transform Your Space with Exquisite Flooring Tiles
      </h1>
      <p class="lead">
        Discover a wide range of high-quality tiles for every style and budget.
      </p>
      <router-link to="/contact" class="mt-5 d-flex justify-content-center text-decoration-none"
        ><button class="button">
          Contect Us
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </router-link>
    </div>

    <!-- Tile Types Section -->
    <div class="container mb-5">
      <h2 class="text-center mb-4">Our Popular Tile Collections</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <TileCard
            imageSrc="/Photos/Til-1.jpeg"
            title="Ceramic Tiles"
            description="Durable and versatile, perfect for kitchens and bathrooms."
          />
        </div>
        <div class="col">
          <TileCard
            imageSrc="/Photos/Til-2.avif"
            title="Porcelain Tiles"
            description="Highly resistant to moisture and stains, ideal for high-traffic areas."
          />
        </div>
        <div class="col">
          <TileCard
            imageSrc="/Photos/Til-3.webp"
            title="Vinyl Tiles"
            description="Affordable, comfortable underfoot, and easy to maintain."
          />
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="container text-center">
      <h2 class="mb-4">Why Choose Us?</h2>
      <div class="row">
        <div class="col-md-4">
          <h3>Quality Products</h3>
          <p>We source only the finest tiles from trusted manufacturers.</p>
        </div>
        <div class="col-md-4">
          <h3>Expert Installation</h3>
          <p>Our experienced team ensures a flawless finish every time.</p>
        </div>
        <div class="col-md-4">
          <h3>Customer Satisfaction</h3>
          <p>Your happiness is our priority, from selection to installation.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add component-specific styles here */
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 1.0rem;
  padding-inline: 1.7rem;
  background-color: rgb(0, 0, 0);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 20px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
</style>
