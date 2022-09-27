package firstProject;

public class 함수기초문제 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//1번.
		printDan(2);
		//2번.
		System.out.println(isCola("코카콜라"));
		//3번.
		System.out.println(sigma(2));
		//4번.
		System.out.println(calcHypot(3,5));
		//5번.
		isBigger(1,3,5);
		//6번.
		for (int i=1; i<=100; i++) {
			if(pickOneNum() == 1) {
				System.out.println("1이 뽑혔다.");
			}else if(pickOneNum() == 45) {
				System.out.println("45가 뽑혔다.");
			}else if(pickOneNum() < 1 || pickOneNum() > 45 ) {
				System.out.println("뽑히지 말아야 할 것이 뽑혔다.");
			}			
		}
		//6.1번
//		for (int i=1; i<=7; i++){
//			System.out.println(pickOneNum());
//		}
				
		//오후. 1 옻놀이 문제
		yut();
//		
		//오후. 1.1 윳놀이 문제 // switch문 쓴 것.
		randomYut();
		
	}

		
	
	
	//문제.
	//1. printDan(int dan) // 입력받은 단만 구구단 출력하기.
	//2. isCola(string 음료)
			//음료수의 이름에 콜라가 들어가 있으면 true를 리턴
			//예 제로콜라, 펩시콜라, 코카콜라, 맥콜, 815콜라
	//3. sigma(int 숫자) 
			//1부터 해당 숫자까지 1씩 더하면서 모든 수르 합친 수
	//4. calcHypot(가로,세로)
			//삼각형의 빗변을 구하는 함수. 루트(가로제곱+세로제곱)
			//루트는 Math.squrt()
	//5. isBigger(숫자1, 숫자2, 숫자3)
			//숫자1과 숫자2의 곱이 숫자 3중 무엇이 더 큰지 출력
			//숫자1*숫자2를 앞에,   숫자3을 뒤에 출력한다.
			//출력 형태 : "40은 30보다 작습니다."
	
	//1번
	public static void printDan(int dan){
		for(int a=1; a<10; a++ ){
			System.out.printf("%d * %d = %d\n", dan, a, dan*a);
		}
	}
	
	//2번 //return은 그냥 저정만 하는 것이고 'System.out.println()'가 조건식쪽이든 호출쪽이든 있어야 한다.
	public static boolean isCola(String 음료) {
		if(음료.contains("콜라")){
			return true;
		}else {
			return false;
		}
	}
	
	//3번
	public static int sigma(int 숫자) {
		int sum=0;
		for(int i=1; i<=숫자; i++) {
			 sum += i;
		}
		return sum;
	}
	
	//4번
	public static double calcHypot(int g, int s) {
		return  Math.sqrt(g*g + s*s);
	}
	
	//5번
	public static void isBigger(int a, int b, int c) {
		if( a*b < c ) {
			System.out.printf("%d 이  %d보다 작습니다\n", a*b, c ); 
	}else{ 
		System.out.printf("%d 이  %d보다 큽습니다\n", a*b, c);
		}
	}
	
	//오후 수업 
	
	//6번
	//.pickOneNum();
	//인풋 없음 = 파라미터가 없다. = 함수 이름 뒤에 괄호 안에 아무 것도 없다.
	//1~45까지 랜덤숫자  Math.random()
	//아웃풋 정수 하나
	public static int pickOneNum() {
		return (int) (Math.random()*45)+1;
	};
	
	//셀프 문제
	//1.번
	//윷놀이에서 "도 개 걸 윷 모" 중 하나를 랜덤으로 뽑는 yut()함수를 만들어 보세요
	public static void yut() {
		int i = (int) (Math.random()*5)+1;  // Math.random()*5 1이상 5미만	
		if(i==1) {
			System.out.println("'도' 입니다");
		}else if (i==2){
			System.out.println("'개' 입니다");
		}else if (i==3) {
			System.out.println("'걸' 입니다");
		}else if (i ==4) {
			System.out.println("'윷' 입니다");
		}else if(i == 5) {
			System.out.println("'모' 입니다");
		}
	}
	
	
	
	//1.1번
	public static void randomYut() {
		int randomYut=0;
		double random1 =(Math.random()*6)+1 ;
		randomYut = (int)random1;
		switch (randomYut) {
		case 1:
			System.out.println("'도'다");
			break;
		case 2:
			System.out.println("'개'다");
			break;
		case 3:
			System.out.println("'걸'이다");
			break;
		case 4:
			System.out.println("'윷'이다");
			break;
		case 5:
			System.out.println("'모'다");
			break;
		}
	}
	
	
	
	//2. 연도가 주어졌을때, 윤년이면 t, 아니면 0을 출력하는 함수를 만들어 보세요
	public static void leapYr() {
		int num1 = 0;
		if(num1%4 ==0) {
			
		
		}else{
			
		}
	}
	
	
	
}		

