const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.urlencoded({extended: false}));

app.use(express.json()) 

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/login', require(path.join(__dirname, 'routes', 'api', 'login.js')))

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)}); 