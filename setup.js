const fs = require('fs');
const path = require('path');

// Create .env files
const serverEnvContent = `PORT=3000
MONGO_URI=mongodb://localhost:27017/bloodbank
JWT_SECRET=your-jwt-secret-key
GMAIL_USER=23071A6915@vnrvjiet.in
GMAIL_APP_PASSWORD=ttju nezo tink apjt`;

const clientEnvContent = `VITE_API_URL=http://localhost:3000`;

// Write .env files
fs.writeFileSync(path.join(__dirname, 'server', '.env'), serverEnvContent);
console.log('✅ Server .env file created');

fs.writeFileSync(path.join(__dirname, 'client', '.env'), clientEnvContent);
console.log('✅ Client .env file created');

console.log('\nTo start the application:');
console.log('1. In one terminal: cd server && npm install && npm start');
console.log('2. In another terminal: cd client && npm install && npm run dev');

console.log('\nIMPORTANT: Make sure your MongoDB server is running');
console.log('The application will be available at http://localhost:5173'); 