#include <iostream>
#include<string.h>
#include"Subject.h"
#include"School.h"
#include"utils.h"

using namespace std;
using namespace sdds;

void sdds::read(School& Sch) {
	// character array for user input
	char schoolName[61];

	// read schoolname from user
	cout << "Please enter the name of the school:\n> ";
	read(schoolName, 61 , "Name is too long, only 60 characters allowed!\nRedo Entry: ");

	// copy user input from temp string to Sch.m_name
	Sch.m_name = new char[strlen(schoolName) + 1]; // dynamically allocate memory(+1 to allow for \0 at end of string)
	strcpy(Sch.m_name, schoolName); // copy string 

	cout << "Please enter the number of subjects offered by " << schoolName << ": ";

	read(Sch.m_noOfSubjects, 2, 50, "Invalid Number of subjects, 2<=ENTRY<=50\nRedo Entry: ");

	Sch.m_subjects = new Subject[Sch.m_noOfSubjects];

	int i;
	for (i = 0; i < Sch.m_noOfSubjects; i++) {
		// display sequence no
		cout << i + 1 << ") ------------------------------";

		// read ith element of subjects
		read(Sch.m_subjects[i]);
	}
}



