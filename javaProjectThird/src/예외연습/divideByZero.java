package 예외연습;

//1. 숫자 2개를 유저로부터 입력받기.
//2. num을 divisor로 나누기
//3. divisor를 유저가 0으로 입력했을 경우
		//0으로 나눌 수 없으니 다시 입력하라고 콘솔에 띄우기
//4. 다시 입력받기.
//5. 제대로된 결과 출력하기
		
import java.util.Scanner;

public class divideByZero {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("나눠질 수를 입력하세요 : ");
		int original = sc.nextInt();
		System.out.print("나눌 수를 입력하세요 : ");
		int dividor = sc.nextInt();
		int result;
		boolean 계속돌까 = true;
		while(계속돌까) {
			try {
				result = original/dividor;
				System.out.printf("결과값 : %d",result);
				//서로 다른 데이터 타입으로 연산을 할 경우, 더 큰 범위의 데이터 타입으로 자동 형 변환.
				계속돌까 = false;
			}
			catch (Exception e) {
				// TODO: handle exception
				System.out.println("0으로 나눌 수 없습니다. ");
				System.out.print("나눌 수를 다시 입력해주세요. : ");
				dividor = sc.nextInt();
			}
//			finally {
//				//예외가 발생하든 안하든 처리할 내용
//				System.out.println("파이널리 실행 확인");
				sc.close();
//			}
		}
		
	}

}
