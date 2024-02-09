"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*------Object destructuring-----*/
// let user:User={ name:'ABC',id:1,email:'mail'}
//let {name,email}:User={ name:'ABC',id:1,email:'mail'}
let { name: UserName, email: userlogin } = { name: 'ABC', id: 1, email: 'mail' };
let employee = { name: 'mkn', id: 90, email: 'iui', salary: 89090 };
/*------Array Destructuring----------------*/
let [user1, user2, ...restUsers] = [{ name: 'ABC', id: 1, email: 'mail' },
    { name: 'wer', id: 2, email: 'mail' },
    { name: 'sdf', id: 3, email: 'mail' },
    { name: 'john', id: 4, email: 'mail' }];
console.log(restUsers);
let result = restUsers.filter((user) => user.id > 3);
console.log(result);
