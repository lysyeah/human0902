package 정적스택틱;
//이 클래스가 한번 불릴 때마다 1씩 증가
public class Counter {
	static int count = 0; 	
	//static이 없으면 인스턴스들마다 0으로 초기화한다.
	//static이 있으면 하나가 만들어져서 공유된다.
	public Counter(){
		count++;
		System.out.println(count);
	}
	
	public static void main(String[] args) {
		Counter c1 = new Counter();
		Counter c2 = new Counter();
		Counter c3 = new Counter();
		Counter c4 = new Counter();
	}
}
