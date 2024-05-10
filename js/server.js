const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0415',
    database: 'testing1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define an API endpoint to fetch itinerary data
app.get('/api/itinerary', (req, res) => {
  // Query to fetch itinerary data from the database
  const sql = 'SELECT * FROM itinerary';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching itinerary data:', err);
      res.status(500).json({ error: 'Error fetching itinerary data' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
