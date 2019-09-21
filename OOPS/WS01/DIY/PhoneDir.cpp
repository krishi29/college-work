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

#define MAX_REC_NO 100

void sdds::sort(Contact c[], int n) {
	Contact temp;
	for (int i = n - 1; i > 0; i--) {
		for (int j = 0; j < i; j++) {
			if (compare(&c[j], &c[j + 1]) > 0) {
				temp = c[j];
				c[j] = c[j + 1];
				c[j + 1] = temp;
			}
		}
	}
}
int sdds::search(Contact* found, const Contact* C, const char* name, int noOfRecs) {
	int i;
	int noOfMatches = 0;
	for (i = 0; i < noOfRecs; i++) {
		if (nameInContact(&C[i], name)) {
			found[noOfMatches] = C[i];
			noOfMatches++;
		}
	}
	return noOfMatches;
}


void sdds::printContacts(const Contact* C, int num) {
	for (int i = 0; i < num; i++) {
		printContact(&C[i]);
	}
}


void sdds::phoneDir(const char* title, const char* filename) {
	int option;
	Contact C[MAX_REC_NO];
	Contact SearchRes[MAX_REC_NO];
	Contact temp;
	bool changed = false;
	int noOfRecs = readContacts(C, filename);
	int noOfSrchs;
	cout << title << ".................." << endl;
	do {
		switch (option = menu()) {
		case 0:
			cout << "Goodbye!" << endl;
			break;
		case 1: // add
			getContact(&temp);
			C[noOfRecs] = temp;
			noOfRecs++;
			changed = true;
			break;
		case 2: // search
			cout << "Name to search for: ";
			getStr(temp.name, 30);
			noOfSrchs = search(SearchRes, C, temp.name, noOfRecs);
			if (noOfSrchs) {
				printContacts(SearchRes, noOfSrchs);
			}
			else {
				cout << temp.name << ", not found!" << endl;
			}
			break;
		case 3:  // Sort
			sort(C, noOfRecs);
			cout << "Sorted!" << endl;
			changed = true;
			break;
		case 4:
			printContacts(C, noOfRecs);
			break;
		}
	} while (option);
	if (changed) {
		cout << endl << "The phone diecotry has changed!" << "Save changes? (Y/N): ";
		if (yes()) {
			writeContacts(C, noOfRecs, filename);
			cout << "Changes Saved!!" << endl;
		}
		else {
			cout << "Changes aborted!!" << endl;
		}
	}
}

// displays the user interface menu
int sdds::menu() {
	cout << endl
		<< "1- Add Phone Record " << endl;
	cout << "2- Search           " << endl;
	cout << "3- Sort             " << endl;
	cout << "4- List all         " << endl;
	cout << "0- Exit             " << endl;
	cout << "> ";
	return int(getLongLong(0, 4, "option"));
}
