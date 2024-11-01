# MemoBuddy

MemoBuddy is a full-stack application designed to help users manage their memos efficiently. This project uses a Node.js backend with Express and MongoDB, and a frontend built with Next.js.

## Table of Contents

- [MemoBuddy](#memobuddy)
  - [Table of Contents](#table-of-contents)
  - [Our Team](#our-team)
  - [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)

## Our Team

- [Yi Wang](https://yiwang.run)
- [Komalpreet Singh](https://github.com/Komalpreet05)
- [Fares Islam](https://github.com/farez998)

## Getting Started

To get started with MemoBuddy, follow the instructions below to set up the backend and frontend.

## Backend Setup

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   NODE_ENV=development
   PORT=8888
   MONGODB_URI=mongodb://localhost:27017/MemoBuddy
   SESSION_SECRET=your-session-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GOOGLE_CALLBACK_URL=/api/auth/google/callback
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_AUTH_TYPE=OAuth2
   SMTP_AUTH_USER=your-email@gmail.com
   SMTP_REFRESH_TOKEN=your-refresh-token
   EMAIL_FROM_NAME=MemoBuddy
   EMAIL_FROM_ADDRESS=memobuddy2024@gmail.com
   ADMIN_EMAIL=memobuddy2024@gmail.com
   ```

4. Start the backend server:

   ```sh
   npm run start
   ```

5. open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

6. see the api page [http://localhost:8888/docs](http://localhost:8888/docs) to see the api endpoints.

![alt text](image.png)

## Frontend Setup

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the Application

To install both the backend and frontend, navigate to the root directory and use the following command:

```sh
npm install
```

To run both the backend and frontend concurrently, navigate to the root directory and use the following command:

```sh
npm run start
```
