const express = require('express');
const app = express();

// Define a route for GET request
app.get('/', (req, res) => {
  res.json({ message: 'GET request received' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
