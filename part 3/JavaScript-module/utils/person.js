// default keyword
export class person{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export class person2{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

const hello = "hello world"
export default hello;

// if we use default keyword exporting time, then importing time we dont need 
// second bracket.

// a file can have only one default. other can be export only

//we can also export at the button


