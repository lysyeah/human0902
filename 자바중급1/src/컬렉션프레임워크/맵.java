package 컬렉션프레임워크;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class 맵 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 맵은 키와 밸류의 쌍
//		Map<String, String> dict = new HashMap<String, String>();
//		dict.put("apple", "사과");
//		dict.put("banana", "바나나");
//		dict.put("peach", "복숭아");
//		dict.put("pear", "배");
//		dict.put("pineappple", "파인애플");
//
//		// 키를 통해서 값을 가져온다.
//		System.out.println(dict.get("banana"));

		// 반복1. foreach를 사용하여 모든 값에 함수적용
		// -> 이렇게 하는걸 '람다식'이라고 한다. js에선 '화살표함수'.
//		dict.forEach(
//				(strKey,strValue)->{
//					System.out.println(strKey + ":" + strValue);
//				}
//		);
		// 반복2. Iterator 사용하여 함수적용. //이러테이러 이런게 있구나 !!
//		Iterator<String> keys = dict.keySet().iterator();
//		while (keys.hasNext()) {
//			String key = keys.next();
//			String value = dict.get(key);
//			System.out.println(key + ":" + value);
//		}
		// 반복3. keySet활용. 가장 쉬워보이는 문법.
//		for (String key : dict.keySet()) {
//			System.out.println(key + ":" + dict.get(key));
//		}
//		<퀴즈> : 한글보고 영어단어 맞추기
//		제한시간 : 1시간
//		구현내용 : korDict라는 <String, String>맵을 만들고
//				랜덤으로 한글단어를 보여주고
//				Scanner로 유저가 영어를 입력하면
//				맞다 아니다를 보여주세요.
		//힌트 : get함수를 써서 '키'로 '값'을 가져오는 건 쉽게 할 수 있다.
			//반대로 '값'으로 '키'를 찾으려면 keySet()에 반복문 돌려야 한다.
		
		//1. 해쉬맵 껍데기 생성
		//Map<String,String>korDict = new HashMap<String,String>();
		//2. 해쉬맵에 한글단어, 영어단어 데이터 넣기
//		korDict.put( "자전거","bike" );
//		korDict.put( "자동차","car" );
//		korDict.put( "비행기","plane" );
//		korDict.put( "지하철","subway" );
			//3. 해쉬맵에서 랜덤 인덱스 추출
//		String randomKey = (String)korDict.keySet().toArray()[랜덤];
			//4. 랜덤인덱스로 랜덤 키 추출(문제)
//		String answerWord = korDict.get(randomKey);
			//5. 키로 밸류 추출(정답)
		
			//6. 유저에게 랜덤키 보여주기(문제 출력)
//		System.out.printf("%s에 해당하는 영단어넣기 :", answerWord );
		//7. 유저에게 답 스캐너로 받기(정답 제출)
//		String userInput = sc.nextLine();
		//8. 제출받은것과 실제정답 비교
//		if(userInput.equals(randomKey)) {
//			System.out.println("정답");
//		}else {
//			System.out.println("오답");
//		}
		//9. 결과 출력
//		System.out.println("정답");
//		System.out.println("오답");
		//10. 스캐너 닫기	sc.close()
;		
		
		Map<String,String>korDict = new HashMap<String,String>();
		korDict.put( "자전거","bike" );
		korDict.put( "자동차","car" );
		korDict.put( "비행기","plane" );
		korDict.put( "지하철","subway" );
		int 랜덤 = new Random().nextInt(korDict.size());
		//여기까지been.
		
		//랜덤으로 뽑기.
		String randomKey = (String)korDict.keySet().toArray()[랜덤];
		String answerWord = korDict.get(randomKey);
		
		//시스템이용하기
		Scanner sc = new Scanner(System.in);
		System.out.printf("%s에 해당하는 영단어넣기 :", answerWord );
		//nextIn/out 과 nextLine의 차이.
		String userInput = sc.nextLine();
		if(userInput.equals(randomKey)) {
			System.out.println("정답");
		}else {
			System.out.println("오답");
		}sc.close();
	}
	}

		

		
		
		
		
		
		
		
		
		
		
		
		

