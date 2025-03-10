<template>
  <div class="vh-100 d-flex justify-content-center align-items-center display">
    <router-view/>
  </div>
</template>

<script setup>
import LoginPage from "@/pages/LoginPage.vue";
</script>

<style scoped>
.display {
  background-image: url('public/orig.png');
  background-size: cover;
  background-position: center;
}
</style>