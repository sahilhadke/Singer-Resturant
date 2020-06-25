// Modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

// Routes
const userController = require('./app/controllers/user.controller');

// app.post('/createuser', userController.create);
    
app.get('/search/all', userController.findAll);
    
app.get('/search', userController.find);

// Connecting to the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to DB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Home
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to server"
    });
});

app.listen(3000, () => {
    console.log("server running on port 3000");
})