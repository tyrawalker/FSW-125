//required scripting
const express = require('express'); 
const bountyRouter = express.Router(); 
const {v4:uuidv4} = require('uuid')

//fake data
let bounties = [
    {firstName:'Darth', lastName:'Bane', living:true, bountyAmount:500, type:'sith', _id:uuidv4()},
    {firstName:'Darth', lastName:'Plaguis', living:true, bountyAmount:600, type:'sith', _id:uuidv4()},
    {firstName:'Cal', lastName:'Krestis', living:true, bountyAmount:100, type:'jedi', _id:uuidv4()},
    {firstName:'Saw', lastName:'Gerrera', living:true, bountyAmount:200, type:'jedi', _id:uuidv4()},
    {firstName:'Darth', lastName:'Mal', living:true, bountyAmount:500, type:'sith', _id:uuidv4()},
    {firstName:'Darth', lastName:'Vader', living:true, bountyAmount:1100, type:'sith', _id:uuidv4()},
    {firstName:'Darth', lastName:'Tyranus', living:true, bountyAmount:500, type:'sith', _id:uuidv4()},
    {firstName:'Obi-Wan', lastName:'Kenobi', living:true, bountyAmount:5000, type:'jedi', _id:uuidv4()},
];

//routes
bountyRouter.get('/', (req, res) =>{
    res.send(bounties)
});

bountyRouter.post('/', (req, res)=> {
    const newItem = req.body; 
    newItem._id= uuidv4(); 
    bounties.push(newItem);

    console.log(bounties)
    res.send(`Successfully add ${newItem} to the Bounty List`);
});

//export
module.exports= bountyRouter;