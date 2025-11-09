import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  StarIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const courseImages = [
  {
    src: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Modern Web Development",
    instructor: "Jane Doe",
    price: "$49",
  },
  {
    src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data Science Essentials",
    instructor: "John Smith",
    price: "$59",
  },
  {
    src: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "UI/UX Design Mastery",
    instructor: "Emily Clark",
    price: "$39",
  },
];


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                RISC LMS
              </span>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-emerald-700 font-medium px-3 py-2 rounded-lg transition-colors"
              >
                Features
              </a>
              <a
                href="#courses"
                className="text-gray-600 hover:text-emerald-700 font-medium px-3 py-2 rounded-lg transition-colors"
              >
                Courses
              </a>
              <Link
                to="/home"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow"
              >
                Dashboard
              </Link>
              <Link
                to="/login"
                className="text-emerald-600 font-medium px-3 py-2 rounded-lg border border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-emerald-50 text-emerald-700 font-medium px-3 py-2 rounded-lg border border-emerald-600 hover:bg-emerald-100 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              {/* Add a minimal hamburger menu for mobile */}
              <button
                type="button"
                aria-label="Open menu"
                className="text-emerald-600 hover:text-emerald-800 focus:outline-none"
                // TODO: Implement mobile menu logic
              >
                <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                  <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                  <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Hero Section */} 
      <section className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 mb-4">
                <CheckCircleIcon className="w-4 h-4 mr-2" />
                Trusted by 10,000+ educators worldwide
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                The Future of
                <span className="block bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Learning Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Empower your institution with our comprehensive LMS platform. Create engaging courses,
                track progress, and deliver exceptional learning experiences at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="/home"
                  className="inline-flex cursor-pointer items-center justify-center px-6 py-2 text-base font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex cursor-pointer items-center justify-center px-6 py-2 text-base font-semibold text-emerald-600 bg-white border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                  <PlayCircleIcon className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-1" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-1" />
                  14-day free trial
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Course Analytics</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-3 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">1,234</div>
                      <div className="text-sm text-gray-600">Active Students</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Completion Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Course Progress</span>
                      <span className="text-emerald-600 font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full w-[87%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-2 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Live: 156 students</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Showcase */}
      <section id="courses" className="py-16 bg-linear-to-b from-white via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Explore Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our top-rated courses designed by expert instructors for modern learners.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {courseImages.map((course, idx) => (
              <motion.div
                key={course.title}
                variants={fadeInUp}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.src}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-3xl group-hover:scale-[1.04] transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {course.price}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">by {course.instructor}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/courses"
                      className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 gap-2"
                      style={{ minWidth: 120 }}
                    >
                      View Course
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium shadow-sm">
                      Popular
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: "10,000+", label: "Active Learners" },
              { number: "500+", label: "Institutions" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Everything you need to deliver exceptional learning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools educators need to create,
              manage, and scale their learning programs effectively.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <BookOpenIcon className="w-8 h-8" />,
                title: "Course Creation",
                description:
                  "Intuitive course builder with multimedia support, interactive content, and SCORM compliance.",
              },
              {
                icon: <UserGroupIcon className="w-8 h-8" />,
                title: "Student Management",
                description:
                  "Comprehensive student profiles, progress tracking, and automated enrollment workflows.",
              },
              {
                icon: <ChartBarIcon className="w-8 h-8" />,
                title: "Advanced Analytics",
                description:
                  "Real-time insights into learning performance, engagement metrics, and completion rates.",
              },
              {
                icon: <AcademicCapIcon className="w-8 h-8" />,
                title: "Certification",
                description:
                  "Digital badges and certificates with blockchain verification and instant sharing.",
              },
              {
                icon: <ClockIcon className="w-8 h-8" />,
                title: "Scheduling",
                description:
                  "Integrated calendar, automated reminders, and seamless virtual classroom integration.",
              },
              {
                icon: <BuildingOfficeIcon className="w-8 h-8" />,
                title: "Enterprise Ready",
                description:
                  "SSO integration, role-based permissions, and enterprise-grade security features.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-emerald-600 mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to transform your learning experience?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of educators who trust RISC LMS to deliver exceptional learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/home"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-emerald-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">RISC LMS</span>
              </div>
              <p className="text-gray-400 mb-3">
                Empowering educators with next-generation learning management solutions.
              </p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "API"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Contact"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Help Center", "Community", "Blog"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-3">{column.title}</h3>
                <ul className="space-y-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2024 RISC LMS. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
