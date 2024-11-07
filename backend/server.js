const express = require("express");
const cors = require("cors");
const app = express();

// Allow all origins for development (can be restricted later)
app.use(cors()); // This allows all domains; you can specify which domains to allow

// Add routes
app.get("/data", (req, res) => {
  res.json({ message: "This is some data from the backend" });
});

// Run the server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
