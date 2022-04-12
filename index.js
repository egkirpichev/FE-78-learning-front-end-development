// #### Task 1 💻

// let str = 'true'
// let bool = false
// let num = 17
// let undef = undefined
// let nu = null

// console.log(typeof(str), typeof(bool), typeof(num), typeof(undef), typeof(nu)) 

// #### Task 2 💻

// let height = 15
// let width = 20

// if (height > width) {
// 	console.log(height)
// } else {
// 	console.log(width)
// }

// #### Task 3 💻

// for (let i = 0; i <= 20; i++) {
// 	if (i % 3 === 0) {
// 		console.log(i)
// 	}
// }

// #### Task 4 💻

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// if ((key && documents && pen) && (apple || orange)) {
// 	console.log("Можно идти на работу!")
// }

// #### Task 5 💻

// let num = prompt("Введите число");

// if ((+ num % 5 === 0) && ((+ num % 3 === 0))) {
// 	alert("FizzBuz");
// } else if (+ num % 5 === 0) {
// 	alert("Fizz");
// } else {
// 	alert("Buz");
// }

// #### Task 6 💻

// let age = prompt("Введите ваш возраст")

// if ((+ age >= 16) && ((+ age < 18))) {
// 	alert("Можешь выкурить сигаретку, только маме не говори");
// } else if (+ age < 18) {
// 	alert("Пей колу");
// } else {
// 	alert("Попей пивка");
// }

// #### Task 7 💻

// let str = prompt("Введите сторону света")

// switch (str) {
// 	case "юг":
// 		alert("на юг пойдешь счастье найдешь");
// 		break;
// 	case "север":
// 		alert("на север пойдешь много денег найдешь");
// 		break;
// 	case "запад":
// 		alert("на запад пойдешь верного друга найдешь");
// 		break;
// 	case "восток":
// 		alert("на восток пойдешь разработчиком станешь");
// 		break;
// 	default:
// 		alert("Попробуйте еще раз")				
// }

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// let user = "пОлИнА нАбЕрЕжНаЯ";
// function rework (user) {
// 	user = user.toLowerCase();
// 	user = user.split("")
// 	console.log(user)
// 	user[0] = user[0].toUpperCase()
// 	console.log(user)
// 	for (i = 1; i < user.length; i++) {
// 		if (user[i] === " ") {
// 			user[i+1] = user[i+1].toUpperCase()
// 		}
// 	} 
// 	return user.join("")
// }

// alert(`Привет, ${rework(user)}!`)

// #### Task 2 👨‍🏫 

// let num = prompt("Введите число");
// let substr = prompt("Сколько отнять от предыдущего результата");
// let plus = prompt("Сколько прибавить от предыдущего результата");
// let multiply = prompt("На сколько умножить от предыдущего результата") 
// let divide = prompt("На сколько разделить от предыдущего результата")

// let result = (((Number(num) - Number(substr)) + Number(plus)) * Number(multiply)) / Number(divide)

// alert(`(((${num} - ${substr}) + ${plus}) * ${multiply}) / ${divide} = ${result}`)

// #### Task 3 👨‍🏫

// let arr = [];

// for (let i = 0; i<=5; i++){
// 	arr.push("*")
// 	console.log(arr)
// }

// let str = "";

// for (let i = 0; i<=5; i++){
// 	str = str + "*"
// 	console.log(str)
// }

// #### Task 4 👨‍🏫

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// function isIsogram(str){
//   str = str.toLowerCase()
//   let arr = str.split("")
//   for(let i = 0; i<arr.length; i++) {
//     for(let j = i + 1; j<arr.length; j++) {
//       if (arr[i] == arr[j]) {
//       return false
//   } 
//   }  
//   } 
//   return true
// }

// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash (words) {
// 	words = words.join(" ")
// 	 if (words.length = 1) {
// 	 return words.toString()
// 	 } else if (words.length = 0){
// 	 return ""
// 	 } else for (let i = 0; i < words.length; i++ ){
// 		 words[i] = words[i] + " "
// 	 } 
// 	 return words.toString()
//  };

//  https://www.codewars.com/kata/55a70521798b14d4750000a4

//  function greet(name){
// 	return `Hello, ${name} how are you doing today?` 
//  }

//  https://www.codewars.com/kata/57e1e61ba396b3727c000251

//  function stringClean(s){
//   s = s.split("")
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "0" || s[i] === "1" || s[i] === "2" || s[i] === "3" || s[i] === "4" || s[i] === "5" || s[i] === "6" || s[i] === "7" || s[i] === "8" || s[i] === "9") {
//         s[i] = ""
//         } 
//   }
// return s.join("")
// }

