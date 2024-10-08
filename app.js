const express = require('express');
const app = express();

// Route handling
app.get('/', (req, res) => {
  try {
    const response = {
      message: 'My name is Sanchit Kakarla',
      timestamp: Date.now()
    };
    res.json(response);
  } catch (error) {
    next(error);  // Passes the error to the error-handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ error: 'Something went wrong!' }); // Send a 500 status response
});

// Server listening on port
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
