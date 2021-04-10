//required scripting
const express = require('express')
const app = express()
const PORT = 3000
const todoRouter = require('./todoRouter')
const {v4:uuidv4} = require('uuid')

//application middleware
app.use(express.json()); 

//routes
app.use('/todos', todoRouter); 

//listen
app.listen(PORT, () =>{
    console.log(`Successfully started server at ${PORT}`)
});