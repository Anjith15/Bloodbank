const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json()); // Handles JSON request bodies

// Import API routes
const userApp = require("./APIs/userApi");
app.use("/user-api", userApp);

// Port config
const port = process.env.PORT || 4000;

// DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    app.listen(port, () =>
      console.log(`🚀 Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });
