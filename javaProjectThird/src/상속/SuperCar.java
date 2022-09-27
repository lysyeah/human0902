package 상속;

public class SuperCar extends Car  {

	public SuperCar(String name, int maxSpeed, int Price, int presentSpeed) {
		super(name, maxSpeed);
		this.price = Price;
		this.presentSpeed = presentSpeed;
		
		// TODO Auto-generated constructor stub
		
	}
	public void turboOn() {
		System.out.println("터보엔진 작동!!!");
		setPresentSpeed(getPresentSpeed()+60);
	}
	
	//있는 함수 오버라이딩. Car에 정의된 horn()함수를 덮었다.
	@Override
	public void horn() {
		System.out.println("길을 비켜라");
	}
}
