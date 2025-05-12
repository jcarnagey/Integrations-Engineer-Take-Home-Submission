# Project Name

> Integrations-Engineer-Take-Home-Submission

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

---

## About

A simple MERN (MongoDB, Express, React.js, Node.js) stack application with CRUD (Create, Read, Update, Delete) functionality, utilizing JWT (JSON Web Token) auth login/signup.

## Features

- ✅ JWT login/signup
- ✅ User data CRUD functionality
- 🚧 Feature 3 (in progress)

## Installation

```bash
# Clone the repo
git clone https://github.com/jcarnagey/Integrations-Engineer-Take-Home-Submission.git

# Navigate to project directory
cd Integrations-Engineer-Take-Home-Submission

split terminal

cd server #localhost:3000
cd client #localhost:5173

# Install dependencies
npm install

#use below command to run server/client separately
npm run dev
```

## API Endpoints

POST   /api/auth/login       - Login user
GET    /api/users            - Get all users
GET    /api/users/:id        - Get single user
POST   /api/users            - Create new user
PUT    /api/users/:id        - Update user
DELETE /api/users/:id        - Delete user

## Technologies Used

## Backend
Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens)

Bcrypt

JsonWebToken

## Frontend
React

React-Bootstrap