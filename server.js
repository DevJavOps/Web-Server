const express = require('express');
const path = require('path');
const app = express();
const PORT = 3500;

app.use(express.json()); // For parsing JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public

// GET
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// POST
app.post('/submit', (req, res) => {
  res.json({ message: 'Form submitted!', data: req.body });
});

app.post('/login', (req, res) => {
  res.json({ message: 'Login successful!', user: req.body.username });
});

// PUT
app.put('/update-profile', (req, res) => {
  res.json({ message: 'Profile updated!', data: req.body });
});

app.put('/change-password', (req, res) => {
  res.json({ message: 'Password changed!' });
});

// DELETE
app.delete('/delete-account', (req, res) => {
  res.json({ message: 'Account deleted!' });
});

app.delete('/remove-item', (req, res) => {
  res.json({ message: 'Item removed!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});