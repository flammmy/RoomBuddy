# RoomBuddy

RoomBuddy is a MERN (MongoDB, Express.js, React, Node.js) stack-based application designed to help users find and manage room rentals. This project is organized into two main folders: `frontend` and `backend`, each responsible for the client-side and server-side operations respectively.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Search and filter rooms by location, price, and amenities
- Book and manage room reservations
- Messaging system between users and hosts
- Admin dashboard for managing users and listings

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS / Bootstrap
  - Axios for API requests

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database management
  - JSON Web Token (JWT) for authentication

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- MongoDB

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the necessary environment variables (if any).

4. Start the development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following environment variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

## Usage

1. Start the backend server as described in the [Backend Setup](#backend-setup) section.
2. Start the frontend server as described in the [Frontend Setup](#frontend-setup) section.
3. Open your browser and navigate to `http://localhost:3000` to start using RoomBuddy.

## Project Structure

```plaintext
RoomBuddy/
│
├── frontend/           # React frontend code
│   ├── public/         # Public assets
│   ├── src/            # React components and pages
│   └── package.json    # Frontend dependencies and scripts
│
├── backend/            # Node.js and Express backend code
│   ├── config/         # Configuration files (e.g., database connection)
│   ├── controllers/    # API controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   └── package.json    # Backend dependencies and scripts
│
└── README.md           # Project documentation
