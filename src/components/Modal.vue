<template>
  <div
      v-if="isOpen"
      class="modal-dialog position-fixed overlay"
      style="max-width: 450px; width: 100%">
    <div class="modal-content mt-1">
      <div class="modal-body border-radius p-5 bg-body">
        <ul style="border-radius: 5px"
            class="nav nav-pills nav-justified mb-1 bg-light">
        </ul>
        <div class="tab-content text-center">
          <h4>Введите код подтверждения</h4>
          <p>Осталось времени: {{ remainingTime }} секунд</p>
          <div class="form-outline mt-2">
            <input
                type="text"
                class="form-control sans-serif"
                v-model="storedCode"
                maxlength="4"
                placeholder="4-х значный код">
          </div>
          <button
              :disabled="!(storedCode.length == 4)"
              type="submit"
              class="btn btn-primary btn-block mt-3 w-100 sans-serif fw-bold"
              @click="closeModal"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const remainingTime = ref(30);
const isOpen = ref(true);
const storedCode = ref('');
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
  isOpen.value = false
}

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.overlay {
  left: 0;
  right: 0;
}

</style>