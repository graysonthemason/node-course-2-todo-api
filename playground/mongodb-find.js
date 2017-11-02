// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb"); ///this is cool

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err){
		return console.log("unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");


	// db.collection("Todos").find({
	// 	_id: new ObjectID('59fb9b372ad8a321252d91e7')
	// }).toArray().then((docs) => {
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {
	// 	console.log("unable to fetch todos", err)
	// });
	// db.collection("Todos").find().count().then((count) => {
	// 	console.log(`Todos count : ${count}`);
	// }, (err) => {
	// 	console.log("unable to fetch todos", err)
	// });

	db.collection('Users').find({name: "gray"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	})

	db.close();
});
