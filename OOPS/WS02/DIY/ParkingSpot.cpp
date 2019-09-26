#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include<string.h>
#include"ParkingSpot.h"
#include"utils.h"

using namespace std;
using namespace sdds;

void sdds::setEmpty(ParkingSpot& parkingSpot) {
	*parkingSpot.licensePlate = { '\0' };
	parkingSpot.makeModel = NULL;

}
bool sdds::isEmpty(const ParkingSpot& parkingSpot) {
	//if make=null and model=null returns true

	if (parkingSpot.makeModel == NULL) {
		return true;
	}
	else
		return false;
}
void sdds::freeSpot(ParkingSpot& parkingSpot) {
	delete[] parkingSpot.makeModel;
	setEmpty(parkingSpot);
}
void sdds::print(const ParkingSpot& parkingSpot) {
	cout << parkingSpot.makeModel << ", plate number: " << parkingSpot.licensePlate << endl;
}

void sdds::parkCar(ParkingSpot& parkingSpot) {
	char makeModel[61];
	cout << "Make and Model: ";
	read(makeModel, 60 , "Too long, Make and model must be shorter than 60 characters\nRedo Entry: ");
	parkingSpot.makeModel = new char[strlen(makeModel) + 1]; // dynamically allocate memory(+1 to allow for \0 at end of string)
	strcpy(parkingSpot.makeModel, makeModel); // copy string 
	cout << "License Plate: "; 
	read(parkingSpot.licensePlate, 8, "Too long, License Plate must be shorter than 8 characters\nRedo Entry: ");
	
}