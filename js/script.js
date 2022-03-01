'use strict';

// JavaScript statement vs Expression
function sum(number1,number2)
{
	const result = number1 + number2;
	return result;
}
console.log(sum(90,90));

// simple way statement and expression
const getNumber = 20;
const addition = function(num1,num2)
{
	const add = num1 + num2;
	return (add);
}
console.log(addition(12,34));
console.log(addition(12,12));

// Better way expression and statement 
let getNumber1 = 90;
let getNumber2 = 90;
if(getNumber1 === getNumber2)
{
	console.log('This is statement and expression');
}

// JavaScript arrow function
const sumation = (num1,num2) => 
{
	const result = num1 + num2;
	return result;
}
console.log(sumation(90,88));

const sumation2 = (num1,num2) => num1 + num2;
console.log(sumation2(90,90));

// another way to write it 
const sumation3 = (num1,num2) => num1 + num2;
console.log(sumation3(10,10));

const sumation4 = num1 => num1 + num1;
console.log(sumation4(50));

const myArrowFunc = (arr) => 
{
	let number = 0;
	for(let i = 0; i <= arr.length; i++)
	{
		number += i;
	}
	console.log(number);
}
myArrowFunc([1,2,3,4,5]);

// Example of First class function
function higherOrderFunc(fn)
{
	fn();
}

higherOrderFunc(function()
{
	console.log('Hello world do you know me ? ');
})

// another example
function myHigherOderFunction(fun1,fun2)
{
	fun1();
	fun2();
}

myHigherOderFunction(function()
{
	let num1 = 90;
	let num2 = 30;
	let result = num1 + num2;
	console.log(result);
},function()
{
	let num1 = 100;
	let num2 = 200;
	let result = num1 + num2;
	console.log(result);
});

// other example
let test1 = null;
let test2 = null;
function myNewHigherOrderFunc(func1,func2,func3)
{
	func1();
	func2();
	func3();
}
myNewHigherOrderFunc(function()
{
	console.log('This is function');
}, test1 = (fun2) =>
{
	// calculation
	let number1 = 100;
	let number2 = 40;
	let result = number1 + number2;
	console.log(result);
}, test2 = num1 => num1 * num1);
console.log(test2(20));

// another Example 
let functionTwo = null;

// highter order function start here 
const myNewHigherOrderFunc11 = (fun1,fun2,fun3) => 
{
	fun1();
	fun2();
	fun3();
}

// Callback function star here 
myNewHigherOrderFunc11(function()
{
	const getNumber1 = 10;
	const getNumber2 = 10;
	if(getNumber1 === getNumber2)
	{
		console.log('Your registation has been succesfully sumited');
	}else{
		console.log('My registation is fail');
	}
},functionTwo = () => 
{
	let number1 = 70;
	let number2 = 80;
	const ternary = (number1 === number2) ? 'Successfull' : 'Failer';
	console.log(ternary);
},function()
{
	let num = 900;
	switch(num)
	{
		case 100 :
			console.log('This is 100');
		break;
		case 200 :
			console.log('This is 200');
		break;
		case num :
			console.log('This is 900');
		break;
		case 4000 :
			console.log('This is 4000');
		break;
		default :
			console.log('Invalid feedback');
		break;
	}
});

// My last higher order function start here 
const myHigherOrderFuction = (fun1,fun2,fun3) =>
{
	fun1();
	console.log(fun2());
	console.log(fun3(1,2,3));
}

let higherFun1 = null;
let higherFun2 = null;
let higherFun3 = null;
myHigherOrderFuction(higherFun1 = (num1 = 10,num2 = 10) => 
{
	num1 = 90;
	num2 = 90;
	let result = num1 + num2;
	console.log(result);

}, higherFun2 = (userName,userEmail,userPhone,userPassword,userGender) => 
{
	userName = 'Najim vuiya';
	userEmail = 'najim@gmail.com';
	userPhone = '01310010454';
	userPassword = 'klsjdfoaif';
	userGender = 'male';
	return `
	My user name is : ${userName}.
	My user email is : ${userEmail}.
	My user phone is : ${userPhone}.
	My user password is : ${userPassword}.
	My user gender is : ${userGender}.
	`;
},higherFun3 = (number1,number2,number3) => 
{
	let totalAbount = number1 + number2 + number3;
	return (totalAbount);
});

// other way higherOrderFunction
function goodWayHigherOrderFunction(fun)
{
	const objectLoop = fun([12,34,55,35]);

	for(let loop1 in objectLoop)
	{
		console.log(objectLoop[loop1]);
	}
}

goodWayHigherOrderFunction(function(num1)
{
	let totoalValuSumation = 0;
	num1.forEach((value,index,fullArray) => 
	{
		totoalValuSumation += value;
	});
	console.log(totoalValuSumation);

	// object start here
	const userInfo = 
	{
		name : 'Kamal miah',
		email : 'kamal@gmail.com',
		phone : '938273409',
		password : 'kdjf0sf',
		gender : 'male'
	}
	return userInfo;
});


// other exampe of higher order function 
function higherOrderFunctions(fn)
{
	fn(2,2);
}
const callBack = function(num1,num2)
{
	console.log(num1 + num2);
}
higherOrderFunctions(callBack);


// This example i need to practice right now 
function myHigherOrderFunction(fun1,fun662,fun3)
{
	fun1([11,23,553,89],{countryName : 'Bangladesh',city : 'Dhaka'},89789);
	//console.log(fun2('Robya akter','robya@gmail.com','8934245426','89sdfaf','female'));
	
}

const funs1 = (arr,obj,num) => 
{
	console.log(arr);
	// array value showing
	for(let loop1 = 0; loop1 < arr.length; loop1++)
	{
		console.log(arr[loop1]);
	}

	// get object vlaue
	console.log(obj);
	for(let getObj in obj)
	{
		console.log(obj[getObj]);
	}
	console.log(num);
}
myHigherOrderFunction(funs1);



// another way higher order function here
const myHigherOrderFun = (fun,fun2,fun3) =>
{
	const myFunc1 = fun([9204,'Tajin akter',true,988767,false,'time',90.98],{uName : 'Mahmuda akter', uPassword : '8767834s',uPhone : 74927345},'Tajin akter','tajin@gmail.com','98sidffa');
	console.log(myFunc1);
}

const myFun1 = (array,objec,name,email,password) => 
{
	return `
	My total value array is : ${array}.
	My total value of object : ${objec}.
	My name is : ${name}.
	My email is : ${email}.
	My password is : ${password}.
	`;
}
myHigherOrderFun(myFun1);

const arrowFun3 = null; 
const myHigherOrderFunction222 = (function1,function2,function3) => 
{
	const fun1Result = function1([1,24,'Bangladesh',80,true],{name : 'Najim vuiya',digit : 87,prodect : true},'Robya akter','robya@gmail.com','u989df');
	console.log(fun1Result);

	const fun2Result = function2('Mahmuda akter','mahmuda@gmail.com','014389742942','ljsdif9s','gender');
	console.log(fun2Result);
} 

myHigherOrderFunction222(function(arr,obj,name,email,password)
{
	return `
	${arr}.
	${obj}.
	${name}.
	${email}.
	${password}.
	`;
},function(name = 'Tajin akter',email = 'tajin@gmail.com',phone = '01338742432',password = 'jf98a9f',gender = 'female')
{
	return `
	my name is : ${name}.
	my email is : ${email}.
	my phone is : ${phone}.
	my password is : ${password}.
	my gender is : ${gender}.
	`;
});

// another example of sumation
function sum(num1)
{
	return function innerFunct(num2)
	{
		return num1 + num2;
	}
}

const result1 = sum(10)(10);
console.log(result1);


function sumation11(num1)
{
	return function(num2)
	{
		return function(num3)
		{
			let result = num1 + num2 + num3;
			return result;
		}
	}
}

const myResult = sumation11(10)(10)(10);
console.log(myResult);


// shortcut adding 2 value
let num$$ = null;
const sum11 = (num1) => 
{
	return num$$ = (num2) => 
	{
		return num1 + num2;
	}
}

const result33 = sum11(10)(90);
console.log(result33);

// another way tow number additions
function addition1(number1)
{
	return function(number2) 
	{
		return number1 + number2;
	}
}
console.log(addition1(90)(90));

// or
function sums(num1)
{
	return function innerfn(num2)
	{
		return num1 + num2;
	}
}
let inner = sums(80);
console.log(inner(10));

// another way tow write it 
function additionNumber(num1)
{
	return (num2) => 
	{
		return num1 + num2;
	}
}
const result1111 = additionNumber(12)(30);
console.log(result1111);

// other way to write it
function additionNumbers(num1)
{
	return (num2) => 
	{
		return num3 => {
			return num1 + num2 + num3;
		}
	}
}
const result22 = additionNumbers(89)(333)(90);
console.log(result22);

// better way to write it 
function sumations$(num1)
{
	return num2 => num1 + num2;
}
const resultst = sumations$(60)(40);
console.log(resultst);

// JavaScript (this) keyword
const that = this;
const $this = this;

// another way to write this 
console.log(that);
console.log($this);

// other example of this keyword
function thisFun()
{
	console.log(that);
}
thisFun();

/*
const this$ = this.alert('random');
console.log(this$);
*/
// exaple of this :
const profile = 
{
	firstName : 'Kamal',
	lastName : 'miah',
	fullName()
	{
		return this.firstName + ' ' + this.lastName;
	}
}
console.log(profile.fullName());


const myUserInfo = 
{
	name : 'Najim',
	email : 'vuiya',
	phone : '083492424',
	password : '89usfa',
	gender : 'male',
	totalValue : function()
	{
		return `
		Name : ${this.name}.
		Email : ${this.email}.
		Phone : ${this.phone}.
		Password : ${this.password}.
		Gender : ${this.gender}.
		`;
	}
}
console.log(myUserInfo);

const getMyUserInfoValue = myUserInfo.totalValue();
console.log(getMyUserInfoValue);


// this keyword with call method
function fullName(age)
{
	return this.firstName + this.lastName;
}

const test = fullName.call({firstName:'kamal ', lastName : 'maih'});
console.log(test);

function myNewFullName(number)
{
	let Fname = 'Najim ';
	let Lname = 'Vuiya';
	let emai  = 'najim@gmail.com';
	return `
	first name is : ${this.Fname}.
	last name is : ${this.Lname}. 
	user email is : ${this.emai}.
	`;
}
const resultss = myNewFullName.call({Fname : 'Tajin ',Lname : 'akter', emai : 'tajin@gmail.com'},44);
console.log(resultss);

// another example 
function userValue(num1,num2)
{
	return `
	First name is : ${this.firstName}.
	Last name is : ${this.lastName}.
	Full name is : ${this.fullName}.
	Emaild address is : ${this.emailAddress}.
	Phone number is : ${this.phone}.
	Password is : ${this.password}.
	Gender is : ${this.gender}.
	Addition : ${num1 + num2}.
	`;
}

const result50 = userValue.call({firstName : 'Robya ', lastName : 'akter',fullName : 'Robya akter', emailAddress : 'robya@gmail.com', phone : '0143749285492', password : 'ldjfafa', gender : 'male'}, 90 + 90);
console.log(result50);

// JavaScript apply method start here
const fullNames1 = (age1,age2) =>
{
	const myObj = 
	{
		Channalname : 'Konttam motivation',
		year : 5,
		worker : 50,
		iLikeIt : true,
		myFunc : function(num1,num2,name = "Najim vuiya")
		{
			return `
			${this.Channalname}.
			${this.year}.
			${this.worker}.
			${this.iLikeIt}.
			${num1}.
			${num2}.
			${num1 + num2}.
			${name}.
			`;
		}
	}
	const myObjResultw = myObj.myFunc.apply(myObj,[20,90,'Robya akter']);
	console.log(myObjResultw);
}
fullNames1();

// Anoter example with apply method 
const newApply = 
{
	name : 'Kamal miah',
	email : 'kamal@gmail.com',
	phone : '90384028',
	getResult : function(num1,num2) 
	{
		return `
		${this.email}.
		${this.name}.
		${this.phone}.
		${num1+num2}.
		`;
	}
}

const resultsssm = newApply.getResult.apply(newApply,[10,90]);
console.log(resultsssm);

// JavaScript bind method start here 
const IraqInfo = 
{
	name : 'Gias uddin vuiya',
	email : 'giasuddin609@gmail.com',
	phone : '01310010347',
	password : 'ksjdf9',
	gender : 'male',
	function(num1,num2,num3)
	{
		return `
		My name is : ${this.name}.
		My email address is : ${this.email}.
		My phone number is : ${this.phone}.
		My password is : ${this.password}.
		My gender is : ${this.gender}.
		${num1}.
		${num2}.
		${num3}.
		Totoal result is : ${num1 + num2 + num3}.
		`;
	}
}

const bindResult = IraqInfo.function.bind(IraqInfo,12,34,65);
console.log(bindResult());

// another example:
console.log('-----');
const bangladeshInfo = 
{
	name : 'Mahmuda akter',
	email : 'mahmuda@gmail.com',
	phone : '01397437344',
	password : '9s7df98asf',
	gender : 'female',
	function(number1,numer2,number3)
	{
		return `
		My name is : ${this.name}.
		My email is : ${this.email}.
		My phone number is : ${this.phone}.
		My password is : ${this.password}.
		My gender is : ${this.gender}.
		${number1}.
		${numer2}.
		${number3}.
		${number1 + (numer2 * number3)}
		`;
	}
}
const myResult21 = bangladeshInfo.function.bind(bangladeshInfo,12,34,56);
console.log(myResult21());

// JavaScript constructor
function Profile()
{
	console.log(this);
}
const testttt = new Profile();
console.log(testttt)


// better way to write constructor 
function Myprofile()
{
	this.fName = 'Hono';
	this.lName = 'monu';
	this.fullName = function()
	{
		return this.fName + this.lName;
	}
}

const myProfileValue = new Myprofile();
console.log(myProfileValue);

// example of my constructor
const MyUserProfile =
{
	name : 'Najim vuiya',
	email : 'Najim@gmail.com',
	phone : '3281038453',
	password : '8asfiou',
	gender : 'male',
	getValue : function()
	{
		return `
		Name is : ${this.name}.
		Email is : ${this.email}.
		Phone is : ${this.phone}.
		Password is : ${this.password}.
		Gender is : ${this.gender}.
		`;
	}
}

// another way try it 
function Comment()
{
	this.firstName = 'Tamnna';
	this.lastName = 'akter';
	this.fullName = function()
	{
		return this.firstName + this.lastName;
	}
}
const comment = new  Comment();
console.log(comment);

// another example

const MyNewObject = 
{
	name : 'Halim miah',
	email : 'halim@gmail.com',
	phone : '013398749225',
	password : 'jds809df',
	gender : 'male',
	gtValues : function()
	{
		let $this = this;
		return $this.name + $this.email + $this.phone + $this.password + $this.gender;
	}
}

const Unic = function(name,email,phone,number)
{
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.number = number;
}

let constructorValue1 = new Unic ('Tajin akter','tajin@gmail.com','093290482',867234);
console.log(constructorValue1.name);

let constructorValue2 = new Unic ('Mahmuda akter','mahmuda@gmail.com','01498457982',7865);
console.log(constructorValue2);

// function constractor start here
const MyfinalConstractor = function(name,email,phone,password,gender)
{
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.password = password;
	this.gender = gender;
}

const value1 = new MyfinalConstractor('Tajin akter','tajin@gmail.com','9327497294','ksjdf98a','female');
console.log(value1);


const value2 = new MyfinalConstractor('Mahmuda akter','mahmuda@gmail.com','9389797294','8s7d9fa','female');
console.log(value2)
for(let loops in value2)
{
	console.log(value2[loops]);
}

// My new functoion consturctor
const NewFunctonContractor = function(name,email,phone,password,gender)
{
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.password = password;
	this.gender = gender;
}

const construtor1 = new NewFunctonContractor('Kamal miah','kamal@gmail.com','01310939482','98s0fasfa','male');
console.log(construtor1);
const construtor2 = new NewFunctonContractor('Mamuda akter','mahmuda@gmail.com','9023749127','uisodfa','female')
console.log(construtor2);

// JavaScript Dom manipulition
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');

console.log(box1);
console.log(box2);


