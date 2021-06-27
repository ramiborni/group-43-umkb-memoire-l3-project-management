import User from "./User";

class Task{
    id:string
    title:string
    description:string
    user:User
    state : number
    
    updateTask(t:Task) : Boolean
}

export default Task;