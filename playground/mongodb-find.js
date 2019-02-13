// var MongoClient = require('mongodb').MongoClient;
var { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server successfully');

    // db.collection('Todo').find().count().then((count) => {
    //     console.log(`Todos count ${count}`)
    //     // console.log('Todo');
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Jem'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.close();
});