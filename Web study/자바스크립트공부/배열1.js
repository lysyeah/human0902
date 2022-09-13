// let colorArr = ['빨','주','노','초','파','남','보'];
// // console.log(colorArr);

// console.log(colorArr[1]);// 1번 인덱스에 있는 값 출력하기
// colorArr[2]= '노란색'; //재할당 가능하다.
// console.log(colorArr[2]);
// console.log(colorArr); //전체 확인해보기

// let strNumArr = new Array('zero','one','two','three');
// console.log(strNumArr[3]);

// let arr1 = ['1', '이', 3, 'four','4','five','5','5'];
// console.log(arr1);

// console.log(arr1.indexOf('이')); //숫자 5의 값을 가진 첫 번째 인덱스 가져오기. //1
// console.log(arr1.lastIndexOf('5')); //7
// console.log("길이: " + arr1.length); //8
// console.log(arr1[10]); // 인덱스 길이를 넘어가면 // undefined 뜬다.


// // 전체 원소 출력하기.
// for(let i =0; i<5; i++){
//     console.log(arr1[i]);
// }


// for(let 원소 of arr1){
//     console.log("향상된 포문에서 원소:" + 원소);
// }

// //예제. 인자2개(첫번째는 검사할 이름, 두번째는 배열) 동물 이름이 있는지 검사하는 함수 만들기.
// let animals = ['tiger','lion','rabbit','rat','cat','dog','whale'];
// function isExist(name,arr){
//     for(let i=0; i<arr.length;i++){
//         if(name== arr[i]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isExist('tiger',animals));


//문제1. 한글로 연예인 배열을 주고, 이름이 2 글자인 연예인이 몇 명 있는지 리턴하는 함수 만들기.
//1.1 한글연예인이름을 원소로 가지는 배열 초기화
//1.2 함수 껍데기
//1.3 함수에 배열 전달
//1.4 전달받은 배열 반복문으로 모든 요소 순회
//1.5 해당 요소의 글자 수 파악
//1.6 글자 수가 2이면 count변수에 1증가
//1.7 모두 더한 count 변수 리턴


let celebrity = ['원빈','태연','이용수','정민경','홍승기','현빈','김흥국','으아','들이대'];

function count2char(nameList){
    let 갯수 = 0;
    for(let n=0; n<nameList.length; n++){
        if(nameList[n].length == 2){
            갯수 ++;
        }
    }
    return 갯수;
}
console.log(count2char(celebrity));


//문제2. 막무가내로 긴 숫자 6 개를 넣은 배열에서 제일 큰 숫자 출력하기.
//2.1 랜덤 큰 숫자를 원소로 하는 배열 초기화.
//2.2 함수 껍데기
//2.3 함수에 배열 전달
//2.4 가장 큰 수를 저장할 변수 초기화
//2.5 요소를 순회하면서  가장 큰 수보다 이번 요소가 큰지를 검사
//2.6 크면 가장 큰 수를 이번 요소로 바꿔치기
//2.7 다 돌고나면 가장 큰 수를 출력

//2.2에서 함수 정의 시에 input, output 어려움 경험중
//숫

let randomNum = [2134295,8346765342,21342,315236232365,272398074,42109837];

function printBiggest(){
    
}


//문제3. Math.random ()을 쓰면 0~1까지의 소수가 생성된다.
// 여기에 100을 곱하면 0~100까지의 소수가 만들어진다.
// 10개의 0~100까지의 랜덤 수를 만든 다음 50이상의 수의 갯수를 출력하기.



//문제4. 첫번째 인자(배열)의 가장 큰 수와 두 번째 인자(배열)의 가장 작은 수를 곱한 수를 출력하는 함수 mulMaxMin()