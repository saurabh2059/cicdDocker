const express = require('express');
const app = express();

// Root route (IMPORTANT to avoid "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Hello CI/CD with Docker 🚀');
});

// Extra route (for demo)
app.get('/api', (req, res) => {
    res.json({ message: "API is working" });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});