const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const response = {
    message: 'My name is Sanchit Kakarla',
    timestamp: Date.now(),
    version: 'version-2'
  };
  res.json(response);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
