const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files (e.g., CSS, JS, images) from the 'public' folder
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// Import routes
const homeRoute = require('./routes/home');
const aboutMeRoute = require('./routes/aboutMe');
const formationsRoute = require('./routes/formations');
const experiencesRoute = require('./routes/experiences');
const projectsRoute = require('./routes/projects');


// Use routes
app.use('/', homeRoute);
app.use('/aboutMe', aboutMeRoute);
app.use('/formations', formationsRoute);
app.use('/experiences', experiencesRoute);
app.use('/projects', projectsRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server running`);
});

