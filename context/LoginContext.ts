import {createContext} from 'react';

class LoginForm{
    username:string="";
    password:string="";

    constructor(username:string,password:string){
        this.username=username;
        this.password=password;
    }
}

const LoginContext = createContext(new LoginForm("",""))


export default LoginContext;