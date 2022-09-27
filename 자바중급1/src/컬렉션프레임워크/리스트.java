package 컬렉션프레임워크;

import java.util.ArrayList;

public class 리스트 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> al = new ArrayList<Integer>();
		al.add(3);
		al.add(4);
		al.add(20);
		al.add(8);
		al.add(11);
		al.add(9);
		System.out.println(al);
		
		//n번째 인데스를 제거하기
		al.remove(3);
		System.out.println(al); 
		//인덱스(3)이기 때문에4번째 인덱스인 8이 지워졌다.
		
		//값이 있는지 검사
		System.out.println(al.contains(11));
		//11이 포함되어 있기 때문에 true로 나온.
		
		System.out.println(al.size());
		//다섯 개이므로 5가 나온다.
		
		//새로 정렬하기.
		al.sort(null); //낮은 수부터 정렬된다. : 원본이 바뀐다. 
		System.out.println(al);
		
		//해당값을 가진 요소가 없으면 -1 반환/ 있으면 0으로 반환
		System.out.println(al.lastIndexOf(3));
		
		//리스트에 있는 모든 인덱스들을 더해보자.
		int total = 0;
		for(int i=0; i<al.size();i++) {
			total +=al.get(i);
		}
		System.out.println(total);
		//47이 출력된다.
				
		//모두 클리어하고 출력해보기
		al.clear();
		System.out.println(al); //다 없앴으니까 []라고만 나온다.
		System.out.println(al.size()); //리스트의 길이를 보여줘.
		
		//다시 넣어보자.
		al.add(3);
		System.out.println(al);//3을 넣었으니 이제 [3]이라고 나온다.
		
		
		
	}

}
