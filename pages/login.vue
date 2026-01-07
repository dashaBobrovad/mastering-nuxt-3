<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ title }}</h1>

    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded" @click="login">
      Log in with Github
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
const route = useRoute();

const supabase = useSupabaseClient();

const login = async () => {
  const origin = window.location.origin;
  const destination = route.query.redirectTo as string || '/';
  
  const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(destination)}`;

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  });

  if (error) {
    console.error(error);
  }
};

</script>
