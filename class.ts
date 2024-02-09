/*-----method 1-----*/
// class Employee{
//     // if exclamatory is used, it will not throw initialize erro
    
//     id!:number;
//     name!:string;
//     address!:string;
// }

// let john=new Employee();
// john.id=1;
// john.name='John';
// john.address='Chennai';
// console.log(john);

/*-----method 2-----*/

import {Login,User} from './interface';
//import * as UserLogin from './interface'; -- alias way, UserLogin.Login to access

class Employee implements Login{
    /*-- we can have only 1 constructor----*/
    // if we use #id, it means its a private variable
    // By default all classees are public
    // protected can be used only within class, not outside
    #id:number;
    protected name:string;
    address:string;
    
    get empId(){
        return this.#id;
    }
    set empId(id:number){
        this.#id=id;
    }

    // static can be accessed only when called using class name,
    // cannot be accessed with instance
    static getEmployeeCount():number{
        return 50;
    }
    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    }
    Login(): User {
        return { name:'ABC',id:1,email:'mail'}
    }

    getNameAndAddress():string{
        
        //return this.name+" "+ this.address;
        return `${this.name} Stays at ${this.address}`
    }
}
//passing values are mandatory
let emp=new Employee(4,'John','Chennai');



emp.empId=100;
console.log(emp.empId);
/*---accessing static variable----*/
console.log(Employee.getEmployeeCount());









class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address);//protected variables can be accessed by the class that extends it
    }
    getNameAndAddress(): string {
        return `${this.name} is a manager at ${this.address}`
    }
}
let manager= new Manager(2,'Meow','chennai');
// if the method in manager class is removed, it'll access Employees' method here

console.log(manager.getNameAndAddress());


//emp.id cannot be accessed as it is private
console.log(emp)
console.log(emp.getNameAndAddress());