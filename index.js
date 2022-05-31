// ### NORMAL level

// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

let obj = {
	name: "Egor",
	age: 23,
}
console.log(obj)

delete obj.name
delete obj.age

console.log(obj)

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

let obj = {
	name: "Egor",
	age: 23,
}

console.log('name' in obj)
console.log('age' in obj)
console.log('height' in obj)


// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
	name: 'John',
	age: 19,
	isHappy: true
}

for (key in student) {
	console.log(key);
}

for (key in student) {
	console.log(student[key]);
}

// #### Task 4 🖥

// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий

const colors = {
	'ru pum pu ru rum': {
			red: 'красный',
			green: 'зеленый',
			blue: 'синий'
	},
}

console.log(colors['ru pum pu ru rum']["red"]);
console.log(colors['ru pum pu ru rum']["blue"]);

// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	andrey: 664,
	alexandra: 199
}

let totalSalary = 0
// let staffCount = 0

for(key in salaries) {
	totalSalary += salaries[key]
	// staffCount += 1 
}

let averageSalary = totalSalary/Object.keys(salaries).length
// let averageSalary = totalSalary/staffCount

console.log(averageSalary)

// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 



const userAuthorisation = (login, password) => ({
	login: login,
	password: password,
}) //создаем объект, в который запишем первоначальные логин и пароль

const UserVerification = (login, password) => login === "" || password === "" ? alert("Введите корректные данные для входа") : ({
	login: login,
	password: password, 
}) //создаем объект, в который запишем проверочные логин и пароль. Функция попросит ввести данные заново, если пользователь оставит логин и пароль пустыми  

let user = userAuthorisation(prompt("Введите логин"), prompt("Введите пароль"))
console.log(user)

let userVerif = UserVerification(prompt("Введите логин повторно"), prompt("Введите пароль повторно"))
console.log(userVerif) //юзер вводит данные через браузерный api 

const verification = () => {
	if (user.login === userVerif.login && user.password === userVerif.password) {
		return alert("Добро пожаловать!")
	} else return alert("Произошла ошибка, введите данные повторно")
}

verification()

// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

const matchResult = (result) => result.split(":")
let goalCount = matchResult("2:5")
console.log(goalCount) 

 switch(goalCount[0]) {
	 case "0":
		goalCount[0] = "ноль"
		break
	 case "1":
		goalCount[0] = "один"
		break
	 case "2":
		goalCount[0] = "два"
		break
	 case "3":
		goalCount[0] = "три"
		break
	 case "4":
		goalCount[0] = "четыре"
		break
	 case "5":
		goalCount[0] = "пять"
		break
	 case "6":
		goalCount[0] = "шесть"
		break
	 case "7":
		goalCount[0] = "семь"
		break
	 case "8":
		goalCount[0] = "восемь"
		break
	 case "9":
		goalCount[0] = "девять"
		break																												  
 }
 switch(goalCount[1]) {
	case "0":
	 goalCount[1] = "ноль"
	 break
	case "1":
	 goalCount[1] = "один"
	 break
	case "2":
	 goalCount[1] = "два"
	 break
	case "3":
	 goalCount[1] = "три"
	 break
	case "4":
	 goalCount[1] = "четыре"
	 break
	case "5":
	 goalCount[1] = "пять"
	 break
	case "6":
	 goalCount[1] = "шесть"
	 break
	case "7":
	 goalCount[1] = "семь"
	 break
	case "8":
	 goalCount[1] = "восемь"
	 break
	case "9":
	 goalCount[1] = "девять"
	 break																												  
} 

console.log(`Счет матча: ${goalCount[0]} - ${goalCount[1]}`)

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
	name: 'Polina',
	age: 27,
}

let student2 = {
	name: 'Polina',
	age: 27,
}

const comp = function (student1, student2) {
	if (Object.keys(student1).length !== Object.keys(student2).length) {
		return false
	} else for (let key in student1) {
		if (student1[key] !== student2[key]) {
			return false
		} else return true
	}
} // сразу функция сверяет длинну объектов. Затем то, что хранится в ключах

console.log(comp(student1, student2));

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.
// const animals = {
// 	cat: {
// 		 name: 'Енчик',
// 		 age: 3,
// 	},
// 	dog: {
// 		 name: 'Орео',
// 		 age: 2,
// 	}
// }

let animal = prompt("Имя какого животного вы xотите узнать")
if(!animals[animal]){
	alert("такого животного здесь нет")
} else alert (`Его зовут ${animals[animal].name}`)

console.log(animals);

// #### Task 4 🖥

// Порешать задания для закрепления:
// http://old.code.mu/tasks/javascript/base/osnovy-raboty-s-massivami-i-objektami-v-javascript.html

//======================= массивы =================================================//

// 1. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// arr = ['a', 'b', 'c']
// alert(arr)

// 2. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
// let arr = ['a', 'b', 'c']
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])

//3. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// let arr = ['a', 'b', 'c', 'd']
// alert(`${arr[0]}+${arr[1], ${arr[2]+${arr[3]`)

//4.Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr = [2, 5, 3, 9]
// let result = arr[0]*arr[1] + arr[2]*arr[3]
// console.log(result) 

//======================================Обьекты===================================================//

//5. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// var obj = {a: 1, b: 2, c: 3};
// alert(obj["c"])
// alert(obj.c)

//6. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
// var obj = {Коля: '1000', Вася: '500', Петя: '200'}
// alert(`зарплата Пети ${obj["Петя"]}`)
// alert(`зарплата Коли ${obj["Коля"]}`)

//7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

//8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// let week = {
// 	1: "Monday",
// 	2: "Tuesday",
// 	3: "Wednesday",
// 	4: "Thursday",
// 	5: "Friday",
// 	6: "Saturday",
// 	7: "Sunday",
// }

// let day = 4
// console.log(week[day])

//==================================== Многомерные масивы ====================================//

// 9. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// const numbers = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(numbers[1][0]);

//10. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj.js[0]);

//11.Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

//12. Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// let obj = {
// 	ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
// 	eng: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// }

// let lang = "eng"
// let day = 3

// console.log(obj[lang][day-1]);