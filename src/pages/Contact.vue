<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      showAlert: false,
      formErrors: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
    };
  },
  methods: {
    triggerAlert() {
      let isValid = true;
      // Reset errors
      for (const key in this.formErrors) {
        this.formErrors[key] = false;
      }

      // Check each field
      if (!this.form.name) {
        this.formErrors.name = true;
        isValid = false;
      }
      if (!this.form.email) {
        this.formErrors.email = true;
        isValid = false;
      }
      if (!this.form.subject) {
        this.formErrors.subject = true;
        isValid = false;
      }
      if (!this.form.message) {
        this.formErrors.message = true;
        isValid = false;
      }

      if (isValid) {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
        // Optionally clear the form after showing the alert
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      }
    },
  },
};
</script>
<template>
  <div class="contact-page container-fluid py-5 text-white">
    <div class="container">
      <h1 class="text-center mb-5 display-4 fw-bold">Contect Us</h1>

      <div class="row">
        <!-- Contact Form Section -->
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="contact-form p-4 rounded shadow-lg">
            <h2 class="mb-4 text-center">Send Us a Message</h2>
            <form>
              <div class="mb-3 position-relative">
                <label for="name" class="form-label">Your Name</label>
                <input
                  type="text"
                  :class="[
                    'form-control',
                    'form-control-dark',
                    {
                      'is-invalid': formErrors.name,
                      'pe-4': !formErrors.name && form.name,
                    },
                  ]"
                  id="name"
                  v-model="form.name"
                  required
                />
                <span v-if="!formErrors.name && form.name" class="success-icon"
                  >✓</span
                >
                <div class="invalid-feedback">Name is required.</div>
              </div>
              <div class="mb-3 position-relative">
                <label for="email" class="form-label">Your Email</label>
                <input
                  type="email"
                  :class="[
                    'form-control',
                    'form-control-dark',
                    {
                      'is-invalid': formErrors.email,
                      'pe-4': !formErrors.email && form.email,
                    },
                  ]"
                  id="email"
                  v-model="form.email"
                  required
                />
                <span
                  v-if="!formErrors.email && form.email"
                  class="success-icon"
                  >✓</span
                >
                <div class="invalid-feedback">Email is required.</div>
              </div>
              <div class="mb-3 position-relative">
                <label for="subject" class="form-label">Subject</label>
                <input
                  type="text"
                  :class="[
                    'form-control',
                    'form-control-dark',
                    {
                      'is-invalid': formErrors.subject,
                      'pe-4': !formErrors.subject && form.subject,
                    },
                  ]"
                  id="subject"
                  v-model="form.subject"
                  required
                />
                <span
                  v-if="!formErrors.subject && form.subject"
                  class="success-icon"
                  >✓</span
                >
                <div class="invalid-feedback">Subject is required.</div>
              </div>
              <div class="mb-4 position-relative">
                <label for="message" class="form-label">Your Message</label>
                <textarea
                  :class="[
                    'form-control',
                    'form-control-dark',
                    {
                      'is-invalid': formErrors.message,
                      'pe-4': !formErrors.message && form.message,
                    },
                  ]"
                  style="height: 219px"
                  id="message"
                  rows="6"
                  v-model="form.message"
                  required
                ></textarea>
                <span
                  v-if="!formErrors.message && form.message"
                  class="success-icon"
                  >✓</span
                >
                <div class="invalid-feedback">Message is required.</div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btns"
                  @click="triggerAlert()"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Info & Map Section -->
        <div class="col-lg-5">
          <div class="contact-info p-4 rounded shadow-lg mb-4">
            <h2 class="mb-4 text-center">Contact Details</h2>
            <ul class="list-unstyled">
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-geo-alt-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Address:</strong><br />
                  123 Tile Street, Flooring City, FC 12345
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-telephone-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Phone:</strong><br />
                  +1 (123) 456-7890
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-envelope-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Email:</strong><br />
                  info@yourtilecompany.com
                </div>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-clock-fill me-3 fs-4 text-primary"></i>
                <div>
                  <strong>Hours:</strong><br />
                  Mon - Fri: 9:00 AM - 5:00 PM
                </div>
              </li>
            </ul>
          </div>

          <!-- Why Contact Us Section -->
          <div class="contact-info p-4 rounded shadow-lg mb-4">
            <h2 class="mb-4 text-center">Why Contact Us?</h2>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill me-3 fs-5 text-success"></i>
                <div>
                  <strong>Expert Advice:</strong> Get personalized
                  recommendations for your tiling needs.
                </div>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-lightbulb-fill me-3 fs-5 text-warning"></i>
                <div>
                  <strong>Innovative Solutions:</strong> Discover cutting-edge
                  tiling techniques and materials.
                </div>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-chat-dots-fill me-3 fs-5 text-info"></i>
                <div>
                  <strong>Dedicated Support:</strong> Our team is here to assist
                  you every step of the way.
                </div>
              </li>
            </ul>
          </div>

          <div class="map-container rounded shadow-lg overflow-hidden">
            <h2 class="mb-4 text-center">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2999999999996!2d144.9631!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjkiUyAxNDRwrDU3JzQ3LjIiRQ!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="alert-fade">
    <div
      v-if="showAlert"
      class="alert alert-success alert-dismissible fade show custom-alert"
      role="alert"
    >
      Message sent successfully!
      <button
        type="button"
        class="btn-close"
        @click="showAlert = false"
        aria-label="Close"
      ></button>
    </div>
  </transition>
</template>
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

.custom-alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  width: 300px; /* Adjust width as needed */
}

.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.alert-fade-enter-from,
.alert-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.success-icon {
  position: absolute;
  right: 10px;
  top: 70%; /* Adjust as needed to align with the input field */
  transform: translateY(-50%);
  color: green;
  font-size: 1.2em;
  pointer-events: none; /* Allow clicks to pass through */
  z-index: 2; /* Ensure it's above the input */
}

.btns {
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 140px;
  height: 45px;
  transition: 0.3s;
  font-size: 17px;
  font-weight: 500;
}

.btns:hover {
  background-color: #3b82f6;
  box-shadow: 0 0 0 5px #3b83f65f;
  color: #fff;
}

</style>
