//Q1
//Given an array of strings, use a function to reverse all the elements in the string 
//in ascending order and the specific elements in descending order








//Q3
//Given an array of objects, each object representing a person with a name and age property
//, write a function that returns the sum of all people who are less than 18 years.
//const people = [
//  { name: 'Alice', age: 17 },
//  { name: 'Eunice', age: 22 },
 // { name: 'Charlie', age: 14 },
 // { name: 'Max', age: 19 },
//];

const people = [
      { name: 'Alice', age: 17 },
      { name: 'Eunice', age: 22 },
      { name: 'Charlie', age: 14 },
      { name: 'Max', age: 19 },
    ];

let ages=people.map(item=>item.age>18)
console.log({ages});
    
   
    



//Q3
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numArray(nums){
    if(nums>0){
        console.log("num is positive");
    }else if(nums==0){
        console.log("the num is zero");
    }else{
        console.log("the num is negative");
    }
}
let nums=[1,2,3,4,5,6,7,8,9]
console.log(numArray(nums))

//Given an array of objects, where each object represents an employee with an id,
// name, and salary property, write a function that returns a new array of employee 
//objects sorted by their salary in ascending order.
const employee=[
    {name:"Faith",id:"389274653",salary:15000},
    {name:"John",id:"378291634",salary:1300},
    {name:"Faith",id:"36728093",salary:1400}
    

]


