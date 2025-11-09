# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# LMS Frontend - Learning Management System

## 🚀 Tech Stack
- **React 18+** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Framer Motion** - Animation library for React
- **GSAP (GreenSock)** - Professional-grade animation library

## 📋 Current Status
✅ Main page layout implemented  
⚠️ All other features pending implementation

---

## 🎯 Features to Implement

### 1. **Authentication Module**
- [ ] Login page with form validation
- [ ] Registration/Sign-up page
- [ ] Forgot password flow
- [ ] Password reset page
- [ ] Email verification page
- [ ] OAuth integration (Google, GitHub - optional)
- [ ] Protected routes HOC/component
- [ ] JWT token management (localStorage/sessionStorage)
- [ ] Auto-logout on token expiration

### 2. **User Dashboard**
#### Student Dashboard
- [ ] Welcome banner with user info
- [ ] Enrolled courses grid/list view
- [ ] Progress overview cards
- [ ] Upcoming assignments/deadlines
- [ ] Recent announcements
- [ ] Calendar view for schedule
- [ ] Quick access to active courses
- [ ] Notifications panel

#### Instructor Dashboard
- [ ] Courses taught overview
- [ ] Student statistics
- [ ] Recent submissions for grading
- [ ] Course management quick actions
- [ ] Analytics charts (enrollments, completion rates)
- [ ] Announcement creation widget

#### Admin Dashboard
- [ ] User management overview
- [ ] System statistics
- [ ] Course approval queue
- [ ] Reports and analytics
- [ ] System health monitoring

### 3. **Course Catalog**
- [ ] Browse all courses page
- [ ] Search functionality with filters
- [ ] Category/subject filtering
- [ ] Difficulty level filter
- [ ] Price range filter (if paid courses)
- [ ] Sort options (popular, newest, rating)
- [ ] Course cards with thumbnail, title, instructor, rating
- [ ] Pagination or infinite scroll
- [ ] Featured courses section

### 4. **Course Detail Page**
- [ ] Course header with title, instructor, rating
- [ ] Course description and objectives
- [ ] Curriculum/syllabus accordion
- [ ] Preview video player
- [ ] Instructor profile section
- [ ] Student reviews and ratings
- [ ] Enroll button (or "Go to Course" if enrolled)
- [ ] Prerequisites display
- [ ] Course duration and last updated info
- [ ] Share course functionality

### 5. **Course Player/Viewer**
- [ ] Video player integration (custom or library like Video.js)
- [ ] Lesson sidebar with progress indicators
- [ ] Lecture navigation (previous/next)
- [ ] Video controls (play, pause, speed, fullscreen)
- [ ] Progress tracking (mark as complete)
- [ ] Course notes section
- [ ] Download resources section
- [ ] Bookmark functionality
- [ ] Quiz/assessment launcher
- [ ] Discussion forum per lesson

### 6. **Assignments & Assessments**
- [ ] Assignment listing page
- [ ] Assignment detail view
- [ ] File upload for submissions
- [ ] Submission history
- [ ] Grading display (when available)
- [ ] Feedback section
- [ ] Quiz interface with timer
- [ ] Multiple choice, true/false, essay questions
- [ ] Quiz results page with score breakdown
- [ ] Certificate generation on course completion

### 7. **Course Creation (Instructor)**
- [ ] Multi-step course creation wizard
- [ ] Basic info form (title, description, category)
- [ ] Curriculum builder (add sections/lessons)
- [ ] Video upload interface with progress bar
- [ ] Rich text editor for lesson content
- [ ] Resource attachment (PDFs, files)
- [ ] Quiz/assignment creator
- [ ] Pricing settings (if applicable)
- [ ] Publish/draft toggle
- [ ] Course preview mode

### 8. **User Profile**
- [ ] View/edit profile page
- [ ] Avatar upload
- [ ] Bio and social links
- [ ] Enrolled courses list
- [ ] Certificates earned
- [ ] Learning statistics/badges
- [ ] Account settings
- [ ] Privacy settings
- [ ] Change password
- [ ] Delete account option

### 9. **Communication Features**
- [ ] Discussion forums per course
- [ ] Thread creation and replies
- [ ] Markdown support in posts
- [ ] Like/upvote system
- [ ] Direct messaging between users
- [ ] Announcement feed
- [ ] Notification center with badges
- [ ] Email notification preferences

### 10. **Admin Panel**
- [ ] User management (list, search, edit, delete)
- [ ] Course management (approve, reject, delete)
- [ ] Role assignment (student, instructor, admin)
- [ ] Content moderation tools
- [ ] System settings configuration
- [ ] Analytics and reporting dashboards
- [ ] Bulk operations (email users, etc.)

### 11. **Search & Navigation**
- [ ] Global search bar with autocomplete
- [ ] Search results page
- [ ] Breadcrumb navigation
- [ ] Responsive mobile menu
- [ ] Footer with links
- [ ] Sitemap

### 12. **UI Components Library**
- [ ] Reusable Button component
- [ ] Input/Form components with validation
- [ ] Modal/Dialog component
- [ ] Toast/Notification component
- [ ] Loading spinner/skeleton screens
- [ ] Card components
- [ ] Tabs component
- [ ] Accordion component
- [ ] Dropdown/Select component
- [ ] Pagination component
- [ ] Rating stars component
- [ ] Progress bar component
- [ ] Avatar component
- [ ] Badge component

### 13. **State Management**
- [ ] Set up Context API or Redux
- [ ] Auth state management
- [ ] User profile state
- [ ] Course data state
- [ ] Cart state (if e-commerce)
- [ ] Notification state

### 14. **API Integration**
- [ ] Axios instance configuration
- [ ] API endpoint constants
- [ ] Request/response interceptors
- [ ] Error handling middleware
- [ ] Loading state management
- [ ] Retry logic for failed requests

### 15. **Responsive Design**
- [ ] Mobile-first approach
- [ ] Tablet breakpoints
- [ ] Desktop optimization
- [ ] Touch-friendly interactions
- [ ] Hamburger menu for mobile

### 16. **Performance Optimization**
- [ ] Lazy loading for routes
- [ ] Image optimization with lazy loading
- [ ] Code splitting
- [ ] Memoization for expensive computations
- [ ] Virtual scrolling for large lists
- [ ] Caching strategy
- [ ] Optimize GSAP animations (use will-change, transforms)
- [ ] Debounce scroll-triggered animations
- [ ] Preload critical assets
- [ ] Implement intersection observer for on-demand animations

### 17. **Accessibility (A11y)**
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast compliance
- [ ] Focus management
- [ ] Respect prefers-reduced-motion for animations
- [ ] Skip to content links
- [ ] Accessible form error messages

### 18. **Testing**
- [ ] Unit tests for utilities
- [ ] Component tests (React Testing Library)
- [ ] Integration tests
- [ ] E2E tests (Cypress/Playwright)

### 19. **Animations & Interactions (GSAP + Framer Motion)**

#### GSAP Animations:
- [ ] Hero section parallax scroll effects
- [ ] Course card hover animations with 3D transforms
- [ ] Text reveal animations on page load
- [ ] Smooth scroll with scroll triggers
- [ ] SVG path animations for illustrations
- [ ] Number counter animations for statistics
- [ ] Timeline-based sequence animations for onboarding
- [ ] Mouse follower cursor effects (custom cursor)
- [ ] Stagger animations for lists and grids
- [ ] Morphing shapes and blob animations

#### Framer Motion Animations:
- [ ] Page transition animations between routes
- [ ] Modal/Dialog enter/exit animations
- [ ] Sidebar slide-in animations
- [ ] Tab switching animations with layout
- [ ] Drag-and-drop for curriculum reordering
- [ ] Gesture-based interactions (swipe, drag)
- [ ] Animated notifications/toast messages
- [ ] Progress bar animations with spring physics
- [ ] Card flip animations for quiz questions
- [ ] Accordion expand/collapse animations
- [ ] Navbar show/hide on scroll
- [ ] Button hover and tap animations
- [ ] Loading skeleton animations with shimmer effect
- [ ] Badge and achievement pop-in animations
- [ ] Form field focus animations

#### Combined Effects:
- [ ] Landing page with complex scroll-triggered animations
- [ ] Interactive course preview with animated timeline
- [ ] Animated dashboard statistics with GSAP + Framer
- [ ] Certificate generation with celebration animations
- [ ] Course completion confetti effect
- [ ] Animated walkthrough/tutorial overlays
- [ ] Interactive infographics with scroll-based reveals

#### Animation Utils:
- [ ] Create reusable animation variants for Framer Motion
- [ ] GSAP timeline templates for common sequences
- [ ] Animation hooks (useGSAP, useScrollAnimation)
- [ ] Reduced motion support for accessibility
- [ ] Performance monitoring for animations

### 20. **Additional Features**
- [ ] Dark mode toggle with smooth transition
- [ ] Multi-language support (i18n)
- [ ] Payment integration (Stripe/PayPal)
- [ ] Shopping cart for courses
- [ ] Wishlist functionality
- [ ] Course recommendations
- [ ] Gamification (badges, points, leaderboards)
- [ ] Live class integration (Zoom/WebRTC)
- [ ] Calendar integration
- [ ] Export certificates as PDF

---

## 📁 Recommended Folder Structure

```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   └── features/
│       ├── auth/
│       ├── courses/
│       ├── dashboard/
│       └── ...
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── CourseCatalog.jsx
│   ├── CourseDetail.jsx
│   └── ...
├── context/ (or store/)
│   ├── AuthContext.jsx
│   ├── CourseContext.jsx
│   └── ...
├── hooks/
│   ├── useAuth.js
│   ├── useFetch.js
│   ├── useGSAP.js
│   ├── useScrollAnimation.js
│   └── ...
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── courseService.js
│   └── ...
├── utils/
│   ├── validators.js
│   ├── formatters.js
│   ├── animations.js
│   ├── gsapHelpers.js
│   └── constants.js
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
├── App.jsx
└── main.jsx
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd lms-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Required Dependencies

```bash
# Core dependencies
npm install react-router-dom axios

# Animation libraries
npm install framer-motion gsap

# UI/Form libraries (optional but recommended)
npm install react-hook-form zod
npm install lucide-react  # for icons

# State management (choose one)
npm install zustand
# OR
npm install @reduxjs/toolkit react-redux

# Additional utilities
npm install date-fns  # date formatting
npm install clsx tailwind-merge  # className utilities
npm install react-hot-toast  # notifications
npm install canvas-confetti  # celebration effects

# Development dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=LMS Platform
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

---

## 🎨 Tailwind CSS Configuration

Ensure `tailwind.config.js` includes:

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...},
      },
    },
  },
  plugins: [],
}
```

---

## 📝 Git Workflow

1. Create feature branches: `git checkout -b feature/user-authentication`
2. Commit with clear messages: `git commit -m "Add login form validation"`
3. Push and create PR: `git push origin feature/user-authentication`

---

## 🐛 Known Issues
- None yet (project in early stages)

---

## 👥 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License
MIT License

---

## 🆘 Support
For issues and questions, please open an issue on GitHub or contact the development team.