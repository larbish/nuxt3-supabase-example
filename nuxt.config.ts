import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/supabase', '@nuxthq/ui', '@nuxtjs/color-mode'],
  meta: {
    title: 'Nuxt3 x Supabase TODO'
  },
  ui: {
    colors: {
      primary: 'green'
    }
  }
})
