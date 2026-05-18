require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const translationRoutes = require('./routes/translationRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', translationRoutes);

app.use(
    '/zips',
    express.static(path.join(__dirname, 'zips'))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});