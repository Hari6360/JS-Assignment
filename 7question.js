// 7.  Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arr = ["fsjs2", "pw skills", "python", "js skills"];

let output1 = arr.lastIndexOf("pw skills");
let output2 = arr.indexOf("pw skills");

console.log(`The first occurence of pw skills is : ${output2}`);
console.log(`The last occurence of pw skills is : ${output1}`);
