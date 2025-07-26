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
      <router-link to="/contact" class="mt-3"
        ><button class="cssbuttons-io">
          <span
            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            Contect us</span
          >
        </button></router-link
      >
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

<script>
import TileCard from "../components/TileCard.vue";

export default {
  name: "HomePage",
  components: {
    TileCard,
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.cssbuttons-io {
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  cursor: pointer;
  border: 1px unset white;
  background: linear-gradient(to right, #ffffff, #ff8a8a);
  color: ghostwhite;
  overflow: hidden;
}

.cssbuttons-io svg {
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
}

.cssbuttons-io span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
  display: inline-flex;
  align-items: center;
  padding: 0.8em 1.2em 0.8em 1.05em;
}

.cssbuttons-io::before,
.cssbuttons-io::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.cssbuttons-io::before {
  content: "";
  background: #000;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

.cssbuttons-io:hover::before {
  transform: translate3d(100%, 0, 0);
}

.cssbuttons-io:active {
  transform: scale(0.95);
}
</style>
