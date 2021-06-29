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
    
    addProject(project:Project):Project
    updateProject(project:Project):Boolean
    addTask(task:Task): Boolean
    
}
export default Project;