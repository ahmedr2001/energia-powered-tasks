const express = require('express');
const app = express();
const request = require('request');

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("Listening");
})

app.get('/', (req, res) => {
    res.send("HI");
    console.log("HI");
})

app.get('/people', (req, res) => {
    var clientServerOptions = {
        uri: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET'
      }
      request(clientServerOptions, (err, response) => {
        res.send(`<pre>${response.body.toString()}</pre>`);
        return;
      });
})

app.get('/people/:id', (req, res) => {
    var id = req.params.id;
    var clientServerOptions = {
        uri: 'https://jsonplaceholder.typicode.com/users/' + id,
        method: 'GET'
      }
      request(clientServerOptions, (err, response) => {
        res.send(`<pre>${response.body.toString()}</pre>`);
        return;
      });
})

app.get('/calculate/:x/:y/:op', (req, res) => {    
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    var op = req.params.op;              
    switch (op)
    {
        case 'add':
            res.send(`${x + y}`);
            break;
        case 'subtract':
            res.send(`${x - y}`);
            break;
        case 'multiply':
            res.send(`${x * y}`);
            break;
        case 'divide':
            res.send(`${x / y}`);
            break;        
    }
})