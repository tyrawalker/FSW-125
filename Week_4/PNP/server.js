//required scripting
const express = require('express')
const app = express()
const PORT = 4000
const bountyRouter = require('./bountyRouter')
const {v4:uuidv4} = require('uuid')


//applcation middle ware
app.use(express.json())

//routes
app.use('/bounties', bountyRouter)

//listen
app.listen(PORT, () => {
    console.log(`App successfully started on ${PORT}`)
})



