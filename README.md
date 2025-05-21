# LifeDrop Blood Bank Management System

A full-stack web application for blood donation management.

## Features

- User registration and authentication
- Find blood donors by blood group and location
- Request blood for emergencies
- Email notifications for blood requests
- Donation history tracking
- Appointment scheduling

## Tech Stack

### Frontend
- React with Context API for state management
- React Router for navigation
- Bootstrap for responsive UI
- React Icons
- Date-fns for date formatting
- Axios for API requests
- React Toastify for notifications

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT authentication
- Nodemailer for email notifications

## Setup & Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)
- Gmail account with App Password for email notifications

### Setup Steps

1. Clone the repository
   ```
   git clone https://github.com/your-username/lifedrop-blood-bank.git
   cd lifedrop-blood-bank
   ```

2. Run the setup script to create environment files
   ```
   node setup.js
   ```

3. Install dependencies and start the server
   ```
   cd server
   npm install
   npm start
   ```

4. In a new terminal, install dependencies and start the client
   ```
   cd client
   npm install
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Environment Variables

### Server (.env)
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/bloodbank
JWT_SECRET=your-jwt-secret-key
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

### Client (.env)
```
VITE_API_URL=http://localhost:3000
```

## API Endpoints

### Users
- `POST /user-api/user` - Register a new user
- `POST /user-api/login` - User login
- `GET /user-api/users` - Get all users
- `GET /user-api/users/:bloodGroup` - Get users by blood group
- `GET /user-api/profile` - Get current user profile
- `PUT /user-api/user` - Update user profile

### Blood Requests
- `POST /request-api/create` - Create a blood request
- `GET /request-api/all` - Get all blood requests
- `GET /request-api/byBloodGroup/:bloodGroup` - Get requests by blood group
- `GET /request-api/myRequests` - Get user's requests
- `PUT /request-api/updateStatus/:requestId` - Update request status

### Donations
- `GET /donation-api/history` - Get user's donation history
- `POST /donation-api/record` - Record a new donation
- `GET /donation-api/appointments` - Get user's upcoming appointments
- `POST /donation-api/appointments` - Schedule a new appointment
- `DELETE /donation-api/appointments/:id` - Cancel an appointment

## License

MIT License 