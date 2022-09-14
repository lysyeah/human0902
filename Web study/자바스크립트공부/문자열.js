var academyName = "휴먼교육센터";
var result = academyName.charAt(3);
var isExist = academyName.indexOf("호");
// 휴일때0, 교일때2, 호일때(없으면)-1
console.log(result); //육
console.log(isExist); //-1 왜냐하면 isExist안에 "호"라는 문자가 없기 때문이다.

var strLength = academyName.length; // strLength라는 변수는 academyName의 길이를 말?하는 변수이다.
console.log(strLength);


var num = 123;
var tiger = "호랑이";
console.log(num+tiger);
console.log(typeof(num+tiger)) // string 

var num1 = 123;
var num2 = "456";
var num3 = 456;
console.log(num1+num2); 
console.log(typeof(num1+num2)); // string
console.log(typeof(num1+num3));  // number

//1백2십3이라는 '숫자'와 사오육이라는 '문자열'을 합쳐서 일이삼사오륙 이라는 문자열이 되었다.
console.log(typeof(변수1));



