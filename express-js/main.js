const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const mysql = require('mysql');
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learn_js'
});

database.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
}
);

// Define the route for the root URL of the website
app.get('/api/v1/users', (req, res) => {
    console.log('Request received');
    database.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.json({
            success: true,
            message: 'User list',
            data: rows
        })
    });
});


// Set the port number
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});