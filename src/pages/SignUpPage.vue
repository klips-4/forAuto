<template>
  <div class="modal-dialog modal-dialog-centered" style="max-width: 400px; width: 90%">
    <div class="modal-content">
      <div class="modal-body border-radius p-5 bg-cst">

        <ul style="border-radius: 5px" class="nav nav-pills nav-justified mb-3 bg-light">
          <li class="nav-item">
            <router-link  class="nav-link text-dark sans-serif" to="/login">Авторизация</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-dark active-position sans-serif" to="/signup">Регистрация</router-link>
          </li>
        </ul>

        <div class="tab-content">
          <div class=" ">
            <form class="text-center" action="">
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
                    type="text"
                    class="form-control sans-serif"
                    v-model="password"
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
                      :disabled="true"
                      class="btn btn-primary btn-block mb-1 w-100 sans-serif fw-bold">Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const lastName = ref("")
const firstName = ref("")
const middleName = ref("")
const email = ref("")
const password = ref("")
const phoneNumber = ref("")
</script>

<style lang="scss">

</style>