<template>
  <div class="contact-page container-fluid py-5 text-white">
    <div class="container">
      <h1 class="text-center mb-5 display-4 fw-bold">Contect Us</h1>

      <div class="row">
        <!-- Contact Form Section -->
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="contact-form p-4 rounded shadow-lg">
            <h2 class="mb-4 text-center">Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control form-control-dark" id="name" v-model="form.name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control form-control-dark" id="email" v-model="form.email" required>
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control form-control-dark" id="subject" v-model="form.subject" required>
              </div>
              <div class="mb-4">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control form-control-dark" style="height: 219px;" id="message" rows="6" v-model="form.message" required></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Info & Map Section -->
        <div class="col-lg-5">
          <div class="contact-info p-4 rounded shadow-lg mb-4">
            <h2 class="mb-4 text-center">Contact Details</h2>
            <ul class="list-unstyled">
              <li class="mb-3"><i class="bi bi-geo-alt-fill me-3"></i> 123 Tile Street, Flooring City, FC 12345</li>
              <li class="mb-3"><i class="bi bi-telephone-fill me-3"></i> +1 (123) 456-7890</li>
              <li class="mb-3"><i class="bi bi-envelope-fill me-3"></i> info@yourtilecompany.com</li>
              <li class="mb-3"><i class="bi bi-clock-fill me-3"></i> Mon - Fri: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div class="map-container rounded shadow-lg overflow-hidden">
            <h2 class="mb-4 text-center">Map</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2999999999996!2d144.9631!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjkiUyAxNDRwrDU3JzQ3LjIiRQ!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      alert('Thank you for your message!');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  background-color: #000;
}

.contact-form,
.contact-info,
.map-container {
  background-color: #1a1a1a; /* Slightly lighter black for contrast */
  border: 3px solid #333;
  width: 100%;
}

.map-container {
  padding: 12px;
}

.form-control-dark {
  background-color: #333;
  color: #fff;
  border-color: #555;
}

.form-control-dark:focus {
  background-color: #333;
  color: #fff;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.list-unstyled li i {
  color: #0d6efd; /* Icon color */
}

iframe {
  border-radius: 5px;
}
</style>