const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5c6d0ae168b35b803b83b4dc11';

// if (!ObjectId.isValid) {
//     console.log('ID not valid');
// }

// Todo.find({ _id: id }).then((todos) => console.log('Todos', todos));

// Todo.findOne({ _id: id }).then((todo) => console.log('Todo', todo));

// Todo.findById(id).then((todo) => {
//     if(!todo) return console.log('Id not found');
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5c65533eecbc48a80c8ae316').then((user) => {
    if (!user) return console.log('User not found');
    console.log('User by ID', user);
}).catch((e) => {
    if (e) console.log('Invalid user');
});