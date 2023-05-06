//Q1
//Given an array of strings, use a function to reverse all the elements in the string 
//in ascending order and the specific elements in descending order
 

//Q3
//Given an array of objects, each object representing a person with a name and age property
//, write a function that returns the sum of all people who are less than 18 years.
// const people = [
//  { name: 'Alice', age: 17 },
//  { name: 'Eunice', age: 22 },
//  { name: 'Charlie', age: 14 },
//  { name: 'Max', age: 19 },
// ];

 const people = [
      { name: 'Alice', age: 17 },
      { name: 'Eunice', age: 22 },
      { name: 'Charlie', age: 14 },
      { name: 'Max', age: 19 }
    ];
function peopleInformation(people){
    return people.filter(people=>people.age<18,
        people=>people.name)
}
console.log(peopleInformation(people))

//Q3
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numArray(num){
    if(num>0){
        console.log("num is positive");
    }else if(num==0){
        console.log("the num is zero");
    }else{
        console.log("the num is negative");
    }
}
let nums=[3]
console.log(numArray(nums))

//Given an array of objects, where each object represents an employee with an id,
// name, and salary property, write a function that returns a new array of employee 
//objects sorted by their salary in ascending order.
const details=[
    {name:"Faith",id:1,salary:15000},
    {name:"John",id:3,salary:1300},
    {name:"Faith",id:2,salary:1400}
    

]
function peopleDetails(details) {
    const sort = details.sort((a, b) => a.salary - b.salary);
    return sort;
  }
console.log(peopleInformation(details.salary));


