//splice mothod
//splice(start, delete,  insert)
//splice methode is used to delete or inser element from array.
//it's change original array

const myArray = [1,2,3,4,5,6,7,8,9,0];
//delete from index 3 to 6
//if we deleted anything it will return the deleted item.
const deletedItem = myArray.splice(3,6); //start=3, delete=6
console.log("array become ",myArray);
console.log("deleted item ",deletedItem);

//insert
//array become myArray = [1,2,3,0]  ---as it's change original array
//now we want to insert element at 3rd index.
myArray.splice(3,0,6); //start=3  delete=0 insert=6 
console.log(myArray);

//array become [1, 2, 3, 6, 0]
//insert delete
const deletedItems = myArray.splice(1,2,"inserted item","inserted item");
console.log(myArray);
console.log(deletedItems);




