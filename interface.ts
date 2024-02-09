export interface User{
    name:string;
    age?:number; //optional 
    id:number;
    email:string;
}
/*------Object destructuring-----*/
// let user:User={ name:'ABC',id:1,email:'mail'}
//let {name,email}:User={ name:'ABC',id:1,email:'mail'}
let {name:UserName, email:userlogin}:User={ name:'ABC',id:1,email:'mail'}





interface Employees extends User{
    salary:number;
}

let employee: Employees={name:'mkn',id:90,email:'iui',salary:89090}


//interfaces can have method definition
export interface Login{
    Login():User;
}

/*------Array Destructuring----------------*/
let [user1,user2,...restUsers]:User[]=[{ name:'ABC',id:1,email:'mail'},
{ name:'wer',id:2,email:'mail'},
{ name:'sdf',id:3,email:'mail'},
{ name:'john',id:4,email:'mail'}]

console.log(restUsers);