// var MongoClient = require('mongodb').MongoClient;
var { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server successfully');

    // deleteMany
    // db.collection('Todo').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todo').deleteOne({
    //     text: 'Eat lumch'
    // }).then((result) => {
    //     console.log(result)
    // });

    // findOneandDelete
    // db.collection('Todo').findOneAndDelete({ completed: false  }).then((result) => {
    //     console.log(result);
    // });

    var id = '5c6528bc1dad7c01dfbd9a0a';

    db.collection('Todo').findOneAndDelete({ _id: new ObjectID(id)}).then((result) => {
        console.log(result);
    });

    // db.close();
});