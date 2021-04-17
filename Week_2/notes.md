installing NPM packages

// navigate to npmjs.com and search for an updated version
----------------------
//required scripting 
//can require objects from other files

const express = require("express")
const app= express();
const PORT = 3000

//endpoints
app.get('/route' (req, res)=> {
	res.send("hello world")
})

//starts the app
app.listen ("PORT", () => {
console.log ("Server successfully launched on PORT 3000")
})
__________________________________________________________

Nodemon install

1. be in the root of the directory.
2. npm install -g nodemon
3. initiate the install by using nodemon (file name)

this will auto populate changes, but can change the data from js to JSON, so we will need an extension in the chrome browser. 

1. go to chrome store, install JSON Viewer. 
