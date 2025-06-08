# ChatterBot

This project is a full-stack AI-powered chat application built using **React**, **Express**, **MongoDB**, and **Google Gemini AI**. It allows users to chat in real-time with an AI and supports features like image analysis and dynamic routing.

## Features

- Real-time AI chat streaming
- Image analysis using advanced AI models
- User authentication and protected routes
- Chat history tracking
- Efficient state management and API response optimization

## Technologies Used

- **Frontend:** React.js
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **AI:** Google Gemini AI for real-time chat and image analysis

## Installation

### Prerequisites

- Node.js (v14 or above)
- MongoDB installed locally or use MongoDB Atlas for cloud hosting

### Steps to Run the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KuNaL8103/ChatterBot.git
   cd ChatterBot

   ```

2. **Install dependencies for client:**

   ```bash
   cd client
   npm install --force

   ```

3. **Install dependencies for backend:**

   ```bash
   cd backend
   npm install --force

   ```

4. **Set up environment variables (client):**

   ```bash
   # Clerk Configuration for User Authentication
   VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>

   # ImageKit Configuration for Image Uploads
   VITE_IMAGE_KIT_ENDPOINT=<your_imagekit_endpoint>
   VITE_IMAGE_KIT_PUBLIC_KEY=<your_public_key>

   # Google Gemini AI API Configuration
   VITE_GEMINI_PUBLIC_KEY=<your_gemini_public_key>

   VITE_API_URL=<your_backend_url>

   ```

5. **Set up environment variables (backend):**

   ```bash
   # ImageKit Configuration
   IMAGE_KIT_ENDPOINT=<your_imagekit_endpoint>
   IMAGE_KIT_PUBLIC_KEY=<your_public_key>
   IMAGE_KIT_PRIVATE_KEY=<your_private_key>

   # MongoDB Configuration
   MONGO=<your_mongo_connection_string>

   # Clerk Configuration for User Authentication
   CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
   CLERK_SECRET_KEY=<your_clerk_secret_key>

   CLIENT_URL=<your_frontend_url>

   ```

6. **Start the backend server:**

   ```bash
   npm start

   ```

7. **Start the client server:**

   ```bash
   npm run dev

   ```

8. **Screenshots:**

   ![screenshot](client/public/Screenshot%20(1).png)

   ![screenshot](client/public/Screenshot%20(2).png)

   ![screenshot](client/public/Screenshot%20(3).png)
