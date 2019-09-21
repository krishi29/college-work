#pragma once
#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>
#include"Contact.h"
#include"File.h"
#include"PhoneDir.h"

using namespace sdds;
namespace sdds {
	void sort(Contact c[], int n);
	int search(Contact* found, const Contact* C, const char* name, int noOfRecs);
	void printContacts(const Contact* C, int num);
	void phoneDir(const char* title, const char* filename);
	int menu();
}