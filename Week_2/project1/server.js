//required scripting
const express = require ('express')
const app = express ()
const PORT= 3000;

//data points
let characters = [
    {name:"Rick Sachez", gender:'male'}, 
    {name:"Morty Smith", gender:'male'}, 
    {name:"Summer Smith", gender:'female'}, 
    {name:"Beth Smith", gender:'female'}, 
    {name:'Jerry Smith', gender:'male'}
]

let episodes = ["https://rickandmortyapi.com/api/episode/6",
"https://rickandmortyapi.com/api/episode/7",
"https://rickandmortyapi.com/api/episode/8",
"https://rickandmortyapi.com/api/episode/9",
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/12",
"https://rickandmortyapi.com/api/episode/13",
"https://rickandmortyapi.com/api/episode/14",
"https://rickandmortyapi.com/api/episode/15",
"https://rickandmortyapi.com/api/episode/16",
"https://rickandmortyapi.com/api/episode/18"]

let locations = [
    {name:'Earth (C-137)'}, 
    {name:'Abadango'}, 
    {name:'City of Ricks'}, 
    {name:'Worldenders lair'}, 
    {name:'Anatomy Park'}, 
    {name:'Interdemensional Cable'}
]

//route1
app.get('/characters', (req, res) => {
    res.send(characters)
})

//route2
app.get ('/episodes', (req, res) => {
    res.send(episodes)
})

//route3
app.get ('/locations', (req, res) => {
    res.send(locations)
})

//listen
app.listen(PORT, () => {
    console.log(`App started on port:${PORT}`)
});

//application middle ware
app.use(express.json())