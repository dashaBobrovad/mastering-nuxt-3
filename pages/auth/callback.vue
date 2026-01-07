<script setup lang="ts">
const route = useRoute();
const user = useSupabaseUser();

watchEffect(async () => {
    if (user.value) {
        const next = route.query.next as string || '/';
        await navigateTo(next, { replace: true });
    }
});
</script>

<template>
    <div>Redirecting...</div>
</template>
