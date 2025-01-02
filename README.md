# Job Portal Backend

This repository contains the backend services for a job portal application, built using Node.js, Express.js, and MongoDB. It provides APIs for job seekers and employers to manage job listings, user profiles, and application processes.

---

## 📚 Table of Contents
- [About](#about)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About
The backend of the job portal serves as the core application logic and data management layer. It facilitates secure user authentication, job listing management, and CRUD operations for users and jobs.

---

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Job Listings**: Create, read, update, and delete job postings.
- **User Profiles**: Manage user data for job seekers and employers.
- **Search and Filter**: Endpoints for job seekers to search and filter jobs.
- **Error Handling**: Robust error handling and informative response messages.

---

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- Git

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/jobportal-backend.git
   cd jobportal-backend
   ```

2. **Install Dependencies**:
   ```bash
   # Install core dependencies
   npm install express mongoose dotenv jsonwebtoken bcrypt body-parser

   # Install development and testing dependencies
   npm install --save-dev nodemon mocha chai supertest sinon
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:5000`.

5. **Run Tests** (if applicable):
   ```bash
   npm test
   ```

---

## API Endpoints

## API Endpoints

### User Routes
- **GET** /api/user/getAll: get All user.
- **GET** /api/user/login: Login for existing users.
-  **GET** /api/user/register: REgister new users.

### Job Routes
- **GET** /api/job/save: save job listings.
- **GET** /api/job/create: Create a new job listing.
- 

---

## Technologies Used
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Mocha, Chai, Supertest

---

## Testing
To ensure the backend works as expected:
1. Write test cases in the `test/` directory.
2. Run tests with:
   ```bash
   npm test
   ```
3. View the test report to ensure all functionality works as expected.

---

## Contributing
We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---


---

## Contact
- **Name**: K.Ajitha
- **Email**: ajiyogak2004@gmail.com
- **GitHub**: [ajitha2813](https://github.com/ajitha2813)

---

