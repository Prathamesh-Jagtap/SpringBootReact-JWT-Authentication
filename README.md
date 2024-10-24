# React.js and Spring Boot JWT Authentication Application

This is a full-stack application with a **React.js frontend** and **Spring Boot backend** that implements **JWT-based authentication**. The backend provides API endpoints for user registration, login, and profile retrieval, while the frontend allows users to sign up, sign in, and view their profile.

# Features

- User registration (sign up) and login (sign in)
- JWT token-based authentication and authorization
- Role-based access control (Admin, Moderator, User roles)
- Profile page showing user information
- BCrypt password encoding
- Responsive design using Bootstrap for the frontend

# Technologies Used

# Backend:
- Java
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- JPA 
- MySQL 

# Frontend:
- React.js
- React Router
- Axios
- Bootstrap

# Prerequisites

- Java 17 or higher
- Node.js 18 or higher
- MySQL (or any other relational database)
- Maven (for building the backend)
- npm or yarn (for managing frontend packages)

# Installation

# Backend (Spring Boot)

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Prathamesh-Jagtap/SpringBootReact-JWT-Authentication.git
   cd SpringBootReact-JWT-Authentication/backend
   ```

2. Create Database
   
   ```bash
   CREATE DATABASE your_database_name;
   USE your_database_name;
   INSERT INTO roles (NAME) VALUES ('ROLE_USER'), ('ROLE_ADMIN');
   ```
  
3. Build and Run the Project
    ```bash
   mvn clean insatll
   mvn spring-boot:run
   ```

# Frontend (React js)

```bash
  cd SpringBootReact-JWT-Authentication/frontend
  npm install
  npm run dev
```
