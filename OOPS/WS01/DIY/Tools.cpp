#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>
#include"Contact.h"
#include"File.h"
#include"PhoneDir.h"
#include"Tools.h"



using namespace sdds;
using namespace std;


bool sdds::valid(long long min, long long max, long long val) {
	return min <= val && val <= max;
}

long long sdds::getLongLong(long long min, long long max, const char* valueName) {
	long long val;
	bool done = false;
	while (!done) {
		cin >> val;
		if (cin.fail()) {
			cin.clear();
			cout << "Bad Number, try again: ";
		}
		else {
			if (!valid(min, max, val)) {
				cout << "Invalid " << valueName << "!" << endl
					<< "The " << valueName << " must be between " << min << " and " << max << ": ";
			}
			else {
				done = true;
			}
		}
		cin.ignore(1000, '\n');
	}
	return val;
}

long long sdds::getPhoneNumber() {
	return getLongLong(1000000000LL, 9999999999LL, "Phone Number");
}



void sdds::getStr(char* str, int len) {
	cin.getline(str, len, '\n');
}

void sdds::getName(char* name) {
	getStr(name, 30);
}

void sdds::toLowerCase(char* lowerCase, const char* str) {
	int i;
	for (i = 0; str[i] && i < 30; i++) {
		lowerCase[i] = str[i] | 0x20;
	}
	lowerCase[i] = 0;
}
bool sdds::yes() {
	char ch;
	ch = cin.get();
	cin.ignore(1000, '\n');
	return ch == 'y' || ch == 'Y';
}