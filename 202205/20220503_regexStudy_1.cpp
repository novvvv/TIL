#include <bits/stdc++.h>
#include <regex>
using namespace std;

// About regex(regular expression)
// std::regex_match .. regex로 문자열 패턴 매칭하기(규칙에 맞는지 확인)
// std::regex_search .. regex로 문자열 검색하기
// std::regex_replace .. regex로 문자열 치환하기
// ref - https://modoocode.com/303

int main(){
	vector<string> file_names = {"db-123-log.txt", "db-124-log.txt",
								"not-db-log.txt", "db-12-log.txt",
								"db-12-log.jpg"};
	// regex 객체 정의 정규 표현식 문법의 종류는 여러가지 존재한다.
	// 두 번째 파라미터로 여러가지 인자를 전달할 수 있으며, 기본 값으로는 ECMAScript가 들어간다.
	// 만약 regex::icase를 전달하면 대소문자를 구분하지 않게된다.
	regex re("db-\\d*-log\\.txt");
	// regex_match(prameter1, parameter2)
	// parameter1 = 문자열 , parameter2 = 정규표현식
	// 완전히 매칭(문자열 전체가 표현식 패턴에 부합)되면 true return
	for(const auto &file_name : file_names){
		cout << file_name << ": " << boolalpha
			<< regex_match(file_name, re) << '\n';
	}
	
	// 부분 매칭 뽑아내기 ... regex_match
	vector<string> phone_numbers = {"010-1234-5678", "010-123-4567",
								   "011-1234-5567", "010-12345-6789",
								   "123-4567-8901", "010-1234-567"};
	
	// 전화번호 규칙
	// 1. 숫자 - 숫자 - 숫자 꼴로 되어 있어야 한다.
	// 2. 맨 앞자리는 반드시 3자리이며 0과 1로만 이루어져 있어야 한다.
	// 3. 가운데 자리는 3자리 또는 4자리 여야 한다.
	// 4. 마지막 자리는 4자리 이어야 한다.
	// [01]{3} 0 or 1 에 해당하는 종류가 3번 나타날 경우 
	cout << "-------------------" << '\n';
	regex re_2("[01]{3}-\\d{3,4}-\\d{4}");
	for(const auto& number : phone_numbers){
		cout << number << ": " << boolalpha
			<< regex_match(number, re_2) << '\n';
	}
	
	// 캡쳐 그룹 _ Capture group
	// ()로 원하는 부분을 감싸 해당 부분에 매칭된 문자열을 얻는다.
	cout << "-------------------" << '\n';	
	regex re_3("[01]{3}-(\\d{3,4})-\\d{4}");
	smatch match; // 매칭된 문자열을  std::string으로 리턴한다.
	for (const auto &number : phone_numbers){
		// number가 re_3(regex) 패턴에 부합하면 match에 매칭된 결과가 들어간다.
		// parameter1 : number = 검색하고 싶은 문자열
		// parameter2 : match =  일치된 패턴을 보관할 match 객체
		// parameter3 : 실제 정규 표현식 객체
		// 매칭되는 패턴이 존재할 경우 true return
		if(regex_match(number, match, re_3)){
			for(size_t i = 0; i < match.size(); i++){
				// 매칭된 문자열을 match[i].str()을 통해 접근한다.
				// smatch = std::string, cmatch = const char*
				cout << "Match : " << match[i].str() << '\n';
			}
		}
	}
	return 0;
}
