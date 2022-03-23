<template>
  <div class="min-h-screen u-bg-black">
    <div class="flex items-center justify-between">
      <UseDark v-slot="{ isDark, toggleDark }">
        <UButton size="xl" variant="transparent" :icon="isDark ? 'heroicons-outline:moon' : 'heroicons-outline:sun'" @click="toggleDark" />
      </UseDark>
      <UButton v-if="!!user" class="u-text-white" size="xl" variant="transparent" @click="logout">
        Logout
      </UButton>
    </div>
    <div class="max-w-xl min-h-screen px-4 mx-auto sm:px-6 lg:px-8">
      <div class="min-h-screen -mt-[50px] flex items-center justify-center">
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
