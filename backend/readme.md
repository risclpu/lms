# LMS Backend - Learning Management System

## 🚀 Recommended Tech Stack
- **Node.js + Express** - Server framework
- **MongoDB + Mongoose** - Database (or PostgreSQL with Sequelize)
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary/AWS S3** - Media storage
- **Nodemailer** - Email service
- **Socket.io** - Real-time features (optional)

---

## 🎯 Backend Features to Implement

### 1. **Authentication & Authorization**

#### Endpoints:
- [ ] `POST /api/auth/register` - User registration
- [ ] `POST /api/auth/login` - User login
- [ ] `POST /api/auth/logout` - User logout
- [ ] `POST /api/auth/forgot-password` - Send password reset email
- [ ] `POST /api/auth/reset-password/:token` - Reset password with token
- [ ] `POST /api/auth/verify-email/:token` - Email verification
- [ ] `POST /api/auth/refresh-token` - Refresh JWT token
- [ ] `GET /api/auth/me` - Get current user

#### Features:
- [ ] Password hashing with bcrypt
- [ ] JWT token generation and validation
- [ ] Refresh token mechanism
- [ ] Email verification flow
- [ ] Password reset flow with expiring tokens
- [ ] OAuth integration (Google, GitHub)
- [ ] Rate limiting on auth endpoints
- [ ] Account lockout after failed attempts

#### Middleware:
- [ ] Authentication middleware (verify JWT)
- [ ] Role-based authorization (student, instructor, admin)
- [ ] Permission-based access control

---

### 2. **User Management**

#### Endpoints:
- [ ] `GET /api/users` - Get all users (admin only)
- [ ] `GET /api/users/:id` - Get user by ID
- [ ] `PUT /api/users/:id` - Update user profile
- [ ] `DELETE /api/users/:id` - Delete user (admin only)
- [ ] `POST /api/users/:id/avatar` - Upload user avatar
- [ ] `PUT /api/users/:id/password` - Change password
- [ ] `GET /api/users/:id/courses` - Get user's enrolled courses
- [ ] `GET /api/users/:id/certificates` - Get user's certificates

#### Database Schema (User Model):
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: Enum ['student', 'instructor', 'admin'],
  avatar: String (URL),
  bio: String,
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  },
  isEmailVerified: Boolean (default: false),
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  enrolledCourses: [CourseId],
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date,
  isActive: Boolean (default: true)
}
```

---

### 3. **Course Management**

#### Endpoints:
- [ ] `POST /api/courses` - Create course (instructor/admin)
- [ ] `GET /api/courses` - Get all courses (with filters, pagination)
- [ ] `GET /api/courses/:id` - Get course by ID
- [ ] `PUT /api/courses/:id` - Update course (instructor/admin)
- [ ] `DELETE /api/courses/:id` - Delete course (admin)
- [ ] `POST /api/courses/:id/publish` - Publish course
- [ ] `POST /api/courses/:id/unpublish` - Unpublish course
- [ ] `GET /api/courses/:id/students` - Get enrolled students
- [ ] `POST /api/courses/:id/enroll` - Enroll in course
- [ ] `POST /api/courses/:id/unenroll` - Unenroll from course
- [ ] `GET /api/courses/search` - Search courses
- [ ] `GET /api/courses/featured` - Get featured courses

#### Database Schema (Course Model):
```javascript
{
  title: String (required),
  slug: String (unique),
  description: String (required),
  shortDescription: String,
  thumbnail: String (URL),
  instructor: UserId (ref: User),
  category: String (required),
  level: Enum ['beginner', 'intermediate', 'advanced'],
  price: Number (default: 0),
  discountPrice: Number,
  duration: Number (in hours),
  language: String (default: 'English'),
  prerequisites: [String],
  learningObjectives: [String],
  curriculum: [{
    sectionTitle: String,
    lessons: [{
      lessonTitle: String,
      lessonType: Enum ['video', 'article', 'quiz'],
      content: String,
      videoUrl: String,
      duration: Number,
      resources: [{ name: String, url: String }],
      isFree: Boolean
    }]
  }],
  enrolledStudents: [UserId],
  rating: Number (default: 0),
  reviewCount: Number (default: 0),
  status: Enum ['draft', 'published', 'archived'],
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date
}
```

---

### 4. **Lesson/Content Management**

#### Endpoints:
- [ ] `POST /api/courses/:courseId/lessons` - Add lesson
- [ ] `PUT /api/lessons/:id` - Update lesson
- [ ] `DELETE /api/lessons/:id` - Delete lesson
- [ ] `POST /api/lessons/:id/video` - Upload video
- [ ] `POST /api/lessons/:id/resources` - Upload resources
- [ ] `GET /api/lessons/:id` - Get lesson details
- [ ] `POST /api/lessons/:id/complete` - Mark lesson as complete

---

### 5. **Enrollment & Progress Tracking**

#### Endpoints:
- [ ] `POST /api/enrollments` - Create enrollment
- [ ] `GET /api/enrollments/user/:userId` - Get user enrollments
- [ ] `GET /api/enrollments/course/:courseId` - Get course enrollments
- [ ] `PUT /api/enrollments/:id/progress` - Update progress
- [ ] `GET /api/enrollments/:id/progress` - Get enrollment progress

#### Database Schema (Enrollment Model):
```javascript
{
  student: UserId (ref: User),
  course: CourseId (ref: Course),
  enrolledAt: Date,
  completedAt: Date,
  progress: Number (0-100),
  completedLessons: [LessonId],
  lastAccessedLesson: LessonId,
  certificateIssued: Boolean (default: false),
  certificateUrl: String
}
```

---

### 6. **Assignments & Assessments**

#### Endpoints:
- [ ] `POST /api/courses/:courseId/assignments` - Create assignment
- [ ] `GET /api/assignments/:id` - Get assignment details
- [ ] `PUT /api/assignments/:id` - Update assignment
- [ ] `DELETE /api/assignments/:id` - Delete assignment
- [ ] `POST /api/assignments/:id/submit` - Submit assignment
- [ ] `GET /api/assignments/:id/submissions` - Get all submissions
- [ ] `PUT /api/submissions/:id/grade` - Grade submission
- [ ] `POST /api/courses/:courseId/quizzes` - Create quiz
- [ ] `GET /api/quizzes/:id` - Get quiz
- [ ] `POST /api/quizzes/:id/attempt` - Submit quiz attempt
- [ ] `GET /api/quizzes/:id/results` - Get quiz results

#### Database Schema (Assignment Model):
```javascript
{
  course: CourseId (ref: Course),
  title: String (required),
  description: String,
  dueDate: Date,
  maxScore: Number,
  attachments: [{ name: String, url: String }],
  createdAt: Date
}
```

#### Database Schema (Submission Model):
```javascript
{
  assignment: AssignmentId,
  student: UserId,
  content: String,
  attachments: [{ name: String, url: String }],
  submittedAt: Date,
  grade: Number,
  feedback: String,
  gradedBy: UserId,
  gradedAt: Date,
  status: Enum ['pending', 'graded', 'late']
}
```

---

### 7. **Reviews & Ratings**

#### Endpoints:
- [ ] `POST /api/courses/:courseId/reviews` - Add review
- [ ] `GET /api/courses/:courseId/reviews` - Get course reviews
- [ ] `PUT /api/reviews/:id` - Update review
- [ ] `DELETE /api/reviews/:id` - Delete review
- [ ] `POST /api/reviews/:id/helpful` - Mark review as helpful

#### Database Schema (Review Model):
```javascript
{
  course: CourseId (ref: Course),
  student: UserId (ref: User),
  rating: Number (1-5, required),
  comment: String,
  helpfulCount: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

---

### 8. **Notifications**

#### Endpoints:
- [ ] `GET /api/notifications` - Get user notifications
- [ ] `PUT /api/notifications/:id/read` - Mark as read
- [ ] `PUT /api/notifications/read-all` - Mark all as read
- [ ] `DELETE /api/notifications/:id` - Delete notification

#### Database Schema (Notification Model):
```javascript
{
  user: UserId (ref: User),
  type: Enum ['course_update', 'assignment_due', 'grade_posted', 'message', 'announcement'],
  title: String,
  message: String,
  link: String,
  isRead: Boolean (default: false),
  createdAt: Date
}
```

---

### 9. **Discussion Forums**

#### Endpoints:
- [ ] `POST /api/courses/:courseId/discussions` - Create discussion thread
- [ ] `GET /api/courses/:courseId/discussions` - Get course discussions
- [ ] `GET /api/discussions/:id` - Get discussion thread
- [ ] `POST /api/discussions/:id/replies` - Reply to thread
- [ ] `PUT /api/discussions/:id` - Update discussion
- [ ] `DELETE /api/discussions/:id` - Delete discussion
- [ ] `POST /api/discussions/:id/like` - Like discussion/reply

#### Database Schema (Discussion Model):
```javascript
{
  course: CourseId (ref: Course),
  author: UserId (ref: User),
  title: String (required),
  content: String (required),
  replies: [{
    author: UserId,
    content: String,
    createdAt: Date,
    likes: [UserId]
  }],
  likes: [UserId],
  isPinned: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

---

### 10. **Messaging System**

#### Endpoints:
- [ ] `POST /api/messages` - Send message
- [ ] `GET /api/messages/conversations` - Get user conversations
- [ ] `GET /api/messages/conversation/:userId` - Get conversation with user
- [ ] `PUT /api/messages/:id/read` - Mark message as read
- [ ] `DELETE /api/messages/:id` - Delete message

#### Database Schema (Message Model):
```javascript
{
  sender: UserId (ref: User),
  recipient: UserId (ref: User),
  subject: String,
  content: String (required),
  isRead: Boolean (default: false),
  createdAt: Date
}
```

---

### 11. **Announcements**

#### Endpoints:
- [ ] `POST /api/courses/:courseId/announcements` - Create announcement
- [ ] `GET /api/courses/:courseId/announcements` - Get course announcements
- [ ] `GET /api/announcements/:id` - Get announcement details
- [ ] `PUT /api/announcements/:id` - Update announcement
- [ ] `DELETE /api/announcements/:id` - Delete announcement

---

### 12. **Certificates**

#### Endpoints:
- [ ] `POST /api/certificates/generate` - Generate certificate
- [ ] `GET /api/certificates/:id` - Get certificate
- [ ] `GET /api/certificates/verify/:code` - Verify certificate authenticity
- [ ] `GET /api/users/:userId/certificates` - Get user certificates

#### Database Schema (Certificate Model):
```javascript
{
  student: UserId (ref: User),
  course: CourseId (ref: Course),
  certificateCode: String (unique),
  issuedAt: Date,
  pdfUrl: String,
  verificationUrl: String
}
```

---

### 13. **Analytics & Reports**

#### Endpoints:
- [ ] `GET /api/analytics/course/:courseId` - Course analytics
- [ ] `GET /api/analytics/instructor/:instructorId` - Instructor analytics
- [ ] `GET /api/analytics/student/:studentId` - Student analytics
- [ ] `GET /api/analytics/platform` - Platform-wide analytics (admin)

#### Analytics Data:
- Total enrollments
- Completion rates
- Average ratings
- Revenue (if paid courses)
- Active users
- Course popularity trends

---

### 14. **File Upload & Media Management**

#### Endpoints:
- [ ] `POST /api/upload/video` - Upload video
- [ ] `POST /api/upload/image` - Upload image
- [ ] `POST /api/upload/document` - Upload document
- [ ] `DELETE /api/upload/:fileId` - Delete uploaded file

#### Features:
- [ ] Multer configuration for file uploads
- [ ] File size validation
- [ ] File type validation (videos, images, PDFs, etc.)
- [ ] Integration with cloud storage (AWS S3, Cloudinary)
- [ ] Generate signed URLs for secure access
- [ ] Video transcoding (optional)
- [ ] Thumbnail generation for videos

---

### 15. **Payment Integration** (Optional)

#### Endpoints:
- [ ] `POST /api/payments/create-intent` - Create payment intent
- [ ] `POST /api/payments/webhook` - Handle payment webhooks
- [ ] `GET /api/payments/history` - Get payment history
- [ ] `POST /api/payments/refund` - Process refund (admin)

#### Features:
- [ ] Stripe/PayPal integration
- [ ] Course pricing management
- [ ] Discount codes/coupons
- [ ] Transaction history
- [ ] Invoice generation

---

### 16. **Admin Panel APIs**

#### Endpoints:
- [ ] `GET /api/admin/stats` - Get platform statistics
- [ ] `GET /api/admin/users` - Get all users with filters
- [ ] `PUT /api/admin/users/:id/role` - Update user role
- [ ] `PUT /api/admin/users/:id/status` - Activate/deactivate user
- [ ] `GET /api/admin/courses/pending` - Get courses pending approval
- [ ] `PUT /api/admin/courses/:id/approve` - Approve course
- [ ] `PUT /api/admin/courses/:id/reject` - Reject course
- [ ] `POST /api/admin/bulk-email` - Send bulk emails
- [ ] `GET /api/admin/reports` - Generate reports

---

### 17. **Search & Filtering**

#### Features:
- [ ] Full-text search on courses (title, description, tags)
- [ ] Filter by category, level, price, rating
- [ ] Sort by relevance, popularity, newest, price
- [ ] Pagination support
- [ ] Implement Elasticsearch (optional for advanced search)

---

### 18. **Email Service**

#### Features:
- [ ] Welcome email on registration
- [ ] Email verification email
- [ ] Password reset email
- [ ] Course enrollment confirmation
- [ ] Assignment deadline reminders
- [ ] Certificate issuance notification
- [ ] Announcement notifications
- [ ] Weekly digest emails

#### Setup:
- [ ] Configure Nodemailer with SMTP
- [ ] Use email templates (EJS, Handlebars)
- [ ] Queue emails with Bull/Redis (optional)

---

### 19. **Real-time Features** (Optional)

#### Using Socket.io:
- [ ] Real-time notifications
- [ ] Live chat support
- [ ] Live class streaming
- [ ] Collaborative whiteboard
- [ ] Real-time quiz participation

---

### 20. **Security Features**

#### Implementation:
- [ ] Helmet.js for security headers
- [ ] CORS configuration
- [ ] Rate limiting (express-rate-limit)
- [ ] SQL/NoSQL injection prevention
- [ ] XSS protection
- [ ] CSRF protection
- [ ] Input validation (express-validator)
- [ ] Sanitize user inputs
- [ ] Secure cookies (httpOnly, secure flags)
- [ ] API versioning

---

### 21. **Logging & Monitoring**

#### Features:
- [ ] Winston or Morgan for logging
- [ ] Error logging to file/cloud service
- [ ] API request logging
- [ ] Performance monitoring
- [ ] Health check endpoint: `GET /api/health`

---

### 22. **Testing**

#### Unit Testing (Jest/Mocha)
- [ ] **Model/Schema Tests**
  - User model validation
  - Course model methods
  - Enrollment model relationships
  - Virtual fields and methods
  
- [ ] **Utility Function Tests**
  - Token generation
  - Email formatting
  - Password validation
  - File upload helpers
  - Date/time utilities
  
- [ ] **Middleware Tests**
  - Authentication middleware
  - Authorization/permission checks
  - Error handling middleware
  - Validation middleware
  - Rate limiting

#### Integration Testing
- [ ] **Authentication Endpoints**
  - User registration flow
  - Login with valid/invalid credentials
  - Password reset flow
  - Email verification
  - Token refresh
  - Logout
  
- [ ] **Course CRUD Operations**
  - Create course (instructor)
  - Update course (authorization checks)
  - Delete course (admin only)
  - Get course list with filters
  - Enrollment operations
  
- [ ] **File Upload**
  - Video upload with size limits
  - Image upload
  - Document upload
  - File validation
  
- [ ] **Payment Flow**
  - Create payment intent
  - Handle webhooks
  - Process refunds
  
- [ ] **Complex Workflows**
  - Complete course enrollment to completion
  - Assignment submission and grading
  - Quiz attempt and scoring
  - Certificate generation

#### API Testing (Supertest)
- [ ] Test all endpoints with different roles
- [ ] Test pagination and filtering
- [ ] Test error responses
- [ ] Test rate limiting
- [ ] Test CORS headers

#### Database Testing
- [ ] Test database connections
- [ ] Test queries and aggregations
- [ ] Test transactions (if using)
- [ ] Test data integrity constraints

#### Security Testing
- [ ] SQL/NoSQL injection prevention
- [ ] XSS attack prevention
- [ ] CSRF protection
- [ ] Authentication bypass attempts
- [ ] Authorization checks for all protected routes

#### Load Testing (Artillery/K6)
- [ ] Endpoint performance under load
- [ ] Concurrent user simulations
- [ ] Database query performance
- [ ] Memory leak detection

---

#### Test Setup Files

**jest.config.js**
```javascript
module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/test/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js']
}
```

**src/test/setup.js**
```javascript
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongoServer

// Connect to in-memory database before tests
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()
  await mongoose.connect(mongoUri)
})

// Clear database between tests
afterEach(async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    await collections[key].deleteMany()
  }
})

// Disconnect after all tests
afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})
```

---

#### Example Test Files

**tests/auth.test.js**
```javascript
const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/User')

describe('Authentication Endpoints', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'Password123!',
          role: 'student'
        })
      
      expect(res.statusCode).toBe(201)
      expect(res.body).toHaveProperty('token')
      expect(res.body.user).toHaveProperty('email', 'test@example.com')
      
      const user = await User.findOne({ email: 'test@example.com' })
      expect(user).toBeTruthy()
      expect(user.password).not.toBe('Password123!') // Should be hashed
    })

    it('should not register user with existing email', async () => {
      await User.create({
        name: 'Existing User',
        email: 'existing@example.com',
        password: 'Password123!'
      })

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'New User',
          email: 'existing@example.com',
          password: 'Password123!'
        })
      
      expect(res.statusCode).toBe(400)
      expect(res.body).toHaveProperty('error')
    })

    it('should validate password strength', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: '123' // Weak password
        })
      
      expect(res.statusCode).toBe(400)
      expect(res.body.error).toMatch(/password/i)
    })
  })

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      const user = new User({
        name: 'Test User',
        email: 'test@example.com',
        password: 'Password123!',
        role: 'student'
      })
      await user.save()
    })

    it('should login with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'Password123!'
        })
      
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('token')
      expect(res.body.user).toHaveProperty('email', 'test@example.com')
    })

    it('should not login with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'WrongPassword'
        })
      
      expect(res.statusCode).toBe(401)
    })

    it('should not login with non-existent email', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'notfound@example.com',
          password: 'Password123!'
        })
      
      expect(res.statusCode).toBe(401)
    })
  })
})
```

**tests/courses.test.js**
```javascript
const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/User')
const Course = require('../src/models/Course')
const jwt = require('jsonwebtoken')

describe('Course Endpoints', () => {
  let instructorToken
  let studentToken
  let instructorId

  beforeEach(async () => {
    // Create instructor
    const instructor = await User.create({
      name: 'Instructor',
      email: 'instructor@example.com',
      password: 'Password123!',
      role: 'instructor'
    })
    instructorId = instructor._id
    instructorToken = jwt.sign({ id: instructor._id }, process.env.JWT_SECRET)

    // Create student
    const student = await User.create({
      name: 'Student',
      email: 'student@example.com',
      password: 'Password123!',
      role: 'student'
    })
    studentToken = jwt.sign({ id: student._id }, process.env.JWT_SECRET)
  })

  describe('POST /api/courses', () => {
    it('should allow instructor to create course', async () => {
      const res = await request(app)
        .post('/api/courses')
        .set('Authorization', `Bearer ${instructorToken}`)
        .send({
          title: 'Test Course',
          description: 'Test Description',
          category: 'Programming',
          level: 'beginner',
          price: 49.99
        })
      
      expect(res.statusCode).toBe(201)
      expect(res.body.course).toHaveProperty('title', 'Test Course')
      expect(res.body.course.instructor).toBe(instructorId.toString())
    })

    it('should not allow student to create course', async () => {
      const res = await request(app)
        .post('/api/courses')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          title: 'Test Course',
          description: 'Test Description',
          category: 'Programming'
        })
      
      expect(res.statusCode).toBe(403)
    })

    it('should require authentication', async () => {
      const res = await request(app)
        .post('/api/courses')
        .send({
          title: 'Test Course',
          description: 'Test Description'
        })
      
      expect(res.statusCode).toBe(401)
    })
  })

  describe('GET /api/courses', () => {
    beforeEach(async () => {
      await Course.create([
        {
          title: 'Course 1',
          description: 'Description 1',
          instructor: instructorId,
          category: 'Programming',
          level: 'beginner',
          status: 'published'
        },
        {
          title: 'Course 2',
          description: 'Description 2',
          instructor: instructorId,
          category: 'Design',
          level: 'intermediate',
          status: 'published'
        }
      ])
    })

    it('should get all published courses', async () => {
      const res = await request(app).get('/api/courses')
      
      expect(res.statusCode).toBe(200)
      expect(res.body.courses).toHaveLength(2)
    })

    it('should filter courses by category', async () => {
      const res = await request(app)
        .get('/api/courses')
        .query({ category: 'Programming' })
      
      expect(res.statusCode).toBe(200)
      expect(res.body.courses).toHaveLength(1)
      expect(res.body.courses[0].category).toBe('Programming')
    })

    it('should paginate results', async () => {
      const res = await request(app)
        .get('/api/courses')
        .query({ page: 1, limit: 1 })
      
      expect(res.statusCode).toBe(200)
      expect(res.body.courses).toHaveLength(1)
      expect(res.body).toHaveProperty('totalPages')
    })
  })

  describe('POST /api/courses/:id/enroll', () => {
    let courseId

    beforeEach(async () => {
      const course = await Course.create({
        title: 'Test Course',
        description: 'Description',
        instructor: instructorId,
        category: 'Programming',
        status: 'published'
      })
      courseId = course._id
    })

    it('should allow student to enroll in course', async () => {
      const res = await request(app)
        .post(`/api/courses/${courseId}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`)
      
      expect(res.statusCode).toBe(200)
      
      const course = await Course.findById(courseId)
      expect(course.enrolledStudents).toHaveLength(1)
    })

    it('should not allow duplicate enrollment', async () => {
      await request(app)
        .post(`/api/courses/${courseId}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`)
      
      const res = await request(app)
        .post(`/api/courses/${courseId}/enroll`)
        .set('Authorization', `Bearer ${studentToken}`)
      
      expect(res.statusCode).toBe(400)
    })
  })
})
```

**tests/middleware/auth.test.js**
```javascript
const jwt = require('jsonwebtoken')
const { authenticate, authorize } = require('../../src/middleware/auth')
const User = require('../../src/models/User')

describe('Auth Middleware', () => {
  describe('authenticate', () => {
    it('should authenticate valid token', async () => {
      const user = await User.create({
        name: 'Test User',
        email: 'test@example.com',
        password: 'Password123!',
        role: 'student'
      })

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

      const req = {
        headers: { authorization: `Bearer ${token}` }
      }
      const res = {}
      const next = jest.fn()

      await authenticate(req, res, next)

      expect(req.user).toBeDefined()
      expect(req.user.email).toBe('test@example.com')
      expect(next).toHaveBeenCalled()
    })

    it('should reject invalid token', async () => {
      const req = {
        headers: { authorization: 'Bearer invalid_token' }
      }
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }
      const next = jest.fn()

      await authenticate(req, res, next)

      expect(res.status).toHaveBeenCalledWith(401)
      expect(next).not.toHaveBeenCalled()
    })
  })

  describe('authorize', () => {
    it('should allow authorized role', () => {
      const req = { user: { role: 'admin' } }
      const res = {}
      const next = jest.fn()

      const middleware = authorize('admin', 'instructor')
      middleware(req, res, next)

      expect(next).toHaveBeenCalled()
    })

    it('should reject unauthorized role', () => {
      const req = { user: { role: 'student' } }
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }
      const next = jest.fn()

      const middleware = authorize('admin', 'instructor')
      middleware(req, res, next)

      expect(res.status).toHaveBeenCalledWith(403)
      expect(next).not.toHaveBeenCalled()
    })
  })
})
```

**tests/utils/validators.test.js**
```javascript
const { validateEmail, validatePassword } = require('../../src/utils/validators')

describe('Validators', () => {
  describe('validateEmail', () => {
    it('should validate correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('should reject invalid email', () => {
      expect(validateEmail('invalid')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
    })
  })

  describe('validatePassword', () => {
    it('should validate strong password', () => {
      expect(validatePassword('Password123!')).toBe(true)
    })

    it('should reject weak password', () => {
      expect(validatePassword('123')).toBe(false) // Too short
      expect(validatePassword('password')).toBe(false) // No number
      expect(validatePassword('12345678')).toBe(false) // No letter
    })
  })
})
```

**tests/load/course-load.yml (Artillery)**
```yaml
config:
  target: "http://localhost:5000"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Sustained load"
    - duration: 60
      arrivalRate: 100
      name: "Spike test"
  defaults:
    headers:
      Content-Type: "application/json"

scenarios:
  - name: "Browse and enroll in course"
    flow:
      - get:
          url: "/api/courses"
      - get:
          url: "/api/courses/{{ $randomString() }}"
      - think: 2
      - post:
          url: "/api/auth/login"
          json:
            email: "test@example.com"
            password: "Password123!"
          capture:
            - json: "$.token"
              as: "token"
      - post:
          url: "/api/courses/{{ $randomString() }}/enroll"
          headers:
            Authorization: "Bearer {{ token }}"
```

---

#### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test tests/auth.test.js

# Run integration tests only
npm run test:integration

# Run load tests
npm run test:load
```

#### package.json scripts
```json
{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage --coverageDirectory=coverage",
    "test:integration": "jest --testPathPattern=tests/integration",
    "test:unit": "jest --testPathPattern=tests/unit",
    "test:load": "artillery run tests/load/course-load.yml"
  }
}
```

#### Testing Dependencies
```bash
# Install testing libraries
npm install -D jest supertest mongodb-memory-server
npm install -D @types/jest @types/supertest

# For load testing
npm install -D artillery

# For mocking
npm install -D sinon nock
```

#### CI/CD Integration (.github/workflows/test.yml)
```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      mongodb:
        image: mongo:latest
        ports:
          - 27017:27017
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
        env:
          NODE_ENV: test
          MONGODB_URI: mongodb://localhost:27017/lms_test
          JWT_SECRET: test_secret
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

---

### 23. **Documentation**

#### Required:
- [ ] API documentation (Swagger/Postman)
- [ ] Setup instructions
- [ ] Environment variables documentation
- [ ] Database schema documentation
- [ ] Deployment guide

---

## 📁 Recommended Folder Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   ├── cloudinary.js
│   │   └── email.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Enrollment.js
│   │   ├── Assignment.js
│   │   └── ...
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── userController.js
│   │   └── ...
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── course.routes.js
│   │   ├── user.routes.js
│   │   └── ...
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── upload.middleware.js
│   │   └── validator.middleware.js
│   ├── services/
│   │   ├── emailService.js
│   │   ├── uploadService.js
│   │   ├── certificateService.js
│   │   └── ...
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── sendEmail.js
│   │   └── helpers.js
│   └── app.js
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd lms-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Start production server
npm start
```

---

## 📦 Required Dependencies

```bash
# Core dependencies
npm install express mongoose dotenv cors

# Authentication
npm install jsonwebtoken bcryptjs

# Validation
npm install express-validator

# File upload
npm install multer cloudinary

# Email
npm install nodemailer

# Security
npm install helmet express-rate-limit express-mongo-sanitize

# Utilities
npm install uuid slugify

# Development dependencies
npm install -D nodemon jest supertest
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/lms
# OR for PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/lms

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_secret

# Email (using Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Stripe (optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## 🚀 API Versioning

All endpoints should be versioned: `/api/v1/...`

---

## 📊 Database Choice

**MongoDB (Recommended for LMS):**
- Flexible schema for course content
- Easy to scale
- Good for nested documents (curriculum structure)

**PostgreSQL:**
- Better for complex relationships
- ACID compliance
- Better for financial transactions

---

## 🔄 Deployment Checklist

- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Set up cloud storage (AWS S3/Cloudinary)
- [ ] Configure email service
- [ ] Set up SSL certificate
- [ ] Configure CORS for production frontend URL
- [ ] Set up logging service
- [ ] Configure monitoring (PM2, New Relic, etc.)
- [ ] Set up backup strategy
- [ ] Deploy to hosting service (AWS, Heroku, DigitalOcean, etc.)

---

## 📝 Git Workflow

Same as frontend - feature branches, clear commits, PRs

---

## 📄 License
MIT License