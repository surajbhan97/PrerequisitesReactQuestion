// question 1
// Source Code =>
    let arr = [2,4,5,6,8,9]

const squareArray = arr.map(num =>num*num); //square using map fun
// document.write(squareArray); //print rresult
console.log(squareArray)
// end of question 1

// question 2
// Source Code =>
// function getGrade(score){
//     return  score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" :
//             score >= 60 ? "D" :
//                         "F" ;
// }

// let score = 75
// console.log("Grade",getGrade(score));
// end of question 3 

// question 3
// let car= {
//     companyName :"Toyota",
//     model : "Corolla",
//     year : 2020
// };

// // function to change the year of car
// function changeCarYear (newYear){
//     car.year = newYear;
// }

// // chnge the car year to 2023
// changeCarYear(2023);

// // use object destructuring to extract model and year 
// const { model, year } = car;

// console.log("model",model)
// console.log("Year",year)
// end of question 3

// question 4
// source code =>
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false; // Divisible by a number other than 1 and itself
//       }
//     }
//     return true; // Prime number
// }

// const numbers = [2,3,4,5,6,7,8,9]

// const primeNum = numbers.filter(isPrime);

// console.log(primeNum)
// end of question 4.............

// question no  5
// ### **1. `map` Function**
// - **Purpose**: Transforms each element of an array based on a provided callback function and returns a new array.
// - **Use Cases**:
//   1. **Transform Data**: Converting an array of objects to a specific format.
     const numberss = [1, 2, 3, 4];
     const squared = numberss.map(num => num * num); // [1, 4, 9, 16]
  
//   2. **Extract Specific Properties**: Create a new array containing specific fields of objects.
     
     const users1 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
     const names = users1.map(user => user.name); // ['Alice', 'Bob']
     
//   3. **Modify UI Data**: Add or change properties in an array of objects.
     
     const products = [{ id: 1, price: 100 }, { id: 2, price: 200 }];
     const updatedProducts = products.map(product => ({ ...product, discount: 0.1 }));
     
// ---

// // ### **2. `reduce` Function**
// - **Purpose**: Reduces an array to a single value by applying a callback function iteratively.
// - **Use Cases**:
//   1. **Sum or Aggregate Values**:
     
     const numbers2 = [1, 2, 3, 4];
     const total = numbers2.reduce((sum, num) => sum + num, 0); // 10
     
//   2. **Create a Lookup Object**:
     
     const users2 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
     const userMap = users2.reduce((map, user) => ({ ...map, [user.id]: user.name }), {});
     // { 1: 'Alice', 2: 'Bob' }
     
//   3. **Flatten Nested Arrays**:
     
     const nested = [[1, 2], [3, 4], [5]];
     const flat = nested.reduce((acc, arr) => acc.concat(arr), []); // [1, 2, 3, 4, 5]
     
     //   4. **Count Occurrences**:
     
     const items = ['apple', 'banana', 'apple'];
     const count = items.reduce((acc, item) => {
       acc[item] = (acc[item] || 0) + 1;
       return acc;
     }, {});
     // { apple: 2, banana: 1 }
     

// ---

// ### **3. `filter` Function**
// - **Purpose**: Filters elements of an array based on a provided callback function and returns a new array containing only elements that satisfy the condition.
// - **Use Cases**:
//   1. **Filter Out Unwanted Items**:
     
     const numbers3 = [1, 2, 3, 4];
     const evens = numbers3.filter(num => num % 2 === 0); // [2, 4]
     
//   2. **Search or Filter Objects**:
     
     const users = [{ name: 'Alice', active: true }, { name: 'Bob', active: false }];
     const activeUsers = users.filter(user => user.active); 
     // [{ name: 'Alice', active: true }]
     
//   3. **Remove Null or Undefined Values**:
     
     const data = [1, null, 2, undefined, 3];
     const validData = data.filter(item => item != null); // [1, 2, 3]
     
//   4. **Apply Multiple Conditions**:
     
     const numbers4 = [1, 2, 3, 4, 5, 6];
     const filtered = numbers4.filter(num => num > 2 && num % 2 === 0); // [4, 6]
     

// ---

// ### Summary of Usage:
// - **`map`**: When you need to transform or modify each item in an array.
// - **`reduce`**: When you need to aggregate array data into a single value or object.
// - **`filter`**: When you need to remove unwanted elements based on conditions.
// ---------------------------------------------------

// Question 6 =>
// Define an asynchronous function to fetch data from the API
// Importing the Fetch API (if running in Node.js)
// source code =>

// const fetch = require('node-fetch');

// // Asynchronous function to fetch data
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetching data from the API
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json(); // Parsing the JSON response
//         console.log(data); // Logging the result
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the asynchronous function
// fetchData();

// question 7 =>
// Define a nested object representing a person with properties like name, address, and contact.Use 
// optional chaining to safely access the person's phone number, even if the contact property is missing.


// Define the nested object
// const person = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     zip: "10001"
//   },
//   contact: {
//     email: "johndoe@example.com",
//     phone: "555-1234"
//   }
// };

// // Access the phone number safely using optional chaining
// const phoneNumber = person.contact?.phone;

// // Output the result
// console.log(phoneNumber); // Outputs: 555-1234

// // Example where contact is missing
// const personWithoutContact = {
//   name: "Jane Doe",
//   address: {
//     street: "456 Elm St",
//     city: "Los Angeles",
//     zip: "90001"
//   }
// };

// const missingPhoneNumber = personWithoutContact.contact?.phone;
// console.log(missingPhoneNumber); // Outputs: undefined
// end of question 7................