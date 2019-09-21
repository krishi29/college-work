#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <cstdio>
#include <cstring>
#include <iomanip>
#include"Contact.h"
#include"File.h"
using namespace sdds;
#define MAX_REC_NO 100



bool sdds::readContact(Contact* C, FILE* fptr) {
	return fscanf(fptr, "%[^,],%lld", C->name, &C->phoneNumber) == 2;
}

void sdds::writeContact(FILE* fptr, const Contact* C) {
	fprintf(fptr, "%s,%lld", C->name, C->phoneNumber);
}

int sdds::readContacts(Contact* contacts, const char* filename) {
	FILE* fptr = fopen(filename, "r");
	Contact C;
	int num;
	for (num = 0; fptr && num < MAX_REC_NO && readContact(&C, fptr); num++) {
		contacts[num] = C;
	}
	return num;
}

void sdds::writeContacts(Contact* contacts, int cntno, const char* filename) {
	FILE* fptr = fopen(filename, "w");
	int num;
	for (num = 0; num < cntno; num++) {
		writeContact(fptr, &contacts[num]);
	}
	fclose(fptr);
}