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
function isOdd(판단할숫자,짝수일때호출할함수,홀수일때호출할함수){
    if(판단할숫자%2==0 ){
        짝수일때호출할함수();
    }else {
        홀수일때호출할함수();
    }
}


function callBackEven(){
    console.log("짝수입니다.")
}
function callBackOdd(){
    console.log("홀수입니다.")
}


//함수호출
isOdd(2,callBackEven,callBackOdd)



// var, let, const 차이점 : 구글링


