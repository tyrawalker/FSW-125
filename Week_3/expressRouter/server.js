//required scripting
const express = require('express')
const app = express()
const PORT = 4000
const bountyRouter = require('./bountyRouter')
const {v4:uuidv4} = require('uuid')


//applcation middle ware
app.use(express.json())
// const bodyparser = ('body-parser')
// app.use(bodyparser.text())


//routes
app.use('/bounties', bountyRouter)

//get data
app.get('/bounties', (req, res) =>{
    res.send('hello')
})

//POST request
app.post('/bounties', (req, res) =>{
    const newItem = req.body; 
    newItem._id = uuidv4();
    bounties.push(newItem);

    console.log(bounties)

    res.send(`Successfully added ${newItem} to the Bounty List`);
})

//listen
app.listen(PORT, () => {
    console.log(`App successfully started on ${PORT}`)
})



