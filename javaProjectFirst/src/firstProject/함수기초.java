package firstProject;

public class 함수기초 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// 호출하기.
		int 결과값 = add(2,3);
		int 결과값2 = minus(3,2);
		int 결과값3 = add(3,2,3);
		int 결과값4 = multiple(3,2);
		double 결과값5 = divide(10 , 5); // 10 혹은 5로 바꾸어도 자동 형변환이 된다. 즉, 결과값이 동일하게 나온다.
		
		System.out.println(결과값);
		System.out.println(결과값2);
		System.out.println(결과값3);
		System.out.println(결과값4);
		System.out.println(결과값5);
	}
		
	
	//함수 정의
	// 접근제한자 리턴타입 메소드명(인자타입 인자명1, 인자타입 인자명2, ...){
	//		함수본문;
	//		리턴 타입 void가 아닐 경우 리턴문;
	//}
	public static int add(int a, int b){
		return a+b;
	}	
	
	//오버로딩
	//같은 이름의 함수가 여러개 있더라도 매개변수가 달라지면 다르게 호출되는 기능 //add2로 할 필요가 없다는 뜻.
	public static int add(int a, int b, int c){
		 return a+b+c;
	}
	
	
	public static int minus(int a, int b) {
		return  a-b;
	}
	
	
	public static int multiple(int a, int b) {
		int result = a*b;
		return result;
	}
	
	
	public static int divide(double a, double b) {
		System.out.println(a/b);
		//인트와 인트를 나누면 인트를 리턴
		//더블과 더블로 나누면 더블을 리턴
		//플로트와 플로트로 나누면 플롯을 리턴
		return (int)(a/b);
	}
	
	
	
	}
	

