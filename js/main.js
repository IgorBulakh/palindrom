'use strict';


// Напишіть програму, яка повертає найбільше число паліндром, яке є добутком двох простих п'ятизначних чисел, а також повертає самі співмножники.

//  Просте число - це натуральне число, яке ділиться без остачі тільки на 1 і на себе саме (2, 3, 5, 7, 11, ...)

//  Паліндром - рядок, яка читається однаково в обох напрямках (наприклад ABBA)

let isChecking = function(num) {
	for (let i = 2, sgrtNum = Math.floor(Math.sqrt(num)); i <= sgrtNum; i+=1) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
// checking numbers from 1..99999
let isCheckinCalc = (function(){
// simple numbers in the range 1..sqrt (99999) calculus
let masCheking = [];
	for (let i = 2; i < 316; i+=1) {
		if (isChecking(i)) {
			masCheking.push(i);
		}
	}
	return function(num){
		for (let i = 0, sgrtNum = Math.floor(Math.sqrt(num)); masCheking[i] <= sgrtNum; i+=1) {
		if (num % masCheking[i] === 0) {
			return false;
		}
	}
	return true;
	}
})();

let palindromNumbers = function(str){
	for (var i = 0; i < str.length / 2; i+=1) {
		if (str[i] != str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
}

let palindromProduct = function(){
	let masChekingBig = [];
// find a prime
	for (var a = 99999; a>=10000; a-=1) {
		if (!isCheckinCalc(a)) {
			continue;
		}

		// previously found primes
		masChekingBig.push(a);
		for (let j = 0; j < masChekingBig.length; j+=1) {
			let b = masChekingBig[j];
			if (palindromNumbers(''+(a*b))) {
				// when `a` and`b` are as much as possible
				return{
					"value" :a * b,
					"factors" : [a, b]
				}
			}
		}
	}
}

console.log(palindromProduct());





