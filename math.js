let firstName = 'Bro';
let age = 21;
let student = true;

console.log("Hello", firstName) //strings
console.log("Happy birthday now you are",age, "years old!") //numbers
console.log(student) //booleans

document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old!';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;

