<template>
  <div class="u-bg-black h-screen">
    <div class="flex justify-between items-center">
      <UseDark v-slot="{ isDark, toggleDark }">
        <UButton size="xl" variant="transparent" :icon="isDark ? 'heroicons-outline:moon' : 'heroicons-outline:sun'" @click="toggleDark" />
      </UseDark>
      <UButton v-if="!!user" class="u-text-white" size="xl" variant="transparent" @click="logout">
        Logout
      </UButton>
    </div>
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-46px)] -mt-[46px]">
      <div class="h-full flex items-center justify-center">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseDark } from '@vueuse/components'

const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const logout = async () => {
  await client.auth.signOut()
  router.push('/')
}
</script>
