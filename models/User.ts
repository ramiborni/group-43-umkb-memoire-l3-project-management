interface IUser{
    username:string;
    firstname: string;
    lastname: string;
    email : string;
}
class User implements IUser{
    username: string;
    firstname: string;
    lastname: string;
    email: string;

    constructor(username,firstname,lastname,email ){
           this.username = username;
           this.firstname=firstname;
           this.lastname=lastname;
           this.email=email;
    }

}


export default User;