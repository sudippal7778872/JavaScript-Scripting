//creating array using const.

 const a = ["apple","mango"];
 a.push("banana");//valid
//  a = ["grape","pineapple"]; //invalid because here we are trying to reassign value.
 console.log(a); 
 /*
 here we are able to push a value to const variable. because array is a referance type.
 so, here const variable contain the address we are no changing that. 
 we are changing the heap memory's value or data. so it's working.
 */
