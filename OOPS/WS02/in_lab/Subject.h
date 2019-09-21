#pragma once
#define _CRT_SECURE_NO_WARNINGS
namespace sdds {
	struct Subject {
		int* m_noOfSections;
		int* m_noOfStdsInSecs;
		char* m_subjectName;
	};

	void read(char*);
	void read(int&);
	void read(int[], int);
	void read(Subject&);
	int report(const Subject&);
	void freeMem(Subject&);

}
