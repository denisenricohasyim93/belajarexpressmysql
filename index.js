//==========SETTING MYSQL=============//
var mysql = require('mysql')
var connection = mysql.createConnection({
    host:      'localhost',     // database host
    user:       'root',         // your database username
    password: 'supersecret',         // your database password
    port:       3306,         // default MySQL port
    database:       'hapiplant'         // your database name
});
var hasil = {};
connection.connect()
connection.query('select * from user', function (err, rows, fields) {
    if (err) throw err
    // console.log('The solution is: ', rows)
    hasil = rows;
    // console.log(this.hasil);
})
connection.end()
//==========SETTING ENDPOINT=============//
var express = require('express')
var app = express()
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send(hasil)
})
app.listen(7000, () => console.log('Example app listening on port 7000!'))