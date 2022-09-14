//문제 풀이방법 및 공부방법
//1.변수를 선언하고 문자열을 넣을 수 있나?
//2.문자열 안에 특정 문자열이 있는지 검사할 수 있나?
//3.그 검사결과를 조건문에 사용하여 콘솔에 "안녕하세요"를 찍을 수 있나?




// 조건문 예시
//if 를 세번 쓰는 것보다 하단처럼 하는 것이 컴퓨터가 일을 '덜' 한다.
let num1 = 10;
if(num1 < 0){
    console.log("음수입니다.")
}else if(num1 < 10){
    console.log('10보다 작은 양수입니다.')
}else{
    console.log("10보다 큰 양수입니다.")
};

//문제1. 주어진 수가 짝/홀수인지 판단하기.

let num2 = 11;
if(num2%2==0){
    console.log("짝수")
}
else{console.log("홀수")};

//문제2. 입력된 변수가 숫자인지 아닌지 판별하기.

// let a = 5;
// if(a ==  ){console.log("숫자입니다.")}
// else{console.log("숫자가 아닙니다.")}

let a = "aaa";
if(typeof(a)=='number'){
    console.log("숫자입니다")
}
else{
    console.log("숫자가 아니무니다")
};

//문제3. 변수가 3의 배수인지 판별하기.
let b = 10;
if(b%3==0){a
    console.log('3의 배수입니다')
}
else{console.log('3의 배수가 아닙니다.')};

//문제4 반지름이r인 원의 넓이를 구하세요 // 조건문 아님
//원 넓이 = 3.141592 * r * r
let r = 3;
let PI = 3.141592;
let 원넓이 = PI * r * r;
console.log(원넓이);

//문제5. 숫자가 3의 배수면 3의배수, 5의 배수면 5의배수라고 출력하되
//15의 배수라면 15의 배수라고만 출력해주세요
//(3,5배수인지는 출력하지말아라)
let num5 = 65;
if(num5%15==0){
    console.log("15배수")
}
else if(num5%5==0){
    console.log("5의배수")
}
else {
    console.log("3의배수")
}

//문제6. 첫번째수에 두번째수가 몇 번 들어있나 출력해보세요
//예: 123456789101112, 2라면 2번


//문제7. 세 숫자를 비교하여 가장 큰 숫자를 출력해보세요
let e=4;
let f=5;
let g=6;
let max = e; //임시로 아무 숫자를 max로 가정

if(f>max){
    max=f;
}
if(g>max){
    max=g;
}
console.log(max);



//문제7-1.
let h = 7685768678867867;
let i = 8678754857;
let j = 459834329058403954;
let maximum = h;

if (i > maximum){
    maximum = i
}
if(j > maximum){
    maximum = j
}
console.log(maximum);


//문제8. 문자열이 들어있는 변수에 "안녕"이 들어있으면 "안녕하세요"를 콘솔에 찍으세요

let str = '안녕하세요';
if(str.includes ('안녕'))
{console.log('안녕하세요')}
else {
    console.log('안녕이 없습니다.')
}

//문제8. 0~100의 점수가 들어있는 변수의 등급을 출력해보세요.
// 90점 이상 = 수, 80점대 = 우, 70점대 = 미, 60점대 = 양, 60미만 = 가

let score = 80;
let grade = '';


if( score >= 90){
    grade = '수';
}
else if(score >= 80){
    grade = '우';
}
else if(score >= 70){
    grade = '미';
}
else if( score >= 60){
    grade = '양';
}
else{
    grade = '가';
}
console.log(grade);
//문제9. 분을 입력하면 몇시간 몇분인지를 알려주세요
//예:380분 --> 6시간 20분
let hours;
let minutes;
let time = 380;
minutes = time % 60; // 나눠떨어지지 않는 분

time -= minutes; // 깔끔한 시간단위의 분
// -= 는 할당 연산자.

hours = time /60;
console.log(hours+"시간" +minutes+"분")
