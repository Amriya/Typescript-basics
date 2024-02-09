"use strict";
/*-----method 1-----*/
// class Employee{
//     // if exclamatory is used, it will not throw initialize erro
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
//import * as UserLogin from './interface'; -- alias way, UserLogin.Login to access
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // static can be accessed only when called using class name,
    // cannot be accessed with instance
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        /*-- we can have only 1 constructor----*/
        // if we use #id, it means its a private variable
        // By default all classees are public
        // protected can be used only within class, not outside
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: 'ABC', id: 1, email: 'mail' };
    }
    getNameAndAddress() {
        //return this.name+" "+ this.address;
        return `${this.name} Stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
//passing values are mandatory
let emp = new Employee(4, 'John', 'Chennai');
emp.empId = 100;
console.log(emp.empId);
/*---accessing static variable----*/
console.log(Employee.getEmployeeCount());
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address); //protected variables can be accessed by the class that extends it
    }
    getNameAndAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let manager = new Manager(2, 'Meow', 'chennai');
// if the method in manager class is removed, it'll access Employees' method here
console.log(manager.getNameAndAddress());
//emp.id cannot be accessed as it is private
console.log(emp);
console.log(emp.getNameAndAddress());
