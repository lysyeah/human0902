package generic;


/**
 * @param arr은 숫잫여 배열
 * @return Double형 데이터 타입
 */

public class NumberBox <T>{
	
		private T t;

		public T getT() {
			return t;
		}

		public void setT(T t) {
			this.t = t;
		}

		public Double sum(T[] arr) {
			Double  sum =0.0;
			for(int i =0 ; i<arr.length; i++) {
				sum += Double.valueOf((String)arr[i]);
			}return sum;
		}
		
		
	}

