import { atom } from "recoil"
import User from "./models/User"



const userState = atom({
    key: 'user',
    default: {}
})

const projectState = atom({
    key: 'projects',
    default: [
        {
            id: 0,
            "name": "Google Pixel 6 Marketing",
            "descrption": "lorem ipsum dolor sit am atom hello world",
            objectives: ["fix shit"],
            expectedStartDate: '2021-07-25',
            expectedDeadLine: '2021-11-25',
            tasks: [
                { state:1,}, { state:1,}, { state:1,}, { state:1,}, {}, {}, {}, {}, {}, {}, {}, {},
            ],
            module: {
                id: 2,
                moduleName: 'Marketing'
            }
        },
        {
            id: 1,
            "name": "Hello world Project",
            "descrption": "lorem ipsum dolor sit am atom hello world",
            objectives: ["fix shit"],
            expectedStartDate: '2021-02-28',
            expectedDeadLine: '2021-10-25',
            tasks: [
                {
                    state:1,
                }, { state:1,}, { state:1,}, { state:1,}, { state:1,}, {}, {}, {}, {}, {},
            ],
            module: {
                id: 1,
                moduleName: 'Information Technologies'
            }
        },
        {
            id: 2,
            "name": "Windows 11",
            "descrption": "lorem ipsum dolor sit am atom hello world",
            objectives: ["fix shit"],
            expectedStartDate: '2021-01-24',
            expectedDeadLine: '2021-10-28',
            tasks: [
                { state:1,}, { state:1,}, { state:1,}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
            ],
            module: {
                id: 1,
                moduleName: 'Information Technologies'
            }
        }
    ]
})


export { userState, projectState }
