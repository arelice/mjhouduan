<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="用户名" required>
      <input v-model="password" type="password" placeholder="密码" required>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

const username = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

async function handleLogin() {
  try {
    await authStore.login(username.value, password.value)
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    // 这里可以添加错误提示
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}
</style>
