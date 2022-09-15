function myclick(){
    alert('내가만든 클릭함수가 실행됨');
}

let ele = document.getElementById('cola');
ele.onclick = function(){
    alert('html의 onclick요소에 할당한 함수 실행');
}

let 웰치스 = document.getElementById('welchs');
웰치스.addEventListener('dblclick', function(){
    alert('이벤트 리스너로 등록한 함수 실행')
})

let keydownEle = document.getElementById('keydown2');
keydownEle.addEventListener('keydown',mykeyDownFunc);
function mykeyDownFunc(){
    console.log('키보드가 눌러졌습니다');
}

// 3번째 인풋에 값이 바뀌었음을 인지하면 1번째 인풋의 값을 바뀐값으로 세팅
let changeInputEle = document.getElementById('changeInput');
changeInputEle.addEventListener('change',function(){
    let firstEle = document.getElementById('follow3th');
    firstEle.value= changeInputEle.value;
})

//문제1. html에 input 2 개를 만들어서 두 개의 합의 결과를 세번째 인풋에 실시간으로 계산
//change이벤트를 써서.
//원본코드
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let sumResult = document.getElementById("sumResult");
input1.onchange = function(){
    sumResult.value = Number(input1.value) + Number(input2.value);
}
input2.onchange = function(){
    sumResult.value = Number(input1.value) + Number(input2.value);
}

//상필이꺼
// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');
// let sum = document.getElementById('sum');
// function addNum(){
//     sum.value = Number(num1.value) + Number(num2.value);
// }
// num1.addEventListener('change',addNum);
// num2.addEventListener('change',addNum);



//리팩토링 코드
input1.onchange =  function(){
    sumTwoNum(input1, input2, sumResult);
}
//input1.onchange =  sumTwoNum(input1, input2, sumResult);
//이것처럼 해버리면 콜백이 아니라 이문장을 읽을때 실행하는것이 되므로 안된다.
input2.onchange = function(){
    sumTwoNum(input1, input2, sumResult);
}
function sumTwoNum(ele1, ele2, ele3){
    ele3.value = Number(ele1.value) + Number(ele2.value);
}


//문제2. 클릭할때마다 이미지의 길이와 너비를 2배로 키우는 버튼을 만들어보세요
//1. 버튼에 클릭 이벤트 달기. 
    //버튼이 뭔지를 모르는지?  html에 버튼을 못만드는지? 버튼에 클릭이벤트를 못다는지.
//2. 클릭이 됐을때 실행할 함수 제작
    //함수가 뭔지 모르는지? 함수 정의를 못하는지,  함수의 호출을 못하는지, 본문에서 뭘해야될지 모르는지
//3. 함수 본문에서 먼저 할일 : 이미지의 길이와 너비 구하기
    //html의 이미지태그를 못가져오는지,  그 요소의 길이를 못가져오는지,
//4. 함수 본문에서 그 다음할일 :  길이와 너비를 2배로 키우는 작업
// 내가 뭘 해야하는지 명확히 규정할수있고,
// 모르는부분을 찾을 수 있고,
// 찾은것을 적용할 수 있고

function twiceImg(){
    let img = document.getElementById("아무무");
    // console.log("너비:" + img.width);
    // console.log("높이:" + img.height);
    img.width = img.width * 2;
}


let inputList = document.getElementsByClassName("input");
console.log(inputList.length);
console.log(inputList[1]);

let selectEle = document.querySelector(".rebull > input");
console.log(selectEle);


//문제3. 버튼을 누르면 h3에 "동적으로만든요소"라는 글자를 동적으로 추가하기.
//콜라 밑에 동적으로 추가하기.
let addBtn = document.getElementById("addNewText");
addBtn.onclick = function(){
    let heading=document.createElement("h3");
    let heading_text=document.createTextNode("동적으로만든요소");
    heading.appendChild(heading_text);
    ele.appendChild(heading);
}

//문제4. 동적h3삭제 버튼을 클릭하면 문제3에서 만들었던 요소를 다 삭제하기.
//문법 : 추천방법. 부모.removeChild(자식);
//       2번째추천. 자기.remove();
//       3번째추천. 요소.innerHTML = '';
let removeBtn = document.getElementById("removeDynamicH3");
removeBtn.onclick = function(){
    //부모
    console.log("가져온부모:" + ele);
    //자식
    let dynamicH3 = ele.querySelectorAll("#cola>h3")
    console.log(dynamicH3);
    


    //1번방식
    for(let j =0;j<dynamicH3.length; j++){
        ele.removeChild(dynamicH3[i]);
    }

    //제거(2번째방법)
    //dynamicH3.remove(); // 이방법을 바로 하면 안되는 이유: dynamich3는 요소 하나가 아니라 배열이기 때문이다.
    for(let i =0; i<dynamicH3.length; i++){
        dynamicH3[i].remove();
    }
}

//문제5.웰치스를 더블클릭할 때마다 웰치스 옆에 1부터9까지의 숫자를 붙여보세요.
//이벤트를달요소.on이벤트타입 = 콜백함수
//이벤트를달요소.addEventListener(이벤트타입,콜백함수)






