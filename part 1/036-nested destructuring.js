//nested destructuring
const users =[
    {userid:1, name:"prallad", gender: "male"},
    {userid:2, name:"suman", gender:"male"},
    {userid:3, name:"rakesh", gender:"male"},
];

//get the object
const [u1,u2,u3] = users;
console.log(u1,u2,u3);

//now we want the value of object
const [{name},,{userid}]=users; 
//from first object name.second object skip. from third object userid.
//or
const [{name:user1Name},,{userid: user3userId}]=users; 
console.log(name,userid);
console.log("-------------------------------")
console.log(user1Name,user3userId);