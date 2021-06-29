import {usersDB} from '../database'

class User {
    username: string
    password: string
    firstname: string
    lastname: string
    email: string
    phoneNumber: string
    role: number
    module: number

    addUser(user: User): User{
        return this;
    }
    removeUser(id: number): Boolean{
        return true
    }
    updateInfo(user: User): Boolean{
        return true
    }

    static login(username: String, password: String){
       const db =  usersDB
       console.log(db)
       const user  =  db.find( u => u.username === username )
       return user;
    }
    logout(): void{

    }


    constructor(username: string, password: string, firstname: string, lastname: string, email: string, phoneNumber: string,
        role: number, Module: number) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
        this.module = Module;
    }



}
export default User;
