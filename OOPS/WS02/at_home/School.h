#pragma once
#define _CRT_SECURE_NO_WARNINGS
#include"Subject.h"
namespace sdds {
	struct School {
		int m_noOfSubjects;
		Subject* m_subjects;
		char* m_name;
	};
	void read(School&);
	int report(const School&);

}