import { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Bell,
  Play,
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalCourses: 0,
    activeCourses: 0,
    completedCourses: 0,
    totalStudents: 0,
    upcomingClasses: 0,
    avgProgress: 0,
  });

  useEffect(() => {
    // Fetch user data and stats
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Replace with actual API calls
      setUser({ name: "John Doe", role: "instructor" });
      setStats({
        totalCourses: 12,
        activeCourses: 8,
        completedCourses: 4,
        totalStudents: 245,
        upcomingClasses: 3,
        avgProgress: 75,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  const quickActions = [
    { icon: BookOpen, label: "Create Course", href: "/courses/create" },
    { icon: Users, label: "Manage Students", href: "/students" },
    { icon: Calendar, label: "Schedule Class", href: "/schedule" },
    { icon: Award, label: "Issue Certificate", href: "/certificates" },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New student enrolled in React Fundamentals",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Assignment submitted for JavaScript Basics",
      time: "4 hours ago",
    },
    { id: 3, action: "Quiz completed by 15 students", time: "6 hours ago" },
  ];

  const upcomingClasses = [
    { id: 1, title: "Advanced React Patterns", time: "10:00 AM", students: 25 },
    {
      id: 2,
      title: "Node.js Backend Development",
      time: "2:00 PM",
      students: 18,
    },
    { id: 3, title: "Database Design Workshop", time: "4:30 PM", students: 12 },
  ];

  return (
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}
            </h1>
            <p class="text-gray-600 mt-1">
              Here's what's happening with your courses today
            </p>
          </div>
          <button class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md flex items-center">
            <Bell class="w-4 h-4 mr-2" />
            Notifications
          </button>
        </div>

        {/* Stats Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg border shadow-sm">
            <div class="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 class="text-sm font-medium">Total Courses</h3>
              <BookOpen class="h-4 w-4 text-emerald-600" />
            </div>
            <div class="p-6 pt-0">
              <div class="text-2xl font-bold">{stats.totalCourses}</div>
              <p class="text-xs text-gray-600">
                {stats.activeCourses} active courses
              </p>
            </div>
          </div>

          <div class="bg-white rounded-lg border shadow-sm">
            <div class="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 class="text-sm font-medium">Total Students</h3>
              <Users class="h-4 w-4 text-emerald-600" />
            </div>
            <div class="p-6 pt-0">
              <div class="text-2xl font-bold">{stats.totalStudents}</div>
              <p class="text-xs text-gray-600">Across all courses</p>
            </div>
          </div>

          <div class="bg-white rounded-lg border shadow-sm">
            <div class="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 class="text-sm font-medium">Avg Progress</h3>
              <TrendingUp class="h-4 w-4 text-emerald-600" />
            </div>
            <div class="p-6 pt-0">
              <div class="text-2xl font-bold">{stats.avgProgress}%</div>
              <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  class="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${stats.avgProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg border shadow-sm">
            <div class="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 class="text-sm font-medium">Upcoming Classes</h3>
              <Clock class="h-4 w-4 text-emerald-600" />
            </div>
            <div class="p-6 pt-0">
              <div class="text-2xl font-bold">{stats.upcomingClasses}</div>
              <p class="text-xs text-gray-600">Today's schedule</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div class="bg-white rounded-lg border shadow-sm">
            <div class="p-6">
              <h3 class="font-semibold leading-none tracking-tight">
                Quick Actions
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                Common tasks and shortcuts
              </p>
            </div>
            <div class="p-6 pt-0 space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  class="w-full flex items-center justify-start px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                  onClick={() => (window.location.href = action.href)}
                >
                  <action.icon class="w-4 h-4 mr-2" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Today's Classes */}
          <div class="bg-white rounded-lg border shadow-sm">
            <div class="p-6">
              <h3 class="font-semibold leading-none tracking-tight">
                Today's Classes
              </h3>
              <p class="text-sm text-gray-600 mt-1">Your scheduled sessions</p>
            </div>
            <div class="p-6 pt-0 space-y-4">
              {upcomingClasses.map((class_) => (
                <div
                  key={class_.id}
                  class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 class="font-medium text-sm">{class_.title}</h4>
                    <p class="text-xs text-gray-600 flex items-center mt-1">
                      <Clock class="w-3 h-3 mr-1" />
                      {class_.time}
                    </p>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                      {class_.students} students
                    </span>
                    <button class="px-3 py-1 bg-emerald-600 text-white rounded-md text-sm">
                      <Play class="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div class="bg-white rounded-lg border shadow-sm">
            <div class="p-6">
              <h3 class="font-semibold leading-none tracking-tight">
                Recent Activity
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                Latest updates from your courses
              </p>
            </div>
            <div class="p-6 pt-0 space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  class="border-l-2 border-emerald-200 pl-4"
                >
                  <p class="text-sm font-medium">{activity.action}</p>
                  <p class="text-xs text-gray-600 mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
