const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ "users": ["user1", "user2", "user3"] });
})

const port = 3000;

app.listen(port, () => console.log('listening on http://localhost:' + port));