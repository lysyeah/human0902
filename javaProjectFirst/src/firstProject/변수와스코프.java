package firstProject;

public class 변수와스코프 {
	public static void main(String[] args) {
		
//		int dan =5;
		for(int i=0; i <10; i++) {
			int dan = 3;
			System.out.println(dan*i); //5단 나옴 //dan2로 바꾸면 3단이 나오겠지.
		}
//		System.out.println(dan2); 
	}
}
