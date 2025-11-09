# 🎓 LMS - Learning Management System

> A modern, full-stack Learning Management System built with React, Node.js, and cutting-edge web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://reactjs.org/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Current Status](#current-status)
- [Contributing](#contributing)
- [Priority Modules](#priority-modules)
- [Roadmap](#roadmap)
- [Documentation](#documentation)
- [License](#license)

---

## 🌟 Overview

LMS is a comprehensive Learning Management System designed to provide an exceptional online learning experience for students, instructors, and administrators. The platform enables course creation, content delivery, student enrollment, progress tracking, assessments, and much more.

### Why This LMS?

- **Modern Architecture**: Separated frontend and backend for scalability
- **Beautiful UI**: Smooth animations with GSAP and Framer Motion
- **Comprehensive Features**: Everything from course creation to certificate generation
- **Role-Based Access**: Distinct experiences for students, instructors, and admins
- **Real-time Updates**: Live notifications and progress tracking
- **Mobile Responsive**: Works seamlessly across all devices

---

## ✨ Features

### For Students
- 📚 Browse and enroll in courses
- 🎥 Video-based learning with progress tracking
- 📝 Take quizzes and submit assignments
- 🏆 Earn certificates upon completion
- 💬 Participate in course discussions
- 📊 Track learning progress and statistics

### For Instructors
- 🎬 Create and manage courses
- 📹 Upload video lectures and resources
- ✍️ Create assignments and quizzes
- 📈 View student analytics
- 💰 Set course pricing (optional)
- 📢 Make announcements to students

### For Administrators
- 👥 User management (students, instructors)
- ✅ Course approval and moderation
- 📊 Platform-wide analytics and reports
- ⚙️ System configuration and settings
- 📧 Bulk email communications

---

## 🛠️ Tech Stack

### Frontend (`/web`)
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: Context API / Zustand
- **Form Handling**: React Hook Form + Zod
- **Testing**: Vitest, React Testing Library, Playwright

### Backend (`/backend`)
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary/AWS S3
- **Email**: Nodemailer
- **Validation**: Express Validator
- **Security**: Helmet, CORS, Rate Limiting
- **Testing**: Jest, Supertest, Artillery

---

## 📁 Project Structure

```
lms-platform/
├── web/                      # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── utils/           # Helper functions
│   │   ├── context/         # React Context providers
│   │   └── routes/          # Route configurations
│   ├── public/              # Static assets
│   ├── package.json
│   └── README.md            # Frontend documentation
│
├── backend/                  # Backend Node.js application
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Configuration files
│   ├── tests/               # Test files
│   ├── package.json
│   └── README.md            # Backend documentation
│
├── docs/                     # Additional documentation
│   ├── API.md               # API documentation
│   ├── DEPLOYMENT.md        # Deployment guide
│   └── CONTRIBUTING.md      # Contribution guidelines
│
├── .github/
│   └── workflows/           # CI/CD workflows
│
├── .gitignore
├── LICENSE
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/risclpu/lms.git
   cd lms
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```
   Backend runs on `http://localhost:5000`

3. **Set up the Frontend**
   ```bash
   cd ../web
   npm install
   cp .env.example .env
   # Edit .env with backend API URL
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api
   - API Health Check: http://localhost:5000/api/health

For detailed setup instructions, see:
- [Frontend Setup Guide](/web/README.md)
- [Backend Setup Guide](/backend/README.md)

---

## 📊 Current Status

### ✅ Completed
- [x] Project structure and architecture
- [x] Main page layout implementation
- [x] Development environment setup
- [x] Comprehensive documentation

### 🚧 In Progress
- [ ] Authentication module
- [ ] User management
- [ ] Course catalog

### ⏳ Planned
- [ ] Video player integration
- [ ] Assignment system
- [ ] Payment integration
- [ ] Real-time notifications
- [ ] Testing implementation

> **Note**: We are currently in the early development phase. Testing will be implemented in the near future as modules are completed.

---

## 🤝 Contributing

We welcome contributions! This project is in active development, and we're looking for contributors to help build the first 3 priority modules.

### Priority Modules for Contributors

#### 🎯 Module 1: Authentication System
**Frontend Tasks:**
- [ ] Login page UI with form validation
- [ ] Registration page with email verification flow
- [ ] Forgot password page
- [ ] Password reset page
- [ ] Protected route component
- [ ] Auth context/state management

**Backend Tasks:**
- [ ] User registration endpoint with validation
- [ ] Login endpoint with JWT generation
- [ ] Email verification endpoint
- [ ] Password reset flow (token generation & validation)
- [ ] JWT middleware for protected routes
- [ ] Refresh token mechanism

**Priority**: 🔴 HIGH  
**Estimated Effort**: 1 week (7 days)  
**Skills Needed**: React, Node.js, JWT, Email Integration

---

#### 🎯 Module 2: User Management
**Frontend Tasks:**
- [ ] User profile page (view/edit)
- [ ] Avatar upload component
- [ ] Account settings page
- [ ] Password change form
- [ ] User dashboard with statistics

**Backend Tasks:**
- [ ] Get user profile endpoint
- [ ] Update user profile endpoint
- [ ] Avatar upload with cloud storage
- [ ] Change password endpoint
- [ ] User statistics aggregation
- [ ] Role-based permissions

**Priority**: 🔴 HIGH  
**Estimated Effort**: 1 week (7 days)  
**Skills Needed**: React, Node.js, File Upload, Cloud Storage

---

#### 🎯 Module 3: Course Catalog
**Frontend Tasks:**
- [ ] Course listing page with filters
- [ ] Course card component
- [ ] Search functionality with autocomplete
- [ ] Category/level filters
- [ ] Pagination component
- [ ] Course detail page (preview mode)

**Backend Tasks:**
- [ ] Get all courses endpoint with pagination
- [ ] Course search with full-text search
- [ ] Filter courses by category, level, price
- [ ] Get single course details endpoint
- [ ] Course model and schema
- [ ] Course rating aggregation

**Priority**: 🟡 MEDIUM  
**Estimated Effort**: 2 weeks (14 days)  
**Skills Needed**: React, Node.js, MongoDB Aggregation, Search

---

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/authentication-login
   ```
3. **Make your changes**
   - Follow the coding standards in CONTRIBUTING.md
   - Write clean, documented code
   - Add comments for complex logic
4. **Commit your changes**
   ```bash
   git commit -m "feat: add login page with validation"
   ```
   Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
5. **Push to your fork**
   ```bash
   git push origin feature/authentication-login
   ```
6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Add screenshots for UI changes

### Contribution Guidelines

- ✅ Follow the folder structure defined in `/web` and `/backend`
- ✅ Use ESLint and Prettier for code formatting
- ✅ Write meaningful commit messages
- ✅ Comment complex code sections
- ✅ Update documentation when adding features
- ⚠️ Testing will be required once the testing framework is set up (coming soon)

For detailed guidelines, see [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

---

## 🗺️ Roadmap

### Phase 1: Foundation (Weeks 1-4) ⭐ **CURRENT PHASE**
- [x] Project setup and architecture
- [ ] Authentication system (**Priority Module 1** - Week 1)
- [ ] User management (**Priority Module 2** - Week 2)
- [ ] Course catalog (**Priority Module 3** - Weeks 3-4)

### Phase 2: Core Features (Weeks 5-8)
- [ ] Course creation workflow for instructors
- [ ] Video upload and streaming
- [ ] Enrollment system
- [ ] Progress tracking
- [ ] Basic dashboard for all user types

### Phase 3: Advanced Features (Weeks 9-12)
- [ ] Assignment and quiz system
- [ ] Discussion forums
- [ ] Certificate generation
- [ ] Payment integration
- [ ] Real-time notifications
- [ ] Email notification system

### Phase 4: Enhancement (Weeks 13-16)
- [ ] Analytics and reporting
- [ ] Live class integration
- [ ] Mobile app (React Native)
- [ ] Advanced search with Elasticsearch
- [ ] Gamification (badges, leaderboards)

### Phase 5: Testing & Optimization (Ongoing)
- [ ] Comprehensive testing suite
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing
- [ ] Accessibility improvements

---

## 📚 Documentation

Detailed documentation is available in the following locations:

- **Frontend Documentation**: [/web/README.md](/web/README.md)
  - Component library
  - State management
  - API integration
  - Animation guidelines
  - Testing strategy

- **Backend Documentation**: [/backend/README.md](/backend/README.md)
  - API endpoints
  - Database schemas
  - Authentication flow
  - File upload
  - Testing guide

- **API Documentation**: [/docs/API.md](/docs/API.md) *(Coming Soon)*
- **Deployment Guide**: [/docs/DEPLOYMENT.md](/docs/DEPLOYMENT.md) *(Coming Soon)*
- **Architecture Overview**: [/docs/ARCHITECTURE.md](/docs/ARCHITECTURE.md) *(Coming Soon)*

---

## 🔧 Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Urgent fixes for production

### Code Review Process
1. Create a PR to `develop` branch
2. At least 1 approval required
3. All CI checks must pass
4. Merge using squash and merge

### Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:
```bash
feat(auth): add login page with form validation
fix(course): resolve enrollment duplicate issue
docs(readme): update installation instructions
```

---

## 🧪 Testing (Coming Soon)

We are committed to maintaining high code quality. A comprehensive testing strategy will be implemented soon:

- **Unit Tests**: For individual components and functions
- **Integration Tests**: For API endpoints and workflows
- **E2E Tests**: For complete user journeys
- **Performance Tests**: For load and stress testing

Once testing is implemented, all PRs will require:
- ✅ All tests passing
- ✅ Code coverage > 70%
- ✅ No console errors

---

## 🔐 Security

- Report security vulnerabilities to: security@yourdomain.com
- Do not create public issues for security concerns
- We will respond within 48 hours

Security measures in place:
- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS configuration
- XSS protection
- SQL/NoSQL injection prevention
- Input validation and sanitization

---

## 🌐 Environment Variables

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=LMS Platform
```

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lms
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

For complete environment variable documentation, see individual README files.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team & Contact

- **Project Lead**: [Your Name](https://github.com/yourusername)
- **Contributors**: [See all contributors](https://github.com/yourusername/lms-platform/graphs/contributors)

### Get in Touch
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/lms-platform/discussions)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/yourusername/lms-platform/issues)
- 📧 Email: contact@yourdomain.com
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community
- MongoDB team
- All our contributors
- Open source community

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/lms-platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/lms-platform?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/lms-platform)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/lms-platform)

---

## 🚀 Quick Links

- [Frontend README](/web/README.md) - Detailed frontend documentation
- [Backend README](/backend/README.md) - Detailed backend documentation
- [Contributing Guide](./docs/CONTRIBUTING.md) - How to contribute
- [Code of Conduct](./docs/CODE_OF_CONDUCT.md) - Community guidelines
- [Changelog](./CHANGELOG.md) - Version history

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by the LMS Team

[Report Bug](https://github.com/yourusername/lms-platform/issues) · [Request Feature](https://github.com/yourusername/lms-platform/issues) · [Documentation](/docs)

</div>
