import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/Card";

export default function Home() {
  return (
    <div className="home bg-linear-to-b from-white to-emerald-50 min-h-screen p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to the LMS
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Empowering education with seamless course management and engagement.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Courses Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Courses</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Create, manage, and explore courses. Assign instructors and enroll
              students.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/courses" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                Go to Courses
              </button>
            </a>
          </CardFooter>
        </Card>

        {/* Attendance Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Attendance</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Track student attendance automatically or manually. Generate
              reports.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/attendance" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                Track Attendance
              </button>
            </a>
          </CardFooter>
        </Card>

        {/* Quizzes Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Quizzes</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Create and assign quizzes to test student knowledge. View results
              instantly.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/quizzes" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                Manage Quizzes
              </button>
            </a>
          </CardFooter>
        </Card>

        {/* Notifications Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">
              Notifications
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Send real-time alerts and reminders to students and instructors.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/notifications" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                View Notifications
              </button>
            </a>
          </CardFooter>
        </Card>

        {/* Reports Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Reports</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Analyze performance with detailed charts and insights.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/reports" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                View Reports
              </button>
            </a>
          </CardFooter>
        </Card>

        {/* Payments Section */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Manage payments and subscriptions securely with Stripe
              integration.
            </p>
          </CardContent>
          <CardFooter>
            <a href="/modules/payments" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition-colors duration-200"
              >
                Manage Payments
              </button>
            </a>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
