<template>
<button @click="authStore.logout()">Exit</button>
</template>


<script setup>
import {useAuthStore} from "@/stores/authStore.js";
const authStore = useAuthStore()
</script>


<style>

</style>