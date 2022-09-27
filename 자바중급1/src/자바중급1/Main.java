package 자바중급1;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		사육사 man = new 사육사();
		동물 eagle = new 독수리();
		동물 tiger = new 호랑이();
		동물 elephan = new 코끼리();
		man.moveAnimal(eagle);

		애완동물 내고양이 = new 고양이();
		man.산책시키다(내고양이);

		/*
		 * .connect (디비인스턴스) 자바의 jdbc의 connect함수를 만든 사람은 인자로 디비인스턴스를 인스터페이스로 받도록 했을것이다.
		 * 왜냐하면 실질적으로 어떤 인스턴스가 만들어지든지 간에 영향을 받지않고 내 코드를 변하지 않아도 정상작동하기 위해서 
		 * 오라클 mysql postgressql 
		 
		 * 인터페이스 = 함수의 본문이 없이 어떤 이름의 함수가 어떤 데이터타입을 받아, 
		 * 어떤 데이터타입을 리턴할 것인지 문법적인 약속일뿐. 본문은 implements 한 구현체에서 오버라이딩 해야한다.
		 * 
		 */

	}

}
