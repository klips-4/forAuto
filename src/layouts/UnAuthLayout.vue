<template>
  <div class="vh-100 d-flex justify-content-center align-items-center display">
    <div class="background"></div>
    <router-view/>
  </div>
</template>

<script setup>
import LoginPage from "@/pages/LoginPage.vue";
</script>

<style scoped>

.display {
  position: relative;
  overflow: hidden;
}


.background {
  background-image: url('../../public/orig.png');
//background-image: url('/orig.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(6px);
  z-index: 1;
}

.modal-dialog {
  position: relative;
  z-index: 2;
}

.bg-cst {
  background: rgba(255, 255, 255, 0.85); /* Полупрозрачный фон для модального окна */
}
</style>