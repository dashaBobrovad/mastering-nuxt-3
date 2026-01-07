export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();

    if (user.value && to.path === '/login') {
        return navigateTo('/');
    }

    if (user.value || to.params.chapterSlug === "1-chapter-1") {
        return;
    }
    
    return navigateTo(`/login?redirectTo=${to.path}`);
})
