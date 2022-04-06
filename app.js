// Task 1 

let x = 20;  
let y = 58;   
let z = 42;
console.log(x, y, z)

// #### Task 2 💻

const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365 * day;
console.log (second, minute, hour, day, year)

let age = prompt('Введите ваш возраст')
let ageInSeconds = +age * year
alert(`Ваш возраст в секундах: ${ageInSeconds}`) 

// #### Task 3 💻

let count = 42;    
let userName = '42';

console.log(count);
console.log(`type of count: ${typeof(count)}`);
console.log(userName);
console.log(`type of userName: ${typeof(userName)}`);

// count = String(count);
// userName = Number(userName)

count = count + ""
userName = userName * 1

console.log(count);
console.log(`type of count: ${typeof(count)}`);
console.log(userName);
console.log(`type of userName: ${typeof(userName)}`);

// #### Task 4 💻

let a = 1;   
let b = 2;  
let c = "белых медведей";
const space = " "; 
let result = String(a) + b + space + c;

console.log(result);

// #### Task 5 💻

let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";

let wordLength = a.length + b.length + c.length + d.length + e.length;
console.log(wordLength)

// #### Task 6 💻

let user = "Егор";
let age = 23;
let sleepy = true;

console.log(`Variable user has a type of : ${typeof(user)}`);
console.log(`Variable age has a type of : ${typeof(age)}`);
console.log(`Variable sleepy has a type of : ${typeof(sleepy)}`);


// #### Task 7 💻

let userName = prompt('Введите ваше имя');
let userAge = prompt('Введите ваш возраст');

console.log(`User's name is: ${userName}`);
console.log(`User is ${userAge} years old`);

// ### ADVANCED level

// #### Task 1 👨‍🏫

let a = 4;
let b = 3;

// a = a + b;
// b = a - b;
// a = a - b;

[a, b] = [b, a]

console.log(`a is ${a}`);
console.log(`b is ${b}`);

// #### Task 2 👨‍🏫

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cypher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cypher) 