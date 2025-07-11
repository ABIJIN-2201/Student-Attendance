const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const attendance = [];
app.post('/submit-attendance', (req, res) => {
  const { student } = req.body;
  if (!student) {
    return res.status(400).json({ error: 'Student name is required' });
  }
  attendance.push(student);
  console.log(`Attendance recorded: ${student}`);
  res.json({ message: `Attendance recorded for ${student}` });
});

app.get('/attendance', (req, res) => {
  res.json({ attendance });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
