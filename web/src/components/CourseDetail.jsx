import { useParams, Link } from "react-router-dom";

const mockCourse = {
  title: "React Basics",
  description:
    "Learn the fundamentals of React, including components, hooks, and state management.",
  lessons: [
    { _id: "l1", title: "Introduction to React" },
    { _id: "l2", title: "JSX and Rendering" },
    { _id: "l3", title: "State and Props" },
  ],
};

export default function CourseDetail() {
  const { id } = useParams();
  // In real app, fetch course by id
  const course = mockCourse;
  return (
    <div class="course-detail p-8 max-w-2xl mx-auto bg-white rounded-xl shadow border border-green-100">
      <h2 class="text-3xl font-bold text-green-700 mb-2">{course.title}</h2>
      <p class="mb-4 text-slate-600">{course.description}</p>
      <h3 class="text-lg font-semibold text-green-600 mb-2">Lessons</h3>
      <ul class="list-disc pl-6 mb-6">
        {course.lessons.map((l) => (
          <li key={l._id} class="mb-1 text-slate-700">
            {l.title}
          </li>
        ))}
      </ul>
      <Link
        to="/dashboard"
        class="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition-all duration-200"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
