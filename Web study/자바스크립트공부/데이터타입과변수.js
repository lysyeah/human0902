
console.log(typeof("hi")); //string
console.log(typeof(100)); //number
console.log(typeof(3.141592)); //number
console.log(typeof("100")); //string
var a;
console.log(typeof(a)); //undefined
var b = "hi";
console.log(typeof(b)); //string
console.log(typeof(null)); //object
    //자바 스크립트의 버그. 지금 고쳐버리면 사회가 망가진다.
console.log(typeof(true)); //boolean

// alt shift 방향키 = 복사.

var 변수1 = 513;
변수1 = "급변경"
console.log(typeof(변수1))
// 자바에서는 실행이 안됨. 
// int 변수2 = 513;
// 변수2 = "갑자기 변경"

let num1 = 123;
let num2 = 45;
num2 += 4; //num2 = num2 +4;
console.log(num2);

let 변수3 = 333;
let 변수4 = "333";
console.log(변수3==변수4);
// == 면 값을 비교
// === 면 값과 데이터 타입을 같이 비교

