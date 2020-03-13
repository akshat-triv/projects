//object using function constructor
/*
var Person = function (name,age,job) {
	this.name=name;
	this.age=age;
	this.job=job;
};

var akshat = new Person('akshat',18,'student');

Person.prototype.ageAdder = function() {
	console.log(this.name + ' is '+ this.age +' years old. And he\'s a '+this.job);
};

akshat.ageAdder();
*/



//object using object.create

/*

var personProto = {
	ageAdder : function(){
	console.log(this.name + ' is '+ this.age +' years old. And he\'s a '+this.job);
}
};

var akshat = Object.create(personProto);
akshat.name = 'Aksaht';
akshat.age = 18;
akshat.job = 'Student';

akshat.ageAdder();

*/

//First class functions
/*
var arr = [1990,1947,1998,2001,2007];

function arrayCalc(arr,fn){
	arrRes=[];
	for(var i=0;i<arr.length;i++)
		arrRes.push(fn(arr[i]));
	return arrRes;
}

function ageCalc(el){
	return 2019-el;
}

var ages = arrayCalc(arr,ageCalc);

console.log(ages);
ages.sort();
console.log(ages);
*/
//closure and function returning another function
/*
function greeting(job,name){
	return function(type){
			console.log(name + " " + job + " " + type + "." );
	}
}

var sanjay = greeting('Teacher','Sanjay');
sanjay('formal');
*/
(function(){
var structure = function(ques,op1,op2,ans){
	this.ques = ques;
	this.op1 = op1;
	this.op2 = op2;
	this.ans = ans;
}

var i=1,score=0;

var q1 = new structure('who am I ?','Akshat','Abhay','Akshat');
var q2 = new structure('What do I do ?','sleep','code','code');
var q3 = new structure('What\'s my favourite anime','Naruto','DBZNS','DBZNS');

var arr = [q1,q2,q3];

while(i){

var q = Math.floor(Math.random()*3);

console.log(arr[q].ques);
console.log('a. '+arr[q].op1);
console.log('b. '+arr[q].op2);

var answer = prompt("Enter your answer : ");

(function(answer,question){
	if(answer===arr[q].ans){
		console.log('correct answer');
		score++;
		console.log('Score : '+ score);
	}
	else if(answer==='exit')
		i=0;
	else
		console.log('wrong answer');
})(answer,q);

}
})();

















