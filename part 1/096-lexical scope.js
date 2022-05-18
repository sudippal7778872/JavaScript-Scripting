//lexical scope 

const lastname = "pal";
const printName =  function() {
    console.log(arguments); /*argument is an array like object. create during memory 
    creation time. stores the agruments in passes in calling time.
    */
    const firstName = "prallad";
    const fullName = firstName+ " "+lastname;//last name is in global scope where 
    // firstname is in local scope.
    console.log(fullName)
}
printName();
/*
when code execution time it's check lastName is exist in local scope or not. if not 
then check the global scope. that is known as lexical scope.
*/