import type { Router } from 'vue-router'
import { useAuthStoreWithout } from '@/store/modules/auth'

export function setupPageGuard(router: Router) {
  router.beforeEach(async (to, next) => {
    const authStore = useAuthStoreWithout()
    if (!authStore.session) {
      try {
        await authStore.getSession()
      }
      catch (error) {
        console.error('Error fetching session:', error)
      }
    }
    next()
  })
}
