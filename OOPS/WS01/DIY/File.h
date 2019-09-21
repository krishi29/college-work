#pragma once
#include<iostream>
#include"PhoneDir.h"
#include"Contact.h"
using namespace sdds;
namespace sdds {
	bool readContact(Contact* C, FILE* fptr);
	void writeContact(FILE* fptr, const Contact* C);
	int readContacts(Contact* contacts, const char* filename);
	void writeContacts(Contact* contacts, int cntno, const char* filename);
}
