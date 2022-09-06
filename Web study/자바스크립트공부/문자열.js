var academyName = "휴먼교육센터";
var result = academyName.charAt(2);
var isExist = academyName.indexOf("호");
// 휴일때0, 교일때2, 호일때(없으면)-1
console.log(result);
console.log(isExist);
var strLength = academyName.length;
console.log(strLength);

var num = 123;
var tiger = "호랑이";
console.log(num+tiger);

var num1 = 123;
var num2 = "456";
console.log(num1+num2); 
//1백2십3이라는 숫자와 사오육이라는 문자열을 합쳐서 일이삼사오륙 이라는 문자열이 되었다.
console.log(typeof(num1+num2));
// number + string 이라서 string으로 결과값이 나온 듯하다.


