export default defineNuxtRouteMiddleware((to: { fullPath: any }) => {
    const navigationHistory = useLocalStorage<string[]>('history', [])

    if (navigationHistory.value.at(-1) !== to.fullPath) {
        navigationHistory.value.push(to.fullPath)
        navigationHistory.value = navigationHistory.value.slice(-200)
    }
})
