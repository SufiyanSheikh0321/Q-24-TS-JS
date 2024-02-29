// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Test 1
// • Tests for equality and inequality with strings

const string1: string = "Mobile";
const string2: string = "Laptop";
console.log(string1 === string2); //False strings Are not equal
console.log(string1 !== string2);

//Test 2
// • Tests using the lower case function

const mixedCaseString: string = "HelloWorld";
console.log(mixedCaseString.toLowerCase() === "helloworld")

//Test 3
//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal 

const num1:number = 15;
const num2:number = 10;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


//Test 4
 // • Tests using "and" and "or" operators

 const condition1: boolean = true;
 const condition2: boolean = false;

 console.log(condition1 && condition2);
 console.log(condition1 || condition2);

//Test 5
// • Test whether an item is in a array

     const Cars: string[]=["Audi", "Honda City", "Toyota Yaris", "Fortuner"]
     console.log(Cars.includes("Audi"));
     

     //Test 6
     // • Test whether an item is not in a array

     const Cars1: string[]=["Audi", "Honda City", "Toyota Yaris", "Fortuner"]
     console.log(Cars1.includes("audi"));

