<template>
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-body border-radius p-5 bg-light">
      <ul class="nav nav-pills nav-justified mb-3">
        <li class="nav-item">
          <router-link  class="nav-link text-dark active-position" to="/login">Авторизация</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link text-dark" to="/signup">Регистрация</router-link>
        </li>
      </ul>
      <div class="tab-content">
        <div class=" ">
          <form class="text-center" action="">
            <p>Войти с помощью:</p>
            <div class="d-flex flex-row justify-content-center">
              <GoogleLogin :callback="callback"/>
<!--              <GoogleLogin @success="onGoogleLoginSuccess" @error="onGoogleLoginError">-->
<!--                <div class="form-outline mx-2 mb-2 cursor-pointer text-blue">-->
<!--                  <i class="bi bi-google fs-4"></i>-->
<!--                </div>-->
<!--              </GoogleLogin>-->
            <div class="form-outline mx-2 mb-2 cursor-pointer text-blue">
              <i class="bi bi-facebook fs-4"></i>
            </div>
            </div>
            <p>или:</p>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" v-model="username" placeholder="Email">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" v-model="password" placeholder="Пароль">
              </div>
              <button @click="authStore.login(username,password)" type="submit" class="btn btn-primary btn-block mb-1 w-100">Войти</button>
          </form>
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

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
}

</script>

<style lang="scss">


</style>