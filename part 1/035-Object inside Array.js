//Object inside array
//very useful in real world application
//syntax
// const user =[
//     {},
//     {},
//     {}
// ];
const users =[
    {userid:1, name:"prallad", gender: "male"},
    {userid:2, name:"suman", gender:"male"},
    {userid:3, name:"rakesh", gender:"male"},
];
console.log(users);

//for of loop
for(let user  of users){
    console.log(user);
    console.log(user.userid);  //userid
    console.log(user.name);  //name
}
