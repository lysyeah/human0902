//문제1. 숫자가 들어있는 배열을 받아서 5의 배수만 골라서 반환하는 fifth함수 만들기.

//return 은 배열로 하면 되겠네.
//리턴할 배열의 크기가 동적인데 어떡하지?
//인풋의 길이만큼으로 아웃풋 길이를 지정하면 동적 길이를 고정 길이로 바꿀 수 있지만 
//문제는 요소가 군데군데 비어있게 된다.

// let 인풋데이터 = [ 1,2,3,4,5,6,7,8,9,10]
// function fifth(inputArr){
//     let outputArr = [];
//     let j = 0;
//     for(let i =0; i<inputArr.length; i++){
//         if(inputArr[i]%5 ==0 ){
//             outputArr[j++]=inputArr[i];
//         }
//     }
//     return outputArr;
// }
// console.log(fifth(인풋데이터));

//문제2. 숫자가 들어있는 배열을 받아서 배열의 모든 숫자의 평균을 반환하는 getAverage함수 만들기.
//요소 중에 숫자가 아닌 요소가 있다면 걸러내야함.
//껍데기 만들기.
// let 숫자배열 = [1,2,3,645,43,523,1234,685,74];
// function getAverage(inputArr){
//     let average = 0;
//     return average;
// }
//console.log(getAverage(숫자배열));

// let 숫자배열 = [1,2,3,645,43,523,1234,685,74];
// function getAverage(inputArr){
//     let average = 0;
//     //평균 = 숫자들의 총합 / 숫자들의 갯수이므로
//     let total = 0;
//     let count = 0;
//     for(let ele of inputArr){
//         if(typeof(ele)== 'number'){
//             total += ele;
//             count++;
//         }
//     }
//     average = total/count;
//     return average;
// }
// console.log(getAverage(숫자배열));


// let arr1 = [1,2,3,4,5];
// let arr2 = arr1;

// arr2[3] = 3333;
// console.log(arr2);
// console.log(arr1);


//원시형 데이터 타입은 값을 참조하지만, 객체형 데이터 타입은 주소로 참조한다.
//얕은 복사. 복사한 척.
//깊은 복사는 어떻게 하지? 데이터를 그대로 복제하면서 새로운 객체를 생성하려면?
//1.해당배열의 모든 요소를 순회하면서 차곡차곡 넣는다.
//2.splice함수의 사용
    // 함수이름은 같은데 매개변수가 다르면 다른 함수처럼 작동하는 것 = 오버로드 overLoad
//3.배열 이름 앞에 ...넣기. 예) arr2 = [...arr1]
//4.concat함수사용. concatenate // 사슬 같이 잇다.
    //예)문자열1. concat(문자열2)   배열1.concat(배열2)

// arr1.push(70,100); // push는 배열의 맨 뒤에 요소를 추가한다.
// // console.log(arr1);
// // console.log("팝된 요소 :"+arr1.pop());
// // console.log(arr1);

// let joinStr = arr1.join('|');
// // console.log(joinStr);
// arr1 = arr1.sort(); //문자열 abcd기준의 정렬
// console.log("문자열 sort 이후:" + arr1); //정렬이후:1,100,2,3,3333,5,70

// arr1.sort(
//     function(a,b)//오름차순
//     {
//     return a-b; //a가 클 때 양수가 반환된다.
//     // 근데 sort함수를 만든 사람이 콜백 함수가 양수를 반환하면 오름차순으로 정렬되게 만들어놨다.
// }
// )
// console.log("숫자 sort 이후 :" + arr1);

//배열 심화.
//sort, sort(콜백함수), push, unshift, pop, slice


//문제3. 항상 3 번에게만 발표를 시키는 선생님이 있다.
    //1반의 학생5명
    //2반의 학생 6명
    //3반의 학생 4명이 배열 만들어 놓고 
    //해당 반의 해당 번호 학생에게 발표를 시켜보세요.

// let 반1 = ["b","a","c","e","d"];
// let 반2 = ["j","i","h","g","f","k"];
// let 반3 = ["n","m","o","l"];
// 반1 = 반1.sort();
// 반2 = 반2.sort();
// 반3 = 반3.sort();
// console.log(반1);
// console.log(반2);
// console.log(반3);
// function present(반, 번호){
//   console.log( ` ${반[번호-1]} `  );
// }
// present(반1,3)




//포켓몬 예제.

let cat ={
    name : '뮤',
    age : 4,
    gender : '수컷',
    weight : 8,
    height : 50,

    walk : function(){
        console.log("걷습니다.");
    },
    jump : function(){
        console.log("점프를 합니다.");
    },
    eat : function(meal){
        console.log(meal+"을 먹습니다.");
    },
    cry : function(){
        console.log('냐아아오옹');
    }
}

cat.cry();
console.log (cat.age);




// 포켓몬 게임 만들기?

//player
    // 아이템 : 포켓몬볼, 몬스터볼
    // 전투
//포켓몬   레벨, 경험치, 스킬





let pokemon1 = {
    name : '피카츄',
    atk : 10,
    def : 3,
    hp : 100,
    maxhp :100,
    
    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.atk}의 데미지로 공격합니다.`);
        enemy.hp= enemy.hp - (this.atk- enemy.def);
        console.log(`${enemy.name}의 체력이 ${enemy.hp}가 되었습니다.`);
    },
    intro : function(){
        console.log('피카 피카아아아아');
    }
}

let pokemon2 = {
    name : '롱스톤',
    atk : 7,
    def : 7,
    hp : 300,
    maxhp : 300,
    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.atk}의 데미지로 공격합니다.`);
        enemy.hp= enemy.hp - (this.atk- enemy.def);
        console.log(`${enemy.name}의 체력이 ${enemy.hp}가 되었습니다.`);
    },
    intro : function(){
        console.log('로오오오옹')
    },
    finish : function(enemy){
        console.log("피니쉬 기술을 사용합니다.");
        if(enemy.hp < enemy.maxhp/10){
            enemy.hp = 0;
            console.log("피니쉬 작렬");
            console.log(`${enemy.name}가 전투 불가 상태가 되었습니다.`);
        }
    }
}
pokemon1.attack(pokemon2);
pokemon2.attack(pokemon1);




//롱스톤은 finish 라는 기술이 있다.
//finish는 적의 체력이 원래 체력의 10% 이하일 때 적의 체력을 0으로 만드는 기술이다.
//피카츄 체력을 깎은 다음 10%로 만들고 죽여라.
for(let i =0; i<22; i++){
    pokemon2.attack(pokemon1);
}

// //pokemon2.finish(pokemon1); //안먹혀야 정상. 안먹히네
pokemon2.attack(pokemon1);
pokemon2.finish(pokemon1); //먹혀야 정상

// //생성자 함수 = 객체를 생성할 때 사용되는 함수
// //생긴건 함수인데 변수가 있네? 자바스크립트는 함수가 일급객체이기 때문에 가능하다.
function PokeMon(name,type,atk,def,maxhp,sound){
    this.name = name;
    this.type = type;
    this.atk = atk;
    this.def = def;
    this.maxhp = maxhp;
    this.hp = maxhp;
    this.attack = function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.atk}의 데미지로 공격합니다.`)
        enemy.hp = enemy.hp - (this.atk-enemy.def);
        console.log(`${enemy.name}의 체력이 ${enemy.hp}가 되었습니다.`)
    }
    this.intro = function(){
        console.log(sound);
    }
}
let pikachu = new PokeMon("피카츄", "전기",25,5,10,"담배삐까");
let fiery = new PokeMon("파이리", "불",25,4,120,"부우우우울" );
fiery.intro();
pikachu.intro();
fiery.attack(pikachu);


fiery.진화 = function(){
    console.log("리자드로 진화");
}
fiery.진화();




//생성자 함수
//  function 객체명(파라미터1,파라미터2){
    // this.변수1 = 파라미터1;
    // this.변수2 = 파라미터2;
//};

// 생성자함수로 인스턴스 생성하는법
// let 인스턴스명 = new 함수명(인자);

//땅,불,물,풀,전기
//불=> 풀에게 1.3배 데미지, 물에게 0.7배 데미지
//물=> 불에게 1.3배 데미지, 풀에게 0.7배 데미지
//전기=> 물에게 1.3배 데미지, 땅에게 0.7배 데미지
//지금은 attack함수뿐이다. 여기에다가 적용하기.
//땅1<풀2<불3<물4<전기4   < 땅<풀<불<물<전기    반복.
//차이가 1이면 상성이 센 것, 차이가 -1이면 상성이 약한 것, 차이가 그 외면 상성이 없는것
