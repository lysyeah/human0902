//조건문///////////////////
let num1 = 10;

if(num1 < 0 ){
    console.log("음수입니다.");
}else if(num1==0){
    console.log("0입니다.");
}else if(num1<10){
    console.log("10보다 작은 양수입니다.");
}else{
    console.log("양수입니다.");
}


//for 반복문/////////////////////////////////////////////
// for (시작; 조건; 스텝){본문}

// 문제1. 1부터 100까지 중에 3의 배수를 출력하라.
for(let i=1; i<=100;i++){
    if(i%3==0){
        console.log(i);
    }
}

// 문제2. 1부터 100까지의 모든 수를 더해 보세요.
let sum = 0;
for(let n = 1; n<=100; n++){
    sum += n;
}
console.log(sum);

// 문제3. 1부터 100까지 7의 배수가 몇 개 있는지 출력해보세요.
let count7 = 0; // let을 붙여서 할당을 하나 안하나 값은 같지만 
                // 하는 것을 습관화 하자. 나중에 헷갈리는 것보다 이렇게
                // 하는 것이 낫다고 한다.
for(let s=1; s<=100; s++){
    if(s%7==0){
        count7++; //자식은 부모 값을 쓸 수 있다. = 블록안에서는 밖에 값을 불러올수있다.
    }
}
console.log(count7);

// 문제4. 10부터 1000까지의 정수 중에 짝수만 큰 수부터 출력하세요.
for(let t=1000; t>=10; t--){
    if(t%2==0){
        console.log(t); //998, 996...10
    }
}

// 문제5. 12345보다 크고 67890보다 작은 수 중에 25의 배수가 몇 개인지 출력해보세요.
let count25 = 0;
for(let e=12346; e<67890; e++){
    if(e%25==0){
        count25++
    }
}
console.log(count25); //2222

// 문제6. 숫자를 1부터 무한으로 1씩 증가하다가, 17의 배수이며, 짝수이며,
// 35의 배수인 수를 만나면 그 수를 출력하고 반복을 멈추어라. 
//     break; 를 만나면 반복문을 탈출한다.
//     continue; 를 만나면 현재 반복만 탈출하고 다시 다음 조건부터 반복한다.

for(let q=1; q <= Infinity; q++){ // q를0부터 하면 안되지. 0을 17로 나누면 0이니까. 그래서 문제를 1로 바꿈
    if(q%17==0){
        if(q%2==0){
            if(q%35==0){
                console.log(q);
                break;
            }
        }
    }
}

// 문제7. 2단부터 9단까지 구구단을 출력해보세요.
//     hint : 이중 반복문
//     큰 톱니바퀴는 단을 증가시키고, 그 안의 작은 톱니바퀴는 1부터 9까지 반복

for(dan=2; dan<=9;dan++){
    for(j=1; j<=9;j++){
        console.log(`${dan} * ${j} = ${dan*j}`);
    }
    console.log('');
}


//while문
let maxNumber = 50;
let number1 = 3;
// while(number1 < maxNumber){
//     console.log(number1++);
// }

do{
    console.log(number1);
    number1++;
}while(number1<maxNumber);

