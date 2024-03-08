import Todo from "../model/Todo.js";

const addTodo = async(request,response) => {

    try {
        const newTodo=await Todo.create({
            data:request.body.data,
            createdAt:Date().now
    })
        await newTodo.save();
        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

const getAllTodo = async(request,response) =>{
   
    try {
        const todos=await Todo.find({}).sort({'createdAt':-1});
        return response.status(200).json(todos);
        
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

const toggleTodoDone=async (request,response)=>{
    try {
        const todoref=await Todo.findById(request.params.id);
        const todo=await Todo.findOneAndUpdate(
            {_id:request.params.id},
            { done:!todoref.done}
        )
        return response.status(200).json({msg:" gawwd"});

    } catch (error) {
        return response.status(500).json(error.message);
    }
}

const updateTodo = async (request,response)=>{
    console.log("Hello");
    try {
        await Todo.findByIdAndUpdate(
            request.params.id,
            {$set:{data:request.body.data}}
        )
        const todo=await Todo.findById(request.params.id);
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
const deleteTodo=async (request,response)=>{
    try{
        const todo=await Todo.findByIdAndDelete(request.params.id);
        return response.status(200).json({
            msg:"Deleted successfully"
        });
    }
    catch(error)
    {
        return response.status(500).json(error.message);
    }
}
export {addTodo,getAllTodo,toggleTodoDone,updateTodo,deleteTodo};