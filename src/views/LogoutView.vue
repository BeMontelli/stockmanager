<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

console.log("isAuthenticated",authStore.isAuthenticated);
if (authStore.isAuthenticated) {
  authStore.logout();
  router.push('/');
}
</script>