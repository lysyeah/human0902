package 상속;

public class 자동차경주장 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SuperCar 람보르기니 = new SuperCar("Lamborghini",360,1000,150);
		SuperCar 페라리 = new SuperCar("Ferrari",400,1500,180);
		
		System.out.println(람보르기니.price);
		System.out.println(페라리.price);
		
		
		//터보 전
		System.out.println(람보르기니.getPresentSpeed());
		System.out.println(페라리.getPresentSpeed());
		
		
		람보르기니.turboOn();
		페라리.turboOn();
		
		
		//터보 후
		System.out.println(람보르기니.getPresentSpeed());
		System.out.println(페라리.getPresentSpeed());
				
		
		Car 그랜저 = new Car("grandeur",260);
		//그랜저.turboOn(); //문법에러. 그랜저는 터보온 함수가 없다.
		그랜저.horn();
		람보르기니.horn();
		람보르기니.maxSpeed=9;
		System.out.println(람보르기니.maxSpeed);
		
	}
	
}
