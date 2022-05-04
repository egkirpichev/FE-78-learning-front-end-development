// ## Complete exercise

// ### NORMAL level

// #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
//function expression
const eachItem = function (array) {
	return array.forEach(function (element) {
		console.log(element)
	});
}

//arrow function
fibonacci.forEach(element => console.log(element))


// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
//function expression
const memberDisplay = function(array) {
	let result = []
	return result = [...array].map(function(element, index) {
		return element = `member ${index+1}: ${element}`  	
	})
} 
//arrow function
console.log(memberDisplay(users)) 

let result = [...users].map((element, index) => element = `member ${index + 1}: ${element}`)

console.log(result);

// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [7, -4, 32, -90, 54, 32, -21]
//function expression
const filtration = function(array) {
	let result = []
	return result = [...array].filter(function(element) {
		return element > 0  	
	})
} 

console.log(filtration(numbers));
//arrow function
let result = [...numbers].filter(element => element > 0)
console.log(result);

// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
//function expression
const sum = function(array) {
	let result = []
	return result = [...array].reduce(function(accumulator, element) {
		return accumulator = accumulator + element 
	})
}
//arrow function
console.log(sum(fibonacci));

let result = [...fibonacci].reduce((accumulator, element) => accumulator = accumulator + element)
console.log(result);

// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

Student = function (name, rate, salary) {
	this.name = name,
	this.rate = rate,
	this.salary = salary,
	this.loan = function loanCalc () {
		switch(this.rate) {
			case "A":
				return 12*this.salary
			case "B":
				return 9*this.salary
			case "C":
				return 6*this.salary
			case "D":
				return 0
		}
	}
}

let user = new Student ("Egor", "A", 2000)
console.log(user); 

let students = []
let studentEgor = new Student("Egor", "D", 2000)
let studentOlga = new Student("Olga", "A", 3000)
let studentIgor = new Student("Igor", "B", 2500)
let studentAlexey = new Student("Alexey", "B", 2500)
let studentBoris = new Student("Boris", "D", 500)


students = [studentEgor, studentOlga, studentIgor, studentAlexey, studentBoris]

console.log(students);

const loanSum = (array) => {
	let sum = 0
	for (i = 0; i < array.length; i++) {
		sum += array[i].loan()
	}
	return sum  
}

console.log(loanSum(students));


// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const replace = (str) => str.replace(/[aeiou]/gi, "")

console.log(replace("This website is for losers LOL!"));


// #### Task 3 👨‍🏫 Нет истории, нет теории

// + В приведенных ниже примерах показано, как написать функцию:

// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.


const strModif = function(str) {
	let arr = str.toUpperCase().split("")
	arr = arr.map((element, index) => element = element + (element.toLowerCase()).repeat(index))
	return arr.join("-")
}

console.log(strModif("RqaEzty"));

// #### Task 4 👨‍🏫 Самый высокий и самый низкий

// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.


const maxMin = (str) => {
	let arrayOfNumbers = str.split(" ")
	arrayOfNumbers = arrayOfNumbers.map(number => Number(number))
	let max
	let min
	let result
	max = arrayOfNumbers.reduce((acum, number, index, array) => 
		acum > number ? acum : acum = number, arrayOfNumbers[0]
	)
	min = arrayOfNumbers.reduce((acum, number, index, array) =>
		acum < number ? acum : acum = number, arrayOfNumbers[0]
	)
	return result = `${max} ${min}` 
}

console.log(maxMin("1 2 3 4 5"));
console.log(maxMin("1 2 -3 4 5"));
console.log(maxMin("1 9 3 4 -5"));


// #### Task 5 👨‍🏫 Изограммы

// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  str = str.toLowerCase()
  let arr = str.split("")
  for(let i = 0; i<arr.length; i++) {
    for(let j = i + 1; j<arr.length; j++) {
      if (arr[i] === arr[j]) {
      return false
  } 
  }  
  } 
  return true
}

console.log(isIsogram("qwertyuoplmn"))


// #### Task 6 👨‍🏫 Считаем коды символов

// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**

// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// + После верните разницу между суммой цифр **`total1`** и **`total2`**

// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667	

const charCode = (str) => {
	let array = str.split("")
	let array1 = array.map(character => character = Number(character.charCodeAt()))
	let total1 = array1.join("")
	let array2 = total1.split("").map(number => number === "7" ? number = "1" : number)
	let total2 = array2.join("")
	return total2 - total1
}

console.log(charCode("ABC"));

// #### Task 7 👨‍🏫 Дубликаты

// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
// **`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```

const duplicates = (str) => {
  let array = str.toLowerCase().split("")
	const search = (index, arr) => { // функция, которая понадобится в дальнейшем для проверки оставшейся части массива на совпадающие символы 
		for (let followingIndex = index + 1; followingIndex < arr.length; followingIndex++) {
			if (array[index] === array[followingIndex]) {
				return false
			} 
		} return true
	} 
	for (let i = 0; i < array.length; i++) { //пробегаемся циклом по массиву
		for (let j = i + 1; j < array.length; j++) { //второй цикл, которым сравниваем элемент [i] со всеми последующими элементами массива  
			if (array[i] === array[j] && search(j, array)) { //первое условие: если два элемента совпадают и в оставшейся части массива совпадений не будет, сразу меняем оба элемента на закрывающую скобочку. Здесь использую функцию, чтобы она, в отличие от цикла, возвращала true или false 
				array[j] = ")"
				array[i] = ")"
			} else if (array[i] === array[j]) { // к данному условию цикл перейдет и выполнит, его если далее в массиве есть другие совпадающие с ним элементы (чтобы элемент [i] сразу не менялся на скобочку и продолжал участвовать в сравнении далее). 
				array[j] = ")"
			}
		}
	}
	for (let k = 0; k < array.length; k++) { //вторым циклом меняю неповторяющиеся элементы на открывающую скобочку 
		array[k] !== ")" ? array[k] = "(" : array[k] 
	}
	return array.join("")
}

console.log(duplicates("aaaaaaaaafdffffffffn"))