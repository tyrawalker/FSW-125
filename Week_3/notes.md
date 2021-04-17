middle ware in express

start with fake data to populate the server for a get request. 

use POSTMAN to test the server content.


app.post('/route', (req, res) => {
	res.send ("succesful request")
})

//test as you go so you dont have to deconstruct later. 


//Application middle ware.
app.use(express.json()) 

//to create a POST request start in POSTMAN
1. add the object in the same format as the original Server schema. 
2. req the body of that update in the server.js file

app.post('/', (req, res) =>{
	const newItem = req.body; 
	array.push (newItem);

	res.send("success message with ${newItem.item}");
})
