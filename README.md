# ERP Nexus

A simple ERP Management System built with the MERN stack.

## Features

- User authentication with JWT
- Role-based access
- Dashboard with business metrics
- Product management
- Customer and supplier management
- Sales and purchase orders
- Goods Receipt Note (GRN)
- Invoice generation
- Search, filtering, and pagination
- Responsive user interface

## Tech Stack

- **Frontend:** React, Vite, Material UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Charts:** Recharts

## Project Structure

```text
erp-nexus/
├── client/   # React frontend
└── server/   # Express backend
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhishekkjaiml/ERP-NEXUS.git
cd erp-nexus
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=example_port_no
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd client
npm install
```

Create a `.env` file in the `client` folder:

```env
VITE_API_URL=http://localhost:port_no/api
```

Start the frontend:

```bash
npm run dev
```

## Environment Variables

Keep your secrets in `.env` files. Do not commit these files to Git.

## Status

🚧 This project is currently under development.
