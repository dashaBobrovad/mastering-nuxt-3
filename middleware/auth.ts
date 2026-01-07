export default defineNuxtRouteMiddleware((from) => {
    if (from.params.chapterSlug === "1-chapter-1") {
        return;
    }
    return navigateTo("/login");
})
