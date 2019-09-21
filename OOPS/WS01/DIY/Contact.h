#pragma once
#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>
#include"Tools.h"

using namespace sdds;
struct Contact {
	char name[31];
	long long phoneNumber;
};
namespace sdds {
	
	void getContact(Contact* C);
	void printContact(const Contact* C);
	int compare(const Contact* A, const Contact* B);
	bool nameInContact(const Contact* C, const char* nameSubStr);

}
	