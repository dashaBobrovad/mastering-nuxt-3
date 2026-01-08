import type { Chapter, Course, Lesson, LessonWithPath } from '~/types/course';
import course from '~/server/courseData';
import protectRoute from '~/server/utils/protectRoute';

course as Course;

export default defineEventHandler((event): LessonWithPath => {
    const params = event.context.params;

    if (!params) {
        throw createError({ statusCode: 400, message: 'Missing params' });
    };

    const { chapterSlug, lessonSlug } = params;

    if (chapterSlug !== "1-chapter-1") {
        protectRoute(event);
    }

    const chapter: Maybe<Chapter> = course.chapters.find(
        (chapter) => chapter.slug === chapterSlug
    );

    if (!chapter) {
        throw createError({
            statusCode: 404,
            message: 'not chapter'
        })
    }

    const lesson: Maybe<Lesson> = chapter.lessons.find(
        (lesson) => lesson.slug === lessonSlug
    );

    if (!lesson) {
        throw createError({
            statusCode: 404,
            message: 'not lesson'
        })
    }

    return {
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    };
})
