# MERN Authentication System

A full-stack **User Authentication System** developed using the **MERN Stack**. This application allows users to register, log in, log out, and access protected pages after successful authentication.

## 🚀 Features

* User Signup
* User Login
* User Logout
* Protected Routes
* Form Validation
* MongoDB Database Integration
* REST API using Express.js
* Axios API Integration
* React Router for Navigation
* Responsive User Interface

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## 📂 Project Structure

```text
MERN-Authentication-System/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── models/
│   └── package.json
│
└── README.md
```

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/yogitajunjwadkar/authentication-system.git
```

### 2. Frontend Setup

Open the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

### 3. Backend Setup

Open a new terminal and go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

## 🗄️ Database

This project uses **MongoDB** to store user registration and authentication data.

Make sure MongoDB is running before starting the backend server.

## 🔄 Authentication Flow

1. User opens the Signup page.
2. User enters their details.
3. The frontend sends the data to the backend using Axios.
4. Express.js processes the request.
5. User data is stored in MongoDB.
6. User logs in using their email and password.
7. After successful login, the user can access protected pages.
8. User can logout from the application.





