type Progress = Record<string, Record<string, boolean>>;

export const useCourseProgress = defineStore('courseProgress', () => {
    const progress = useLocalStorage<Progress>('progress', {});
    const initialized = ref(false);

    async function initialize() {
        if (initialized.value) return;
        initialized.value = true;
    }

    const toggleComplete = async (chapter: string, lesson: string) => {
        const user = useSupabaseUser();
        if (!user.value) return;

        if (!chapter || !lesson) {
            const {
                params: { chapterSlug, lessonSlug }
            } = useRoute();

            chapter = chapterSlug as string;
            lesson = lessonSlug as string;
        }

        const currentProgress = progress.value[chapter]?.[lesson] ?? false;

        progress.value[chapter] = {
            ...(progress.value[chapter] ?? {}),
            [lesson]: !currentProgress,
        };

        // TODO: Update in DB (lesson 6-4)
    };

    return { initialize, progress, toggleComplete };
});
