const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { name } = req.body;
  const newTask = { name, dateAdded: new Date() };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});