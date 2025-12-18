# 🎓 EduHive – School Management System (Backend API)

EduHive is a **School Management SaaS MVP** designed to help schools efficiently manage **attendance, fees, academic records, communication, and administration** from a centralized digital platform.

This backend API powers the EduHive platform, providing secure, scalable, and role-based services for **administrators, teachers, students, and parents**.

---

## 🚀 Live API
**Base URL:**  
https://eduhive-server-99ad.onrender.com/api

##  Problem Statement

### Parents
Parents face significant challenges monitoring their children’s education due to:
- Poor communication from schools
- No real-time visibility into attendance and academic performance
- Delayed or unclear fee payment confirmations

### Students
Students struggle to access accurate school information because:
- Records are fragmented across WhatsApp messages, paper registers, and announcements
- Attendance, results, and fee records are not centralized
- Delays and misinformation are common

### Teachers
Teachers are burdened by:
- Manual, paper-based record keeping
- Repetitive administrative tasks
- Lack of efficient communication and reporting tools

### School Administrators
Administrators face inefficiencies due to:
- Fragmented systems and manual workflows
- Poor transparency across departments
- Difficulty managing large student populations at scale

---

## 💡 Solution

EduHive provides a **centralized, cloud-based School Management System** that enables:

- Automated attendance tracking
- Transparent fee management
- Academic performance reporting
- Role-based access control
- Secure cloud storage
- Subscription-based SaaS scalability

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Cloud Storage:** Cloudinary / AWS S3 (pluggable)
- **Deployment:** Render
- **Environment Config:** Environment Variables

---

## 🔐 Authentication & Security

- JWT-based authentication
- Role-based authorization (Admin, Teacher, Accountant, Parent)
- Secure password hashing
- Protected routes with middleware

---

## 📘 API Documentation

### 🔑 1. Authentication (Sign Up & Sign In)

Endpoints for user registration, login, and password management.

**Base Path:** `/auth`

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/auth/signup` | Create school admin or user account |
| POST | `/auth/login` | Login and return JWT |
| POST | `/auth/logout` | Logout user |
| POST | `/auth/forgot-password` | Send password reset email |
| POST | `/auth/reset-password` | Reset password using token |

---

### 🏫 2. School & Admin Setup

Used for school onboarding and admin dashboard.

**Base Path:** `/schools`

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/schools` | Register a new school |
| GET | `/schools/:id` | Get school information |
| PUT | `/schools/:id` | Update school settings |
| GET | `/schools/:id/dashboard` | School dashboard analytics |

---

### 👨‍🎓 3. Students & Teachers Management

#### Students (`/students`)
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/students` | Add new student |
| GET | `/students` | List all students |
| GET | `/students/:id` | Get single student |
| PUT | `/students/:id` | Update student info |
| DELETE | `/students/:id` | Remove student |

#### Teachers (`/teachers`)
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/teachers` | Add new teacher |
| GET | `/teachers` | List all teachers |
| GET | `/teachers/:id` | Get teacher details |
| PUT | `/teachers/:id` | Update teacher |
| DELETE | `/teachers/:id` | Remove teacher |

---

### 🏫 4. Classes & Subjects

#### Classes (`/classes`)
- POST `/classes`
- GET `/classes`
- GET `/classes/:id`
- PUT `/classes/:id`
- DELETE `/classes/:id`

#### Subjects (`/subjects`)
- POST `/subjects`
- GET `/subjects`
- PUT `/subjects/:id`
- DELETE `/subjects/:id`

---

### 📊 5. Academic Records

**Base Path:** `/records`

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/records` | Add student score |
| GET | `/records/student/:id` | Student academic history |
| PUT | `/records/:recordId` | Update record |
| DELETE | `/records/:recordId` | Delete record |

---

### 📋 6. Attendance Management

**Base Path:** `/attendance`

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/attendance/mark` | Mark attendance |
| GET | `/attendance/student/:id` | Student attendance |
| GET | `/attendance/class/:classId` | Class attendance |
| PUT | `/attendance/:id` | Update attendance |
| GET | `/attendance/report` | Attendance report |

---

### 💰 7. Fees & Payment Management

**Base Path:** `/fees`

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/fees/create` | Create fee template |
| GET | `/fees` | List all fees |
| POST | `/fees/pay` | Make payment |
| GET | `/fees/student/:id` | Student payment history |
| GET | `/fees/summary` | Total earnings |
| GET | `/fees/outstanding` | Unpaid students |

---

### ☁️ 8. Cloud Storage

**Base Path:** `/upload`

- POST `/upload` – Upload files
- GET `/files/:id` – Retrieve file
- DELETE `/files/:id` – Delete file

Supported:
- Cloudinary
- AWS S3
- Google Cloud Storage

---

### 📞 9. Consultations & Contact

**Base Path:** `/consultations`

- POST `/consultations` – Submit request
- GET `/consultations` – View requests (Admin)
- POST `/contact/send` – Contact form

---

### 🆓 10. Free Trial Management

**Base Path:** `/trial`

- POST `/trial/request`
- GET `/trial/status/:userId`

---

### 💳 11. Plans & Subscriptions

**Base Path:** `/plans`

- GET `/plans`
- POST `/plans/subscribe`
- GET `/subscription/:schoolId`

---

### 👥 12. Roles & Permissions

**Base Path:** `/roles`

- GET `/roles`
- POST `/roles/assign`
- GET `/permissions/:roleId`

---

### 📈 13. Dashboard & Analytics

**Base Path:** `/dashboard`

- GET `/dashboard/stats`
- GET `/dashboard/attendance-summary`
- GET `/dashboard/payment-summary`
- GET `/dashboard/student-performance`

---

## 🔐 Environment Variables

```env
PORT=10000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
NODE_ENV=production
