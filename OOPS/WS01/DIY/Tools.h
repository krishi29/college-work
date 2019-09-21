#pragma once
#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>


namespace sdds {
	bool valid(long long min, long long max, long long val);
	long long getLongLong(long long min, long long max, const char* valueName);
	long long getPhoneNumber();
	void getStr(char* str, int len);
	void getName(char* name);
	void toLowerCase(char* lowerCase, const char* str);
	bool yes();
}

