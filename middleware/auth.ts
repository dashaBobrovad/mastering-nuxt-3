export default defineNuxtRouteMiddleware((from: { params: { chapterSlug: string; }; }, to: any) => {
    if (from.params.chapterSlug === "1-chapter-1") {
        return;
    }
    return navigateTo("/login");
})
