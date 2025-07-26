<template>
  <div class="container-fluid bg-black">
    <div class="container bg-black">
      <button v-if="!showForm" @click="toggleForm" class="btns">BUTTON</button>
    </div>
    <div class="form-container container">
      <transition name="form-fade">
        <form v-if="showForm" class="form" @submit.prevent="showAlertMessage">
          <p class="heading">Contect</p>
          <input placeholder="Email" class="input" type="Email" required />
          <input placeholder="Product" class="input" type="text" required />
          <button class="btnn" type="submit">Submit</button>
        </form>
      </transition>
    </div>
  </div>

  <transition name="alert-fade">
    <div
      v-if="showAlert"
      class="alert alert-success alert-dismissible fade show custom-alert"
      role="alert"
    >
    submitted successfully!
      <button
        type="button"
        class="btn-close"
        @click="showAlert = false"
        aria-label="Close"
      ></button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      showForm: false,
      showAlert: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = true;
    },
    showAlertMessage() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // Alert will disappear after 3 seconds
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.btns {
  outline: none;
  color: #daa06d;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px dashed #feba7f;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow: 0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;
}

.btns:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: 0 0 0 4px #eaddca, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
}

.form-container {
  position: relative;
  width: 340px;
  justify-self: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 3em;
  padding-left: 2.8em;
  padding-right: 2.8em;
  padding-bottom: 2.1em;
  border: 2px dashed #daa06d;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow: 0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.4s ease-in-out;
}

::placeholder {
  color: #daa06d;
  text-align: center;
}

.form .heading {
  padding-left: 0.8em;
  color: #daa06d;
  background-color: transparent;
  letter-spacing: 0.5em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 3em;
  text-shadow: inset -1px -1px 1px #daa06d;
}

.form .input {
  outline: none;
  padding: 0.5em;
  border: 1px solid #daa06d;
  color: #daa06d;
  width: 14em;
  height: 3em;
  border-radius: 10px;
  background-color: #eaddca;
  text-align: center;
}

.form .btnn {
  align-self: center;
  margin-top: 2em;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: #e5aa70;
  font-weight: bold;
  letter-spacing: 0.1em;
  transition: 0.4s ease-in-out opacity, 0.1s ease-in-out active;
  padding: 1em;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}

.form .btnn:hover {
  opacity: 0.8;
}

.form .btnn:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: none;
}

/* Form transition styles */
.form-fade-enter-active,
.form-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.form-fade-enter-from,
.form-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
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
</style>
