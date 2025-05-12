const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Handle all routes for Angular HTML5 mode
app.get('*', function(req, res) {
  console.log(`Serving index.html for URL: ${req.url}`);
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open http://localhost:${port}/product/TEN-X500-42-BLK in your browser`);
}); 