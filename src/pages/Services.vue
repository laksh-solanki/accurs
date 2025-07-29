<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Web Development",
          description:
            "We build modern, responsive, and user-friendly websites.",
          icon: "bi bi-code-slash",
        },
        {
          id: 2,
          title: "Mobile App Development",
          description:
            "We create native and cross-platform mobile apps for iOS and Android.",
          icon: "bi bi-phone",
        },
        {
          id: 3,
          title: "UI/UX Design",
          description: "We design beautiful and intuitive user interfaces.",
          icon: "bi bi-palette",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="services-page">
    <header class="services-header">
      <div class="container">
        <h1>Our Services</h1>
        <p class="lead">
          We offer a wide range of services to help you achieve your goals.
        </p>
      </div>
    </header>

    <main class="container">
      <div class="row">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="card service-card">
            <div class="card-body text-center">
              <i :class="service.icon" class="service-icon"></i>
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <a href="/contact" class="btn btn-primary btn-lg">Get in Touch</a>
      </div>
    </main>
  </div>
</template>
<style scoped>
.services-page {
  padding-bottom: 3rem;
}

.services-header {
  background-color: #f8f9fa;
  padding: 4rem 0;
  margin-bottom: 3rem;
  text-align: center;
}

.service-card {
  border: none;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-bottom: 2rem;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.service-icon {
  font-size: 3rem;
  color: #0d6efd;
  margin-bottom: 1.5rem;
}
</style>
