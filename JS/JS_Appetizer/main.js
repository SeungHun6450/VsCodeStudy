console.log("HEROPY");

// 표기법에서 숫자가 특수한 경우
console.log(new Date('2021-05-15').getDay()); // 6, 토요일
console.log(new Date('2021-05-16').getDay()); // 7, 일요일
console.log(new Date('2021-05-17').getDay()); // 1, 월요일

// String 문자 데이터
let myName = "HEROPY";
let email = 'thesecon@gmail.gom';
// 보간법 (어떠한 내용을 넣기 위해 사용, 백틱(`)을 사용한다)
let hello = `Hello ${myName}!`;

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
let number = 123;
// 부동소수점 숫자
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
let undef;
let obj = { abc:123 };

console.log(undef); // undefined
console.log(obj.abc);
console.log(obj.xyz);

// Null
let empty = null;

console.log(empty);

// Object
let user = {
  // Key : Value
  name : 'HEROPY',
  age : 85,
  isValid : true
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 변수
// 재사용 가능!
let a = 2;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// 값(데이터)의 재할당
a=999;
console.log(a);

// 값(데이터)의 재할당 불가!
const c = 12;
console.log(c);

// c=999;
// console.log(c); // TypeError : Assignment to constant varialbe

// 예약어
// let this = 'Hello'; // SyntaxError
// let if = 123; // SyntaxError
// let break = true; // SyntaxError


// 함수
// 함수 선언
function helloFunc(){
  // 실행코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

function returnFunc(){
  return 123;
}

let d = returnFunc();
console.log(d);

// 함수 선언
function sum(a, b){ // a와 b는 매개변수(Parameters)_데이터를 받아주는 매개체가되는 변수 
  return a+b;
}

// 재사용
let e = sum(1,2); // 1과 2는 인수 (Arguments)
let f = sum(7, 12);
let g = sum(2, 4);

console.log(e, f, g);

// 기명(이름이 있는) 함수
// 함수 선언
function hellow(){
  console.log('hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현
let world = function(){
  console.log('world!');
}

//함수 호출
hellow();
world();

// 객체 데이터
const heropy = {
  name : 'HEROPY',
  age : 85,
  // 메소드(Method)_함수라는 하나의 데이터
  getName : function() {
    return this.name; // this는 this가 속해있는 객체 데이터를 의미
  }
};

const hisName = heropy.getName();
console.log(hisName);
// 혹은
console.log(heropy.getName());


// 조건문
let isShowed = true;
let checkeded = false;

if(isShowed){
  console.log('Show2!');
} else{
  console.log('Hide?');
}

if(checkeded){
  console.log('Checked2!');
}