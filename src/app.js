const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files (e.g., CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoute = require('./routes/home');

// Use routes
app.use('/', homeRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

