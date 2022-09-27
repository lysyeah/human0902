package 컬렉션프레임워크;
import java.util.HashSet;
import java.util.TreeSet;
public class 셋 {

	public static void main(String[] args) {
		// 문법 컬렉션 정류<데이터타입> 이름 = new 컬렑션종류<데이터타입>();
		HashSet<String> 포유류 = new HashSet<String>();
		포유류.add("사자");
		포유류.add("코끼리");
		포유류.add("고래");
		포유류.add("고래");
		포유류.add("원숭이");
		포유류.add("원숭이");
		for(String 동물 : 포유류) {
			System.out.println(동물);
		}
		//원소 갯수 확인
		System.out.println("길이 : "+ 포유류.size());
		//포함되었는지 확인
		System.out.println(포유류.contains("고릴라")); //고릴라가 존재하니??
		//원소 삭제 후 원소 갯수 확인
		포유류.remove("원숭이");
		System.out.println("길이 : "+ 포유류.size());
		
		
		TreeSet<Integer> intSet = new TreeSet<Integer>();
		intSet.add(7);
		intSet.add(4);
		intSet.add(9);
		intSet.add(1);
		intSet.add(6);
		intSet.add(6);
		intSet.add(6);
		//제일 낮은 값
		System.out.println(intSet.last());
		//제일 높은 값
		System.out.println(intSet.first());
		//5보다 큰 수 중에 가장 낮은 수
		System.out.println(intSet.higher(5));
		System.out.println("--------");
		for(Integer 숫자 : intSet) {
			System.out.println(숫자);
		}
	}

}
