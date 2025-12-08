

#  School Management System – API Documentation

This README provides a complete overview of all API endpoints required to power the School Management System, including authentication, school setup, student/teacher management, attendance, payments, academic records, cloud storage, consultations, subscriptions, and dashboards.



##  **1. Authentication (Sign Up & Sign In)**

Endpoints for user registration, login, and password management.

### **Authentication Endpoints**


POST /auth/signup          # Create school admin or user account
POST /auth/login           # Login and return JWT token
POST /auth/logout          # Logout user
POST /auth/forgot-password # Send password reset email
POST /auth/reset-password  # Reset password using token


##  **2. School & Admin Setup**

Used for the *Manage Your School* system setup and admin dashboard.

### **School Endpoints**

POST /schools                # Register a new school
GET /schools/:id             # Get school information
PUT /schools/:id             # Update school settings
GET /schools/:id/dashboard   # Fetch dashboard stats for the school


## **3. Students & Teachers Management**

Endpoints to manage students and teachers, academic profiles, updates, and deletion.

### **Students**

POST /students       # Add new student
GET /students        # List all students
GET /students/:id    # Get a single student
PUT /students/:id    # Update student info
DELETE /students/:id # Remove student



###  **Teachers**


POST /teachers       # Add new teacher
GET /teachers        # List all teachers
GET /teachers/:id    # Get teacher details
PUT /teachers/:id    # Update teacher
DELETE /teachers/:id # Remove teacher


## 🏫 **4. Classes & Subjects**

Supports timetable, grading, and attendance functionalities.

### **Classes**


POST /classes
GET /classes
GET /classes/:id
PUT /classes/:id
DELETE /classes/:id

### **Subjects**

POST /subjects
GET /subjects
PUT /subjects/:id
DELETE /subjects/:id


## 📊 **5. Academic Records**

 *Academic Records* 


POST /records                 # Add student score
GET /records/student/:id      # Student's academic history
PUT /records/:recordId        # Update score
DELETE /records/:recordId     # Delete score/record


## 📋 **6. Attendance Management**

Used for automated or manual attendance marking on the system.

### **Student Attendance**

```
POST /attendance/mark                                  # Mark attendance
GET /attendance/student/:id                             # Student's attendance record
GET /attendance/class/:classId                          # Class attendance
PUT /attendance/:id                                     # Update attendance
GET /attendance/report?classId=XXX&date=YYY             # Attendance report
```

---

## **7. Fees & Payment Management**

Required for the *Fees Payment*.

POST /fees/create        # Create school fee template
GET /fees                # List all fees
POST /fees/pay           # Make payment
GET /fees/student/:id    # Student payment history
GET /fees/summary        # Total earnings
GET /fees/outstanding    # List of students who haven't paid


##  **8. Cloud Storage**

For uploading files like images, documents, ID cards, report cards, etc.

```
POST /upload      # Upload any file
GET /files/:id    # Retrieve file
DELETE /files/:id # Delete file


Supports integrations such as:

* Cloudinary
* AWS S3
* Google Cloud Storage
*Paymentateway







##  **9. Consultations & Contact Forms**


Used for customer support & booking consultations.

POST /consultations  # Submit consultation request
GET /consultations   # View all requests (admin)
POST /contact/send   # Contact form



##  **10. Free Trial Management**


For users clicking “Start Free Trial.”

POST /trial/request             # Request free trial
GET /trial/status/:userId       # Get trial status





##  **11. Choose a Plan (Pricing & Subscription)**

Controls subscription and billing functionality.

```
GET /plans                      # List pricing plans
POST /plans/subscribe           # Subscribe to a plan
GET /subscription/:schoolId     # Get current subscription


## **12.User Roles & Permissions**

Used for Admin, Teacher, Accountant, Parent, etc.

```
GET /roles                     # List roles
POST /roles/assign             # Assign a role to a user
GET /permissions/:roleId       # Permissions for a specific role
```

---

## 🧾 **13. Reporting / Dashboard Analytics**

Powers analytics on the admin dashboard.

```
GET /dashboard/stats              # General stats
GET /dashboard/attendance-summary # Attendance analytics
GET /dashboard/payment-summary    # Payment analytics
GET /dashboard/student-performance# Performance analytics
```

---

#  **SUMMARY: UI Sections Covered**

✔ Sign Up & Sign In
✔ Automated Attendance
✔ Fees Payment
✔ Academic Records
✔ Consultation Booking
✔ Contact Us
✔ Pricing & Plans
✔ Subscription Management
✔ Student Management
✔ Teacher Management
✔ Class Management
✔ Cloud Storage
✔ Free Trial
✔ Dashboard Analytics


