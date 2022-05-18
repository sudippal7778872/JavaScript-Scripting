// we can devide the long code into smaller part through module.

// console.log(firstName, age); //error

// we have to export the code from all module and import here.
// we have to change the file type= module in html page(index.html).

// import { firstName } from "./utils/fname.js";
// import { age } from "./utils/age.js";
// console.log(firstName,age); 

// if we use default keyword exporting time, then importing time we dont need 
// second bracket.
// a file can have only one default. other can be export only

// for short name we can write like:-
import { firstName as f} from "./utils/fname.js";
import { age as a } from "./utils/age.js";
// import person,{person2} from "./utils/person.js";  /if person is default
import hello,{person,person2} from "./utils/person.js";
//
// or 
// import {person,person2} from "./utils/person.js";
console.log(f,a); 


const Person = new person("prallad","pal",2);
const P = new person2("suman","mukherjee",21);
Person.info();
P.info();
console.log(hello);
