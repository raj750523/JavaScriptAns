# Array Manipulation Methods in JavaScript

This repository contains a JavaScript script demonstrating various array manipulation methods.

## Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Methods Demonstrated](#methods-demonstrated)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The script `array_manipulation.js` showcases different methods available for manipulating arrays in JavaScript.

## Usage

To run the script:

1. Clone the repository to your local machine.
2. Open the `array_manipulation.js` file in a JavaScript environment such as Node.js or a browser console.
3. Run the script.

## Methods Demonstrated

The script demonstrates the following array manipulation methods:

- `toString()`
- `join()`
- `pop()`
- `push()`
- `shift()`
- `unshift()`
- `delete`
- `concat()`
- `sort()`
- `reverse()`
- `splice()`
- `slice()`


//3- Join
//The join() method also joins all array elements into a string.

let c = num.join(" and ")
console.log(c, typeof c)

//4-pop
//The pop() method removes the last element from an array:

 let r = num.pop() // pop returns the popped element end of th arryay
 console.log(num, r)

 //5-push()
 //The push() method adds a new element to an array (at the end):

 let k = num.push(56) // push returns the new array length starting of the arraay
 console.log(num, k)

//6-shift()
 //The shift() method removes the first array element and "shifts" all other elements to a lower index.
 let i = num.shift()
 console.log(r, num)  //removes an element from the start of the array

 //7-unshift()
 //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

 let unsift= num.unshift(28)
    console.log(unsift,num)


//delete()
 /*let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
 let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
 console.log(num1.length)
 delete num1[0]
console.log(num1.length)*/

/*********************************************************************/
//concat
//let newArray = num.concat(num_more, num_even_more)
// console.log(newArray
// console.log(num, num_more)


/*********************************************************************/ 

//sort an array allphabatically
//compare- it can sort the array accending order

//let compare = (a,b)=>{
 //   return a-b
//}
//let num1 = [551, 2, 33, 42, 5, 65, 70, 8, 93]
///num1.sort(compare)
//num1.reverse()     //Reverse //it reverse the array
//console.log(num1)


/*********************************************************************/

//splice() and slice()
//The splice() method can be used to add new items to an array:

//The slice() method is used to extract a section of an array and return it as a new

let splice = [551, 22, 3, 14, 5, 6, 7, 8, 229]





## Contributing

Contributions are welcome! If you have suggestions or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
