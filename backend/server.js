
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const OLLAMA_API = 'http://localhost:11434/api/generate';

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
    const { message, model } = req.body;

    
    if (!message) {
        return res.status(400).json({ error: 'Message required' });
    }
    
    try {
        const response = await axios.post(OLLAMA_API, {
            model: model || 'codellama',
            prompt: message,
            stream: false
        });
        res.json({ reply: response.data.response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
// Server listens on port 5000
