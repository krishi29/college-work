#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>
#include"Contact.h"
#include"Tools.h"
using namespace std;
using namespace sdds;
#define MAX_REC_NO 100
void sdds::getContact(Contact* C) {
	cout << "Name: ";
	getName(C->name);
	cout << "Phone Number: ";
	C->phoneNumber = getPhoneNumber();
}

void sdds::printContact(const Contact* C) {
	cout << setw(35) << setfill('.') << setiosflags(ios::left) << C->name << C->phoneNumber << endl;
}

int sdds::compare(const Contact* A, const Contact* B) {
	return strcmp(A->name, B->name);
}
bool sdds::nameInContact(const Contact* C, const char* nameSubStr) {
	char name[31];
	char subName[31];
	toLowerCase(name, C->name);
	toLowerCase(subName, nameSubStr);
	return strstr(name, subName) != nullptr;
}

