// function printWhat(what){
//     console.log(what);
// }
// let str2 = "초코우유";
// printWhat(str2)


// matchQuiz("광개토대왕", 정답함수, 오답함수)
// function 정답함수(){        //콜백함수
//     console.log("정답입니다.!!")
// }
// function 오답함수(){        //콜백함수
//     console.log("오답입니다.!!")
// }

//함수 정의
// function matchQuiz(answer, printTrue, printFalse){
//     if(answer=="무령왕릉"){
//         printTrue();
//     }else{
//         printFalse();
//     }
// }

//동기 = synchronous : 요청과 결과가 동시에 일어남.
//비동기 = unsynchronous : 요청과 결과가 동시에 일어나지 않음.

//함수 호출
// matchQuiz("광개토대왕", 정답함수, 오답함수)


//문제1. isOdd(판단할숫자,짝수일때호출할함수,홀수일때호출할함수)

//함수정의
// function isOdd(판단할숫자,짝수일때호출할함수,홀수일때호출할함수){
//     if(판단할숫자%2==0 ){
//         짝수일때호출할함수();
//     }else {
//         홀수일때호출할함수();
//     }
// }


// function callBackEven(){
//     console.log("짝수입니다.")
// }
// function callBackOdd(){
//     console.log("홀수입니다.")
// }


//함수호출
// isOdd(2,callBackEven,callBackOdd)

// 2022.09.13.화

// var, let, const 차이점 : 구글링

// console.log(r); // 순서3. r is not defined
// r = 5; //순서2. 할당
// var 5; //순서1. 선언
//let 일 때 에러 뜸. cannot access to 'r' before initialization
//var 일 떄 에러 안 뜸. undefined
//let은 호이스팅이 안된다 라고 설명된 곳이 많지만 그게 아니고 호이스팅 되지만 TDZ temporal dead zone에 있기 때문에 사용 못하는 것이다.

// let result = "초기화 결괏값"
// console.log(result);
// age=50;
// if(age<100){
//     result= "100살 이하입니다."
//     console.log("if문 안에서 찎은 result:" +result);
// }

//블록의 유효범위 
//var는 함수 유효 범위, let은 블록유효범위
// var number = 10;
// if(number > 5){
//     var number = 50;
// }
// console.log(number); //50;

// let number = 10;
// if(number > 5){
//     let number = 50;
// }
// console.log(number); //10;


// for(var i=1; i<5;i++){
//     console.log(i);
// }
// console.log("for문 끝난 뒤의 i :"+i);
//i가 let일 때 not defined
//i가 var일 때

// var problem = "전역변수"
// function 바는문제(){
//     var problem = "지연변수";
//     console.log("함수 안에서 찍은 변수:" + problem);
// }
// console.log("함수밖에서 찍은 변수:" + problem)

//문제2. 함수 심화
// 템플릿 리터럴 ' 문자열블라블라 ${변수} 블라블라'
// 콜백함수
// function introduce(firstName, lastName,hello)를 완성하기
// lastName 이 "홍"이거나 "hong"일때만 hello를 실행하세요
// hello함수는 성과 이름을 붙여서 자기를 소개하는 함수입니다.


// function hello(이름){
//     console.log(`안녕하세요 저는 ${이름} 입니다.`);
// }

// function introduce(firstName, lastName, hello){
//     if(lastName === "홍" || lastName === "hong"){
//         let fullName = lastName+firstName;
//         hello(fullName);
//     }
// }

// introduce("길동", "홍", hello);

// 문제3. 함수 심화
// 함수 이름 : addTotal
// 인풋 : 자연수 1개
// 본문 : 1부터 입력받은 자연수까지 숫자1씩 더한 모든 자연수의 합을 리턴
// 예 : f(2) = 1+2
//      f(5) = 1+2+3+4+5
//      f(10) = 1+2+3+4+5+6+7+8+9+10

//
// function addTotal(inputNumber){
//     let total = 0; //return 할 변수를 선언
//     for(i=1; i<=inputNumber; i++){ 
//         total += i;
//         }
//         return total;
// }
// console.log(addTotal(3))

//문제4.
// function addTotal2(inputNum){
//         if(inputNum<1){
//             return 0;
//         }
//         return addTotal2( inputNum-1 ) + inputNum;
//     }
// console.log(addTotal2(2)); // f(0)+1;
// console.log(addTotal2(5)); // f(4)+5;
                // f(4)가 먼저 풀려야함
                // f(4)를 풀기 위해서느 f(3)이 먼저 풀려야함.
                // ...
                // f(1)을 풀기 위해서는 f(0)이 먼저 풀려야함.
                // f(0)을 0으로 주고 거기서 더 이상 호출없이 끊어주면 되겠네.


//문제5. 팩토리얼 함수 만들어보기.
// function factorial(inputNum){
//     if(inputNum<=1){
//         return 1;
//     }
//     return inputNum * factorial(inputNum-1);
// }
// console.log(factorial(4));

//문제6. buyMouse()
// 인풋: 2개 (브랜드, 지불한돈)
    // 삼성 35,000원, dell 32,000원, lg 28,000원, razor 60,000원
//아웃풋 : 거스름돈
function buyMouse(브랜드,지불한돈){
    switch(브랜드){
        case "삼성": 
            거스름돈 = 지불한돈 - 35000;
            break;
        case "dell": 
            거스름돈 = 지불한돈 - 32000;
            break;
        case "lg": 
            거스름돈 = 지불한돈 - 28000;
            break;
        case "razor":
            거스름돈 = 지불한돈 - 60000;
        default : 
            거스름돈 = -99999;
    } 
    return 거스름돈;
}
console.log(buyMouse("razor",60001))



//문제7. 위에서 만든 buyMouse함수를 사용해서 지불한 돈으로
    // 해당 브랜드의 제품을 몇 개 살 수 있는지 출력해보기. //생각할 일

function howManyBuy(){
    let brand="삼성";
    let money = 34000;
    let 거스름돈 = 0;
    let 갯수 = 0;
    console.log('do실행전')
    do{
        console.log('do실행직후')
        거스름돈 = howManyBuy(brand,money); // 일단 구매 시도
        console.log('do실행. 거스름돈:' + 거스름돈 )
        갯수++;
        money = 거스름돈; // 새로운 인풋 금액은 남은 거스름돈으로 세팅
    }while(거스름돈>=0); // 거스름돈이 0이상이라는 것은 구매하고도 남았거나 딱 맞다는 것.
    console.log("최종 구매 갯수:" + 갯수);
}
howManyBuy();


