<template>
  <section class=" text-center text-lg-start">

    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img src="/src/assets/mers.bmp" alt="Trendy Pants and Shoes"
               class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">

            <form>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control"
                placeholder="Email"
                />

              </div>


              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control"
                placeholder="Password"
                />

              </div>


              <div class="row mb-4">
                <div class="col d-flex justify-content-center">

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Запомнить меня </label>
                  </div>
                </div>

                <div class="col">

                  <a href="#!">Забыли пароль?</a>
                </div>
              </div>


              <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Войти</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>