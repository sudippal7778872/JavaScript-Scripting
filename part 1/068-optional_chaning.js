//optional chaning

const user1 = {
    firstName: "Prallad",
    address: {houseNumber:"1234"},
}
console.log(user1.firstName);
console.log(user1.address.houseNumber);
//working fine
//now suppose address is removed. object become user2 --
console.log("-------------after removing address-------------")

const user2 = {
    firstName: "Prallad",
//     address: {houseNumber:"1234"},
}
console.log(user2.address); //undefined
// console.log(user2.address.houseNumber); // we get-- TypeError: Cannot read properties of undefined (reading 'houseNumber')

/*error come because.undefined do not have any property. we trying like ----
 undefined.houseNumber as user2.address is undefined thats why we are getting the error.
*/

/* now we want to houseNumber or any property does not exist the we should 
get undefined as a output not any error. in that case we have to use "?" . let see
*/
console.log("----------?---------------");
console.log(user2?.firstName);
console.log(user2?.address?.houseNumber); //undefined. not error

//if user2 or object not declared still it will give output undefined.
console.log("---------if user undefined---------");
let user3;
console.log(user3?.firstName);
console.log(user3?.address?.houseNumber);




