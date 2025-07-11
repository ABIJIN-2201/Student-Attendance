const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Simple in-memory storage for attendance
const attendance = [];

// Endpoint to receive attendance data
app.post('/submit-attendance', (req, res) => {
  const { student } = req.body;
  if (!student) {
    return res.status(400).json({ error: 'Student name is required' });
  }
  attendance.push(student);
  console.log(`Attendance recorded: ${student}`);
  res.json({ message: `Attendance recorded for ${student}` });
});

// Endpoint to get all attendance records
app.get('/attendance', (req, res) => {
  res.json({ attendance });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
