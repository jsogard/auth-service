const path = require('path');
const express = require('express');
const { ValidationError } = require('express-validation');
const routify = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" })
})

routify(app);

app.use((err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    return res.status(500).json(err)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})