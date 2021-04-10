const express = require('express');
const todoRouter = express.Router();
const {v4:uuidv4} = require('uuid')

//fake data 
let todos = [
    {name:'Dishes', description:'empty dishwasher', imageUrl:'https://images.app.goo.gl/S6oGYYdimrHRf2CDA', completed:false, _id:uuidv4()},
    {name:'Laundry', description:'wash linens', imageUrl:'https://images.app.goo.gl/FyeQM4s3R2e6mPVA6', completed:true, _id:uuidv4()},
    {name:'Groceries', description:'get milk and eggs', imageUrl:'https://images.app.goo.gl/GUvYmZ1zDbsC1NC39', completed:false, _id:uuidv4()},
    {name:'Garden', description:'weeding', imageUrl:'https://images.app.goo.gl/ARXfXnHW1R9bm8UX8', completed:false, _id:uuidv4()},
    {name:'vaccum', description:'bedrooms', imageUrl:'https://images.app.goo.gl/HZCMfbx1wQNu2XCr6', completed:true, _id:uuidv4()},
    {name:'Pet care', description:'bath the dogs', imageUrl:'https://images.app.goo.gl/ym9QcKkVekrFNAJg8', completed:false,_id:uuidv4()},
    {name:'trash', description:'take out trash', imageUrl:'https://images.app.goo.gl/kx5ERTyh3JkM28w29', completed:false,_id:uuidv4()},
    {name:'recycling', description:'crush cans', imageUrl:'https://images.app.goo.gl/n7NazQqDySjyPgkV8', completed:false,_id:uuidv4()},
    {name:'mop', description:'mop floors', imageUrl:'https://images.app.goo.gl/fz8bf13yBCoNZzFm9', completed:false,_id:uuidv4()},
]

//routes
//get all
todoRouter.get('/', (req, res) => {
    res.send(todos)
})

//get one
todoRouter.get('/:todoId', (req, res) =>{
    const todoId = req.params.todoId; 
    const singularTodo = todos.find(todo => todo._id === todoId)

    res.send(singularTodo);
});

//post
todoRouter.post('/', (req, res) =>{
    const newItem = req.body; 
    newItem._id- uuidv4(); 
    todos.push(newItem)

    console.log(todos)
    res.send(`Successfully added a todo to your todo list`)
} )

//put
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId; 
    const todoIndex = todos.findIndex(todo => todo._id === todoId); 
    Object.assign(todos[todoIndex], req.body);

    res.send('Todo item successfully updated');
})
    
//delete
todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId; 
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    todos.splice(todoIndex, 1);

    res.send('Todo successfully deleted from Todo List')
})

module.exports = todoRouter;
