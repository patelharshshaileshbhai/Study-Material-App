const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db');
const path = require('path');

const app = express();
const port = process.env.PORT||5000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'build' directory inside the 'client' directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle other routes by serving the 'index.html' file
app.get('*', (req, res) => {
  // Correct the path to 'index.html'
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/Medata'));
app.use('/api', require('./Routes/ClData'));

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the application:", error.message);
  });
