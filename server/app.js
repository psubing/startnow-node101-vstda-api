const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

// add your code here
var data = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

var generic = [
    {
      status: 'ok',
    },
];

app.get('/', (req, res) => {
    res.send(generic); 
});

app.get('/api/TodoItems', (req, res, next) => {
    res.send(data);
    next ();
});

app.use(bodyParser.json());

app.post('/api/TodoItems', (req, res, next) => {
    res.status(201).json(req.body);
    next ();
});

app.delete('/api/TodoItems/:todoItemId', (req, res, next) => {
    res.send(data[req.params.todoItemId]);
    next ();
})

app.get('/api/TodoItems/:todoItemId', (req, res, next) => {
    res.send(data[req.params.todoItemId]);
    next ();
});

module.exports = app;
