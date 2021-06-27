import Task from "./Task"
import User from "./User"

class Project {
    id: number
    name: string
    description: string
    goal: string
    objectives: Array<string>
    strategicAlignment: string
    stakeholders: Array<string>
    risks: Array<string>
    expectedStartDate: string
    expectedDeadLine: string
    responsible: User
    tasks: Array<Task>

    addProject(project:Project):Project
    updateProject(project:Project):Boolean
    addTask(task:Task): Boolean
    
}
export default Project;