// 1
// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click', function(){
//   console.log('Click!!');
//   boxEl.classList.add('active');
//   console.log(boxEl.classList.contains('active'));
//   boxEl.classList.remove('active');
//   console.log(boxEl.classList.contains('active'));
// });


// 2
// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function(boxEl, index){
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl)
// });


// 3 
const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);

boxEl.textContent="HI@@@@";
console.group(boxel.textContent);







// 1
//HTML 요소 (Element) 1개 검색/찾기
const boxEl2 = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드!
boxEl2.addEventListener();

// 인수(Arguments)를 추가 가능!
boxEl2.addEventListener(1, 2);

// 1-이벤트(Event, 상황)
boxEl2.addEventListener('click',2);

// 2-핸들러(Handler,실행할 함수)
boxEl2.addEventListener('click', function () {
  console.log('Click~!');
});

// 요소의 클래스 정보 객체 활용
boxEl2.classList.add('active');
let isContains = boxEl2.classList.contains('active');
console.log(isContains); // true

boxEl2.classList.remove('active');
isContains = boxEl2.classList.contains('active');
console.log(isContains); // false


//2
// HTML 요소 (Element) 모두 검색/찾기
const boxEls2 = document.querySelectorAll('.box');
console.log(boxEls2);

// 찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEls2.forEach(function () {});

// 첫 번째 매개변수 (boxEl2) : 반복 중인 요소
// 두 번째 매개변수 (index) : 반복 중인 번호
boxEls2.forEach(function (bexEl2, index) {});

// 출력
boxEls2.forEach(function (boxEl2, index){
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl2);
});

// 3
// Getter, 값을 얻는 용도
console.log(boxEl2.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl2.textContent='HEROPY';
console.log(boxEl2.textContent); // HEROPY