<template>
  <div class="modal-dialog modal-dialog-centered" style="max-width: 400px; width: 90%">
    <div class="modal-content d-flex justify-content-center">
      <div class="modal-body border-radius p-5 bg-cst">

        <ul style="border-radius: 5px" class="nav nav-pills nav-justified mb-3 bg-light">
          <li class="nav-item">
            <router-link class="nav-link text-dark sans-serif" to="/login">Авторизация</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark active-position sans-serif" to="/signup">Регистрация</router-link>
          </li>
        </ul>

        <div class="tab-content">
          <div class=" ">
            <form class="text-center" @submit.prevent="handleSubmit">
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="lastName"
                    placeholder="Фамилия">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="firstName"
                    placeholder="Имя">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="middleName"
                    placeholder="Отчество">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="email"
                    placeholder="Email">
              </div>

              <div class="form-outline mb-4">
                <input
                    class="form-control sans-serif"
                    v-model="password"
                    type="password"
                    placeholder="Пароль">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="phoneNumber"
                    placeholder="Телефон">
              </div>

              <button
                  type="submit"
                  :disabled="!email.length || isModalOpen"
                  class="btn btn-primary btn-block w-100 sans-serif fw-bold"
              >
                Подтвердить почту
              </button>

              <div v-if="errorMessage" class="text-danger mt-2">
                {{ errorMessage }}
              </div>

              <div v-if="isModalOpen" class="mt-4">
                <input
                    type="text"
                    class="form-control sans-serif mb-2"
                    maxlength="4"
                    placeholder="Введите код">
                <div class="d-flex justify-content-between">
                  <span>{{ remainingTime }} секунд</span>
                  <button class="btn btn-secondary">Продолжить</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useAuthStore} from "@/stores/authStore.js";

const lastName = ref("");
const firstName = ref("");
const middleName = ref("");
const email = ref("");
const password = ref("");
const phoneNumber = ref("");

const authStore = useAuthStore();
const isModalOpen = ref(false)
const remainingTime = ref(30);
const errorMessage = ref("")


async function handleSubmit() {
  const isFree = await authStore.isEmailFree(lowerCased(email.value));
  if (isFree) {
    isModalOpen.value = true;
    startTimer()
  } else {
   errorMessage.value = authStore.emailStatus
  }
}


function lowerCased(text) {
  const lower = []
  text.split(' ').forEach(word => {
    lower.push(word.toLowerCase())
  })
  return lower.join(' ')
}

let timer;
const startTimer = () => {

  timer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      closeModal();
    }
  }, 1000);
};

const closeModal = () => {
  resetTimer();
  clearInterval(timer);
  isModalOpen.value = false
}

const resetTimer = () => {
  remainingTime.value = 30;
}

onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});

setTimeout(() => {
  errorMessage.value = ''
}, 7000)

watch(authStore.errorMessage, (data) => {
  errorMessage.value = data
})

</script>

<style lang="scss">

</style>