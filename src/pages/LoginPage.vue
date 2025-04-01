<template>
  <div class="modal-dialog modal-dialog-centered row"
       style="max-width: 400px; width: 90%">
    <div v-if="authStore.errorMessage" class="modal-content">
    <div class="modal-body border-radius p-5 bg-danger-cst">
      <div class="form-outline text-center">
         <span class="fw-bold text-white">{{authStore.errorMessage}}</span>
      </div>
    </div>
    </div>
    <div class="modal-content mt-2">
      <div :class="['modal-body border-radius p-5 bg-cst', { 'dark-theme': isDarkMode }]">
        <ul style="border-radius: 5px"
            class="nav nav-pills nav-justified mb-3 bg-light">
          <li class="nav-item">
            <router-link
                class="nav-link text-dark active-position sans-serif"
                to="/login"
            >
              Авторизация
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark sans-serif"
                         to="/signup"
            >
              Регистрация
            </router-link>
          </li>
        </ul>
        <div class="tab-content">
          <div class=" ">
            <form class="text-center" action="">
              <p class="text-decor">Войти с помощью:</p>
              <div class="d-flex flex-row justify-content-center">
                <GoogleLogin
                    @success="onGoogleLoginSuccess"
                    @error="onGoogleLoginError">
                  <div class="form-outline mx-2 mb-2 cursor-pointer text-blue">
                    <i class="bi bi-google fs-4"></i>
                  </div>
                </GoogleLogin>
                <div class="form-outline mx-2 mb-2 cursor-pointer text-blue">
                  <i class="bi bi-facebook fs-4"></i>
                </div>
              </div>
              <div class="text-decor-container mb-3">
                <span class="line"></span>
                <p class="text-decor">
                  или
                </p>
                <span class="line"></span>
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="username"
                    placeholder="Email">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="password"
                    placeholder="Пароль">
              </div>
              <button @click="authStore.login(username,password)"
                      type="submit"
                      class="btn btn-primary btn-block mb-1 w-100 sans-serif fw-bold"
              >
                Войти
              </button>
            </form>

            <div class="form-check form-switch mt-3">
              <input class="form-check-input"
                     type="checkbox"
                     role="switch"
                     id="flexSwitchCheckDefault"
                     v-model="isDarkMode"
              >
              <label :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }"
                     for="flexSwitchCheckDefault"
              >
                {{ isDarkMode ? "Тёмный" : "Светлый"}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore.js";
import {GoogleLogin} from "vue3-google-login";
import {ref} from "vue";

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const isDarkMode = ref(false)


</script>

<style lang="scss">

.bg-cst {
  background: rgba(255, 255, 255, 0.85);
}

.text-decor-container {
  display: flex;
  align-items: center;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #707070;
  margin: 0 10px;
}

.text-decor {
  margin: 0;
}
</style>