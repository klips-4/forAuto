<template>
  <div class="modal-dialog modal-dialog-centered" style="max-width: 400px; width: 90%">
    <div class="modal-content">
      <div class="modal-body border-radius p-5 bg-light">
        <div class="text-center">
          <img class="img-fluid w-25" src="../../public/logo.png" alt="">
        </div>

        <div class="tab-content">
          <div class=" ">
            <form class="text-center pt-3" action="">
              <h5 style="color: rgba(28, 100, 255)">Зарегестрироваться в WASH`N WRENCH</h5>
              <div class="form-outline mt-3 mb-4">
                <input type="text" class="form-control btn-cst cursor-pointer" v-model="surname" placeholder="Фамилия">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control btn-cst cursor-pointer" v-model="firstname" placeholder="Имя">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control btn-cst cursor-pointer" v-model="patronymic" placeholder="Отчество">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control btn-cst cursor-pointer" v-model="email" placeholder="Email">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control btn-cst cursor-pointer" v-model="password" placeholder="Email">
              </div>
              <button @click="authStore.login(username,password)" type="submit" class="btn btn-cst btn-block mb-4 w-100">Подтвердить</button>
              <router-link  class="btn btn-cst btn-block mb-1 w-100" to="/login">Назад</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const surname = ref("")
const firstname = ref("")
const patronymic = ref("")
const email = ref("")
const password = ref("")
</script>

<style lang="scss">

</style>