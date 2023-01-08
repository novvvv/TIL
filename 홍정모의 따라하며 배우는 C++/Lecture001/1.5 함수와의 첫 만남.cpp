#include <iostream>
using namespace std;

int addTwoNumbers(int num_a, int num_b){
    int sum = num_a + num_b;
    return sum;
}

int multiplyTwoNumbers(int num_a, int num_b){
    int sum = num_a * num_b;
    return sum;
}

void printHelloWorld(){
    cout << "Hello World" << endl;
}

int main(){
    // 반복되는 코드
    cout << 1 + 2 << endl;
    cout << 3 + 4 << endl;
    cout << 8 + 13 << endl;
    cout << addTwoNumbers(1, 2) << endl;
    cout << addTwoNumbers(3, 4) << endl;
    cout << addTwoNumbers(8, 13) << endl;
    // 반환값이 없는 함수
    printHelloWorld();
    return 0;
}

/* 
    Lecture INFO : 홍정모의 따라하며 배우는 C++ 1.5 함수와의 첫 만남
    반복되는 패턴이 여러번 나타나면 함수로 표현할 수 있다.
    함수의 이름을 정의할 때는 최대한 함수의 기능이 잘 표현되도록 네이밍 해야 한다.
    함수도 변수와 마찬가지로 메모리에 저장되어 있다.

    VisualStudio Code 기능
    함수 이름 더블클릭 "Change All Occurrences" or Ctrl + F2
    -> 동일한 함수 이름을 사용하는 모든 코드 수정 가능. 
 */
