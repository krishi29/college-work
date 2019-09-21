
#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include<string.h>
#include"Subject.h"
#include"utils.h"

using namespace std;
using namespace sdds;
void sdds::read(char* targetString) {
	cout << "Enter subject name: ";
	read(targetString, 70, "Name is too long, only 70 characters allowed!\nRedo Entry: ");

}
void sdds::read(int& targetInt) {
	cout << "Enter number of sections: ";
	read(targetInt, 1,10, "Invalid Number of sections, 1<=ENTRY<=10\nRedo Entry: " );

}
void sdds::read(int targetArray[], int noOfElements) {
	cout << "Enter the number of students in each one of the "<< noOfElements << " sections:\n";
	int i;
	for (i = 0; i < noOfElements; i++) {
		cout << i+1 << ": ";
		read(targetArray[i], 5, 35, "Invalid Number of students, 5<=ENTRY<=35\nRedo Entry: ");
	}
}

void sdds::read(Subject& Sub) {
	char str[71];
	read(str);
	Sub.m_subjectName = new char[strlen(str)+1];
	strcpy(Sub.m_subjectName, str);
	Sub.m_noOfSections = new int;
	read(*Sub.m_noOfSections);
	Sub.m_noOfStdsInSecs = new int[*Sub.m_noOfSections];
	read(Sub.m_noOfStdsInSecs, *Sub.m_noOfSections);

}

int sdds::report(const Subject& Sub) {
	int i,total=0;
	for (i = 0; i < *Sub.m_noOfSections; i++) {
		if (i < *Sub.m_noOfSections - 1)
			cout << Sub.m_noOfStdsInSecs[i] << ",";
		else
			cout << Sub.m_noOfStdsInSecs[i];
		total = total + Sub.m_noOfStdsInSecs[i];
	}
	
	cout << '\n' << Sub.m_subjectName << ": " << total << endl;

	return total;

}

void sdds::freeMem(Subject& Sub) {
	delete[]Sub.m_subjectName;
	delete Sub.m_noOfSections;
	delete[]Sub.m_noOfStdsInSecs;

}