<template>
  <div class="min-h-screen flex items-center justify-center" :class="{ block: formVisible, hidden: !formVisible }">
    <!-- Phần nền bên ngoài form (lớp overlay mờ) -->
    <div class="fixed inset-0 bg-gray-700 opacity-50 z-50"></div>

    <!-- Form -->
    <div class="relative bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 z-50 mr-20">
        <button class="absolute top-2 right-2 px-2 py-1 text-gray-600 hover:bg-green-500 rounded-full bg-blue-500" @click="closeForm">
        <span class="text-white test-xs">X</span>
      </button>

      <!-- Nội dung của form -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="avatar"> Avatar </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="avatar"
          type="file"
          accept="image/*"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Username </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="age"> Age </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="number"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="dob"> Date of birth </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dob"
          type="date"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="custom2"> Input </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="custom2"
          type="text"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="custom3"> Input </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="custom3"
          type="text"
        />
      </div>
      <!-- Kết thúc nội dung của form -->
    </div>
    <!-- Kết thúc form -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formVisible = ref(true)
const closeForm = () => {
  formVisible.value = !formVisible.value
}
</script>
