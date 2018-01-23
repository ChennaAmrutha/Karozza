export class User {
   
    userid : string;
    password : string;
    role : string;
    setUserId(userid){
        this.userid = userid;
        return this.userid;
    }
    setPassword(password){
        this.password = password;
    }
    setRole(role){
        this.role = role;
    }
    getUserId():string{
        return this.userid;
    }
    getRole() : string {
        return this.role;
    }

    getPassword():string{
        return this.password;
    }
}

