<template>
  <div>
    <SwitchButton :color="color"/>
    <h1 class="text-center text-3xl font-semibold tracking-wide">{{ title }}</h1>
    <div class="mx-auto h-0.5 w-48 bg-gray-900 dark:bg-slate-50"></div>
    <!-- create a div item-center justify-center wth a button with @click event label "Login With Google"-->
    <div class="flex flex-col items-center justify-center h-screen">
      <button class="bg-blue-500 hover:bg-blue-704 text font-bold py-2 px-4 rounded mb-6"
        @click="loginWithGoogle()"
      >
      Login With Goggle
    </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const title = ref('Hello Nuxt3!');
  const color = ref('after:bg-blue-500')
  const loginWithGoogle = () => {
    console.log('Login With Google')
  }
</script>

<style></style>