// //정의 : function함수명(인자){본문};

function printhello(name){
    console.log(name+"님 반가워요");
}
//호출 : 함수명(인자전달);



function add(num1,num2){
    return num1 + num2;
}
let result = add(5,23);

let result2 = add(3,5);
let result3 = add(92,5);
let result4 = result2 + result3;
console.log(result4);
//input, output


//문제1. 3 개의 숫자를 받아서 합을 리턴하는 함수 구해보세요.

// function add(num1,num2,num3){
//     return num1+num2+num3
// }
// console.log(add(3,5,8))

//문제2. 두 수를 입력받아서 더 큰 수를 리턴하는 함수를 만들어 보세요.
// function getBigger(num1,num2){
//     if (num1 > num2){
//         return num1;
//     }else if ( num1 == num2){
//         return("두 수는 같습니다.")
//     }else
//         {return num2;
//     }
// }
// console.log(getBigger(82,83));

//문제3. 가로와 높이를 입력받아 삼각형의 넓이를 구하는 함수
//내가 한 것.
// function triangleArea(width,height){
//     return width*heioght/2;
// }
// console.log(triangleArea(3,4));

// 선생님이 한 것.
// function calcTriArea(width,height){
//     if(width<0 || height<0){
//       return false;
//     }
//     return 0.5*width*height;
// }
// let result = calcTriArea(-3,8);
// if(result == false){
//     console.log("양수를 입력하세요");
// }
// else{
//     console.log(result);
// }

//문제4. 첫 번째 수부터 두 번째 수까지 자연수의 총합을 구하는 함수
//예) 함수(1,100) == 5050


// function sum(startNum, endNum){
//     let total = 0;
//     for(let i=startNum; i<=endNum; i++){
//         total+=i;
//     }
//     return total;
// }

// let result = sum(1,10);
// console.log(result);

//문제5. 문제4를 가우스가 푼 방식으로 풀어보기.

//방법1
// function gauseSum(startNum, endNum){
//     let 합친수 = startNum+endNum;
//     let 갯수 = (endNum-startNum+1)/2 ;
//     let 합계 = 합친수 * 갯수;
//     return 합계;
// }
// console.log(gause(2,10));

//방법2


//문제6. 숫자 하나를 받아서 구구단 중 해당 단만 출력하는 함수를 만들어보세요.
//1.함수이름
//2.인자
//3.본문
//4.리턴값
// function printDan(dan){
//     for(let i=1; i<=9; i++){
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }
// printDan(1);

//문제6.에서 printDan함수내부를 고치지 말고 그대로 활용하여, 구구단 전체를 찍어보세요.
//단 끼리는 한 줄 띄어쓰기.
// function printGugudan(){
//     //반복문 돌면서 dan에 1부터 9까지 넣어주면 된다.
    
//     for (dan=1;dan<=9;dan++){
//         printDan(dan);
//         console.log("");    
//     }
    
// }
// printGugudan()

//문제7. printUpgradeGugudan(n,m)함수    // n단부터 m단까지만 출력해보세요.
// function printUpgradeGugudan(n,m){
    
//     for (dan=n;dan<=m;dan++){
//         printDan(dan);
//         console.log("");    
//     }
    
// }
// printUpgradeGugudan(3,5)



//오후

//문제1. 인자 2 개를 받아서 큰 수에서 작은 수를 뺀 값을 출력하는 함수

//참고한 것.
// function add(num1,num2,num3){
//     return num1+num2+num3
// }
// console.log(add(3,5,8))

//출력도 하지 않고 있었고, 리턴도 하지 않고 있었다는 말을 듣고 풀었다.
// function MinusSmallFromBig(a,b){
//     if(a > b){
//       return  a-b
//     }else {
//       return  b-a
//     }
// }

// console.log(MinusSmallFromBig(-2,-3));


//문제2. 첫 번째 인자 : 문자열, 두 번째 인자 : 숫자
//      첫 번째 인자를 n번 출력하는 함수.
            // f("bong",3) bong 을 줄 띄우면서 3 번이 아니라 bongbongbong을 찍어보세요.
// function printNtimes(inputStr, n){
//     let result = "";
//     for(let i =0; i<n; i++){
//         result+=inputStr;
//     }
//     console.log(result);
// }
// printNtimes("bong", 3)

//문제3. isOverTen(숫자)는 10보다 크면 true, 이하면 false를 반환하는 함수다.
        //1번에서 만든 함수의 결과값을 인자로 넘겨 "10보다 큽니다","10 이하입니다"를 출력해보세요.
// function isOverTen(숫자){
//     return 숫자>10? true: false;
// }
// let overTen = isOverTen(diffTwoNum(3,9));
//방법1
// (overTen==true)? console.log("10보다 큽니다."): console.log("10이하입니다.")
//방법2
// if(overTen==true){
//     console.log("10보다 큽니다.");
// }else{
//     console.log("10이하 입니다.");
// }


//문제4. calcFigure(도형 이름, 변의 길이)
    //삼각형, 사각형, 원  3 개의 넓이를 구하는 함수를 만들어보세요.
    // 가정: 정삼각형, 정사각형, 원은 변의길이를 지름으로 쓴다.
        //정삼강형공식 = 루트3 / 4 * 한변의 제곱
        //루트 구하기 = Math.sqrt(숫자)
    //저 3 개 말고 들어오면 "지원하지 않는 도형입니다."를 출력하기.

// function calcFigure(도형이름, 변의길이){
//     const PI = 3.141592;
//     switch(도형이름){
//         case '삼각형':
//             return Math.sqrt(3) / 4 * 변의길이;
//         case '사각형':
//             return 변의길이*변의길이;
//         case '원형':
//             return  PI * 변의길이 * 변의길이 * 0.25;
//         default: 
//             console.log("지원하지 않는 도형입니다.");
//             return; 
//     }
// }
// console.log(calcFigure("사각형",5))

