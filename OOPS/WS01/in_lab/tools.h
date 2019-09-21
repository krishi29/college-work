#pragma once
#include<iostream>
using namespace std;

#ifndef NAMESPACE_TOOLS_H
#define NAMESPACE_TOOLS_H 
namespace sdds {
	int menu(int noOfSamples);
	// prints samples error message
	void goBack(int n);
	// displays the user interface menu
	void line(int n, const char* label = nullptr);
	int getInt(int min, int max);
	// moves the cursor backwards
}
#endif 