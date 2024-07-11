package collection.set;

import collection.set.member.Member;

public class JavaHashCodeMain {
    public static void main(String[] args) {
        /**
         * 1 Object의 기본 hashCode
         * Object의 기본 hashCode는 객체의 "참조값"을 기반으로 생성한다.
         * 따라서 인스턴스마다 서로 다른 값을 반환한다.
         */
        Object obj1 = new Object();
        Object obj2 = new Object();
        System.out.println("obj1.hashCode() = " + obj1.hashCode());
        System.out.println("obj2.hashCode() = " + obj2.hashCode());
        System.out.println(Integer.toHexString(obj1.hashCode()));

        /**
         * 2. Object hashCode
         * 자바는 각 클래스 마다 hashcode를 이미 오버라이딩 해 두었다.
         * 그렇기에 데이터 내부의 값이 같다면 동일한 해시코드를 반환한다.
         */
        Integer i = 10;
        String strA = "A";
        String strB = "AB";

        System.out.println("10.hashCode() = " + i.hashCode());
        System.out.println("A.hashCode() = " + strA.hashCode());
        System.out.println("AB.hashCode() = " + strB.hashCode());


        /**
         * 3. 동일성, 동등성 비교
         * 동일성 동등성 비교. equals 비교 시 동일
         * 서로 다른 인스턴스 이지만, 내부의 id값이 동일하다.
         *
         * 자바에서 두 객체가 같다는 것을 두 가지 표현으로 분리하여 사용한다.
         * 동일성 (identity) == 연산자를 사용해서 두 객체의 참조가 동일한 객체를 가리키고 있는 지 확인한다. * 참조값 비교
         * 동등성 (equality) equals method를 사용 하여 두 객체가 논리적으로 동등한지 확인한다.  * 논리적 내부 값이 같은 지 확인.
         *
         * 즉 특정 객체를 구분하기 위한 equals 메서드를 재정의 할때는 반드시 hashcode 또한 함께 재정의 해 주어야 한다.
         * hashCode를 재정해 주지 않으면, 기본적으로 참조값을 기반으로 해시 코드를 재정이 하기 때문에 인스턴스가 달라지면 해시코드가 변할 수 있음.
         */

        Member member1 = new Member("idA");
        Member member2 = new Member("idA");

        System.out.println("(member1 == member2) = " + (member1 == member2)); // 인스턴스가 다르기에 false. 메모리 참조값을 기반으로 비교를 수행
        System.out.println("(member1 equals member2) = " + (member1.equals(member2)));
        System.out.println("member1.hashCode() = " + member1.hashCode());
        System.out.println("member2.hashCode() = " + member2.hashCode());
    }
}
