// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb"); ///this is cool

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err){
		return console.log("unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

// 	db.collection("Todos").insertOne({
// 		text: "Something to do",
// 		completed: false
// 	}, (err, results) => {
// if (err) {
// 	return console.log('unable to insert todo', err)
// }
// console.log(JSON.stringify(results.ops, undefined, 2))
// 	})

db.collection("Users").insertOne({
	name: "gray",
	age: 33,
	location: "Greenpoint"
}, (err, results) => {
	if (err) {
		return console.log("unable to log", err);
	}
	console.log(JSON.stringify(results.ops[0]._id.timestamp))
})


// INsert new doc unto Users (name, age, location)
	db.close();
});
