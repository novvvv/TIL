#include <iostream>
#include <algorithm> // std::find
#include <vector> // std::vector
using namespace std;

int main(){
	int myInts[] = {10, 20, 30, 40, 50};
	int *p;
	p = find(myInts, myInts + 5, 40);
	if(p == myInts + 5){
		cout << "해당하는 값을 탐색할 수 없습니다.\n";
	}
	else{
		cout << "value is " << *p << endl;
		cout << "index is " << p - myInts << endl;
	}
	
	vector<int> myVector = {10, 20, 30, 40, 50};
	vector<int>::iterator it;
	it = find(myVector.begin(), myVector.end(), 30);
	if(it == myVector.end()){
		cout << "해당하는 값을 탐색할 수 없습니다.\n";
	}
	else{
		cout << "value is " << *it << endl;	
		cout << "index is " << it - myVector.begin() << endl;
	}
	return 0;
}