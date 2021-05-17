const a = 'Hello~';
// 1. split : 문자를 인수 기준으로 쪼개서 배열로 반환
// 2. reverse : 배열 뒤집기
// 3. join : 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse('').join(''); // 메소드 체이닝

console.log(a);
console.log(b);