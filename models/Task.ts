import User from "./User";

class Task{
    id:string
    title:string
    description:string
    state : number
    
    updateTask(t:Task) : Boolean
}

export default Task;