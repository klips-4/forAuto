<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-body border-radius p-5 bg-light">
        <ul class="nav nav-pills nav-justified mb-3">
          <li class="nav-item">
            <router-link  class="nav-link text-dark" to="/login">Авторизация</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-dark active-position" to="/signup">Регистрация</router-link>
          </li>
        </ul>
        <div class="tab-content">
          <div class=" ">
            <form class="text-center" action="">
              <div class="form-outline mb-4">
                <input type="text" class="form-control" placeholder="Фамилия">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" placeholder="Имя">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" placeholder="Отчество">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="form-outline mb-4">
                <input type="text" class="form-control" placeholder="Пароль">
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-1 w-100">Зарегестрироваться</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">

</style>