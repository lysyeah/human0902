//for (시작; 조건; 스탭{본문})
// 문제1. 1부터 100까지 중에 3의 배수를 출력하라.
// for(let a = 1; a<=100; a++){
//     if(a%3==0){
//         console.log(a);
//    }
// } 

//문제2. 1부터 100까지의 모든 수를 더해 보세요.
// let sum = 0
// for(let i = 1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

//문제3. 1부터 100까지 7의 배수가 몇 개 있는지 출력해보세요.
// let count7 = 0;
// for(let c = 1; c<=100; c++){
//     if(c%7==0){
//         count7++;
//     }
// }
// console.log(count7);

//문제4. 10부터 1000까지의 정수 중에 짝수만 큰 수부터 출력하세요.
// for(let d=1000; d>=10;d--){
//     if(d%2==0){
//         console.log(d)
//     }
// }

//문제5. 12345보다 크고 67890보다 작은 수 중에 25의 배수가 몇 개인지 출력해보세요.
// let count25=0;
// for(let e = 12346; e < 67890; e++){
//     if (e%25==0){
//         count25++;
//     }
// }
// console.log(count25);

//문제6. 숫자를 0부터 무한으로 1씩 증가하다가, 17의 배수이며, 짝수이며, 35의 배수인 수를 만나면 그 수를 출력하고 반복을 멈추어라. 
    //break; 를 만나면 반복문을 탈출한다.
    //continue;를 만나면 현재 반복만 탈출하고 다시 다음 조건부터 반복한다.

//내가 한 것
// for(let f = 0; f > 0; f++ ){
//     if(f%17==0){
//         if(f%2==0){
//             continue;
//             {if(f%35==0){
//                 console.log(f)
//             }
//         }
//     }
// }

//선생님이 한 것
// let ans;
// for(let g=1; true; g++){
//     if(g%17==0 && g%2==0 && g%35==0){
//         ans=g;
//         break;
//     }
// }
//console.log(ans);  //1190

//문제7. 2단부터 9단까지 구구단을 출력해보세요.
    //hint : 이중 반복문
    //큰 톱니바퀴는 단을 증가시키고, 그 안의 작은 톱니바퀴는 1부터 9까지 반복

//내가 한것
// for(h=2; h<=9; h++){
//     for(i=1; i<=9; i++){
//         console.log(h+"*"+i+ "="+ h*i);
//     }
//     console.log(''); 
// } 

//선생님이한것
// for(h=2; h<=9; h++){
//     for(i=1; i<=9; i++){
//         //템플릿 레터럴
//         console.log(`${h}*${i}=${h*i}`); // ` = 챔피언만 공격
//     }
//     console.log(''); 
// }

// debugger 
//F5 실행, F9:브레이크포인트=디버거가 실행을 시작할 시점, F10:next step

//While문
// let maxNum = 50;
// let num1 = 3;
// while(num1<maxNum){
//     console.log(num1++);
// }

//do while문
// let maxNum=50;
// let num1=300;

// do {
//     console.log(num1++);
// }while(num1<maxNum);

//함수 : 엄청나게 중요한 산
//css 그리드와 플렉스박스
