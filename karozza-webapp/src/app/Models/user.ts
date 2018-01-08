export class User {
   
    userid : string;
    password : string;
    setUserId(userid){
        this.userid = userid;
        return this.userid;
    }
    setPassword(password){
        this.password = password;
    }

    getUserId():string{
        return this.userid;
    }

    getPassword():string{
        return this.password;
    }
}

