//Q1- You have an array of integers representing temperatures in degrees Celsius for a week. Write a function to convert these temperatures to Fahrenheit and return the new array.
/*let celsiusTemperatures = [0, 12, 18, 22, 25, 28, 31];
let fahrenheitTemperatures = [];

for (let i = 0; i < celsiusTemperatures.length; i++) {
    let temp = celsiusTemperatures[i];
    let tempF = (temp * 9/5) + 32;
    fahrenheitTemperatures.push(tempF);
}

console.log(fahrenheitTemperatures);*/ 
/******************************************************************************************/  

//2-Given an array of strings, return a new array containing only the strings that have a length greater than 5.//
/*let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let longFruits = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 5) {
        longFruits.push(fruits[i]);
    }
}

console.log(longFruits);*/

/**************************************************************************************** */

//Write a function that takes an array of numbers and returns the sum of all even numbers in the array.//

/*function sumOfEvenNumbers(number) {
    let totalSum=0;
    for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        totalSum += number[i];
    }
}
return totalSum;
}
    

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = sumOfEvenNumbers(numbers);
console.log(result);*/


/*********************************************************************** */

// You have an array of objects representing people with their names and ages. Write a function that returns the name of the first person who is older than 18.
/*function olderThan(people) {
    let old = null;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 18) {
            old = people[i].name;
            break;
        }
    }
    return old;
}

let people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 16 }
];

let olderPerson = olderThan(people);
console.log(olderPerson);*/


/******************************************************** */

// Check if all elements in an array are strings. Return true if they are, otherwise return false.
/*function areAllStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            return false;
        }
    }
    return true;
}


let array1 = ["apple", "banana", "cherry"];
console.log(areAllStrings(array1));*/
 



/******************************************************************** */

 //function that checks if a given array contains the number 42. Return true if it does, otherwise return false.
 
 //method first
 /*function numnberCotains(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 42){
            return true;
  }
}
return false;
  }


 let numbers = [1, 2, 3, 4, 5, 4];
 let contains= numnberCotains(numbers)
 console.log(contains)*/
/**************************************************************** */
  

/*function numnberCotains(arr){
    return arr.includes(42);

  }
 let numbers = [1, 2, 3, 4, 5, 4];
 let contains= numnberCotains(numbers)
 console.log(contains)*/


 // Given an array of fruits, remove the fruit at index 2 and insert "kiwi" and "mango" at that position. Return the modified array.

 /*function replaceFruit(arr) {

    arr.splice(2, 1);
    arr.splice(2, 0, "kiwi", "mango");
    return arr;
}


let fruits = ["apple", "banana", "cherry", "date"];
let modifiedFruits = replaceFruit(fruits);
console.log(modifiedFruits);*/

// Sort an array of integers in descending order and then remove the first element of the sorted array. Return the modified array.

/*let numbers = [3, 1, 4, 1, 5, 9, 2];

numbers.sort((a, b) => b - a); 
numbers.shift(); 

console.log(numbers);*/


