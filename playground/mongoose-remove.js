const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '5c6d46691c826984df9d9dcc'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5c6d46691c826984df9d9dcc').then((todo) => {
    console.log(todo);
});