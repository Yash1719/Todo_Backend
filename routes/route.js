import  express  from "express";
import { addTodo,getAllTodo,updateTodo,deleteTodo,toggleTodoDone } from "../controller/todo-controller.js";



const route=express.Router();
route.post('/todos',addTodo);
route.get('/todos',getAllTodo);
route.put('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);
route.put('/updatetodos/:id',updateTodo);




export default route;
