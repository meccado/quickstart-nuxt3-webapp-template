// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', "@nuxtjs/color-mode"],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
})