//Real World Example

const users = [
    {userId:1, userName:"prallad"},
    {userId:2, userName:"souvik"},
    {userId:3, userName:"suman"},
    {userId:4, userName:"rakesh"},
    {userId:5, userName:"biplab"},
];

const answer = users.find((user)=>{
    return user.userId ===3;
})
console.log(answer);