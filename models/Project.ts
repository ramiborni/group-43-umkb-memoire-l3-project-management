import Module from "./Module"
import Task from "./Task"
import User from "./User"

class Project {
    id: number
    name: string
    description: string
    objectives: Array<string>
    expectedStartDate: string
    expectedDeadLine: string
    tasks: Array<Task>
    module: Module
    

    
}
export default Project;