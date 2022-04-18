// ### NORMAL level

// #### Task 1 💻

// const getSum = function (b) {
// 	let sum = 0
// 	for (i = 0; i <= b; i++) {
// 		sum = sum + i
// 	} return sum
// } 

// console.log(getSum(100))

// #### Task 2 💻

// const overCharge = function (loanBody, interest, period) {
// 	let monthlyPayment = Math.round(loanBody * (interest/12/100*((1+interest/12/100)**(period*12))) / (((1 + interest/12/100)**(period*12)-1)))
// 	console.log(`ежемесячный платеж ${monthlyPayment}`)
// 	return monthlyPayment*12*period - loanBody 
// } 

// console.log(overCharge(10000, 17, 5))

// #### Task 3 💻

// const trimString = function (str, strStart, strEnd) {
// 	str = str.split(" ")
// 	strStartIndex = 0
// 	strStartIndex = 0
// 	for (i = 0; i < str.length; i++) {
// 		if (str[i].includes(strStart)) {
// 			strStartIndex = i
// 		} else if (str[i].includes(strEnd)) {
// 			strEndIndex = i
// 		}
// 	} return str.slice(strStartIndex++, strEndIndex)
// } 

// console.log(trimString("Что-то выдавало в Штирлице советского разведчика. Не то мужественный профиль, не то решительная походка, не то волочащийся за ним парашют.", "в", "парашют."))

// #### Task 4 💻

// const getSumNumbers = function (a) {
// 	a = String(a).split("")
// 	let sum = 0
// 	for (i=0; i < a.length; i++){
// 		sum = sum + Number(a[i]) 
// 	} return sum
// } 

// console.log(getSumNumbers(2022)) 

// #### Task 5 💻

// const getSum = function (a, b) {
// 	let sum = 0
// 	for (i = a; i <= b; i++) {
// 		sum = sum + i
// 	} return sum
// } 

// console.log(getSum(1, 0)) // 1 + 0 = 1
// console.log(getSum(1, 2)) // 1 + 2 = 3
// console.log(getSum(0, 1)) // 0 + 1 = 1
// console.log(getSum(1, 1)) // 1 Since both are same
// console.log(getSum(-1, 0))// -1 + 0 = -1
// console.log(getSum(-1, 2))// -1 + 0 + 1 + 2 = 2

// #### Task 6 💻

// const foo = () => {return console.log(foo.name)}
// const boo = () => {return console.log(boo.name)}

// const fooboo = function (condition, foo, boo) {
// 	if (!!condition) {
// 		return foo()
// 	} else return boo()
// } 

// fooboo(false, foo, boo)

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// const triangle = function(a, b, c) {
// 	if (a > 0 && b > 0 && c > 0) {
// 		if (a + b > c && a + c > b && b + c > a) {
// 		return true
// 		} else return false
// 	} else return alert("Длина стороны треугольника должна быть положительной")
// }
// console.log(triangle(-1, 15, 15))

// #### Task 2 👨‍🏫 


	let budget = Number(prompt("Введите сумму вашего бюджета")) // запрашиваем бюджет
	let currency = false // далее уточняе валюту накоплений
	if (currency = confirm("Вы ввели сумму накоплений в рублях?")) {
			currency = "RUB"
		}	else if (currency = confirm("Вы ввели сумму накоплений в долларах?")){
			currency = "USD"
		}	else if	(currency = confirm("Вы ввели сумму накоплений в евро?")){
			currency = "EUR"} else {
				currency = "RUB";
				budget = Number(prompt("Пожалуйста, введите сумму вашего бюджета в рублях"))
			}
	
	const phonePriceRUB = 800 //задаем переменные цен, НДС и курсов
	const casePriceRUB = 20
	const taxRateVAT = 0.2
	let	exchangeRateEUR = 3
	let	exchangeRateUSD = 2.8

	let bill = {} //создаем объект для последующего вывода данных 
	let purchasePrice = 0
	let budgetLeft = 0
	let purchaseQuantity = 0

	
	const purchasePriceCalc = function ()	{if (currency === "RUB") {for (let i = 1; purchasePrice <= budget; i++) { //расчет учитывает курс валюты 
		purchasePrice = Number(((1+taxRateVAT)*(phonePriceRUB + casePriceRUB)*i).toFixed(2)) //округляем сумму чека до двух знаков после запятой
		purchaseQuantity = i
	}} else if (currency === "EUR") {for (let i = 1; purchasePrice <= budget; i++) {
		purchasePrice = Number(((1+taxRateVAT)*(phonePriceRUB/exchangeRateEUR + casePriceRUB/exchangeRateEUR)*i).toFixed(2))
		purchaseQuantity = i
	}} else {for (let i = 1; purchasePrice <= budget; i++) {
		purchasePrice = Number(((1+taxRateVAT)*(phonePriceRUB/exchangeRateUSD + casePriceRUB/exchangeRateUSD)*i).toFixed(2))
		purchaseQuantity = i
	}}
	purchasePrice = Number(((1+taxRateVAT)*(phonePriceRUB/exchangeRateEUR + casePriceRUB/exchangeRateEUR)*purchaseQuantity).toFixed(2))
	budgetLeft = Number((budget - purchasePrice).toFixed(2))

	return bill = { //возвращаем данные через объект
		purchasePrice: purchasePrice,
		budgetLeft: budgetLeft,
		purchaseQuantity: purchaseQuantity
	}
}

	bill = purchasePriceCalc() //вызываем функцию, перезаписываем ключи объекта 

	if (bill[purchaseQuantity] === 0) { // проверяем сможет ли человек совершить покупку
		alert("Ваш бюджет не позволяет совершить ни одной покупки")
	} else {
		alert(`С вашим бюджетом вы сможете купить следующее количество пар смартфон+чехол: ${purchaseQuantity}. Сумма чека с учетом НДС составит: ${purchasePrice}${currency}. Остаток денежных средств на вашем счете будет равен ${budgetLeft}${currency}`)
	}

	console.log(budget)
	console.log(currency)
	console.log(purchasePriceCalc())

// #### Task 3 👨‍🏫

// const chocolate = function(n, m) {
// 	let numBreaks = 0
// 	if (n > 0 && m > 0 && n % 1 === 0 && m % 1 === 0) {
// 		for (i = 1; i < n * m; i++) {
// 			numBreaks += 1 
// 		}
// 	} else alert("Введите положительные целые числа")
// 	return alert (`Для разделения плитки потребуется ${numBreaks} надломов`)
// }
// console.log(chocolate(NaN, NaN))

// #### Codewars

// 1. https://www.codewars.com/kata/55a5befdf16499bffb00007b

// function add(a,b){
// 	return a + b
// }

// function divide(a,b){
// 	return a / b
// }

// function multiply(a,b){
// 	return a * b
// }

// function mod(a,b){
// 	return a % b
// }
 
// function exponent(a,b){
// 	return a ** b
// }
	
// function subt(a,b){
// 	return a - b
// }

// 2. https://www.codewars.com/kata/559ac78160f0be07c200005a

// function nameShuffler(str){
//   let arr = str.split(" ").reverse()
//   return arr.join(" ")
// }

// 3. https://www.codewars.com/kata/50654ddff44f800200000007

// function solution(a, b){
//   if (a.length > b.length) {
//     return b + a + b
//   }else return a + b + a
// }
