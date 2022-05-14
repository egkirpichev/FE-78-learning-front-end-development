// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']
console.log(colors.length)

// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length-1])

// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]
const numbersCopy = [...numbers]
// for(i=1; i<=numbers.length; i++){
// 	numbersCopy.pop()
// }
// console.log(numbersCopy) 

for(i=1; i<=numbers.length; i++){
	numbersCopy.shift()
}
console.log(numbersCopy)

// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push("Borya")
students.shift()
students.unshift("Andrey")
console.log(students)

// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman']

for (i = 0; i < cats.length; i++) {
	console.log(cats[i])
}

for (let item of cats) {
	console.log(item)
}

// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const oddNumbers = [1, 3, 5, 7, 9]
const evenNumbers = [2, 4, 6, 8, 10]

const combinedArray = oddNumbers.concat(evenNumbers)
console.log(combinedArray)
console.log(combinedArray.findIndex((el) => el === 8))

// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
 
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]

const binaryString = binary.join(1)
console.log(binaryString)

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const newFucntion = function (input) {
	const inputArr = input.split("")
	console.log(inputArr)
	const inputArrReversed = [...inputArr].reverse()
	console.log(inputArrReversed)
	for (i = 0; i < inputArr.length; i++) {
		if (inputArr[i] !== inputArrReversed[i]) {
			return false
		} else return true
	} 
} 

console.log(newFucntion("egor"))


// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
	[12, 98, 78, 65, 23],
	[54, 76, 98, 43, 65],
	[13, 324, 65, 312],
	[9092, 22, 45, 90000],
]

const joinedMatrix = matrix.join().split(",") //делаем многомерный массив одномерным
console.log(joinedMatrix)
console.log(matrix)

const arevageNumber = function(array) {
	let sum = 0
	for (item of array) {
		sum = sum + item 
	}
	return sum/joinedMatrix.length
}

console.log(arevageNumber(joinedMatrix))

// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const positiveNumbers = [...mixedNumbers].filter((el) => el >= 0)
console.log(positiveNumbers)
const negativeNumbers = [...mixedNumbers].filter((el) => el < 0)
console.log(negativeNumbers)


// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

const firstRandomArray = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]

console.log(firstRandomArray)

const secondRandomArray = [...firstRandomArray].map((el) => el**3)

console.log(secondRandomArray)


#### Task

1. https://www.codewars.com/kata/57f781872e3d8ca2a000007e

function maps(x){
  return x.map(el => el*2)
}

2. https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce(((total, el) => el > 0 ? total+el : total),0)
}

3. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  let arr = name.split(" ")
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`}