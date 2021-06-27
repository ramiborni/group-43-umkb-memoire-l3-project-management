class User{
    username: string
    password:string
    firstname:string
    lastname:string
    email:string
    phoneNumber:string
    role:number
    module:number

    addUser( user:User ) : User
    removeUser(id:number) : Boolean
    updateInfo(user:User) : Boolean
    
    
}
export default User;