// var MongoClient = require('mongodb').MongoClient;
var { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server successfully');

    // db.collection('Todo').findOneAndUpdate({
    //     _id: new ObjectID('5c652c381dad7c01dfbd9b27')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c638f7d6de09f1f70d89e27')
    }, {
        $set: {
            name: 'Andrew',
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});