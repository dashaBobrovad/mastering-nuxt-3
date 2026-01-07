export default defineNuxtConfig({
	compatibilityDate: '2026-01-04',
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/supabase'],

	supabase: {
		redirect: false,
		redirectOptions: {
			login: '/login',
			callback: '/auth/callback',
			exclude: []
		  }
	}
})
