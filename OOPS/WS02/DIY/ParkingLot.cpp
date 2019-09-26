#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include<string.h>
#include"ParkingSpot.h"
#include"ParkingLot.h"
#include"utils.h"

using namespace std;
using namespace sdds;

void sdds::setEmpty(ParkingLot& parkingLot) {
	parkingLot.noOfSpots = 0;
	parkingLot.parkingSpots = NULL;
}
bool sdds::isEmpty(const ParkingLot& parkingLot) {
	if (parkingLot.parkingSpots == NULL) {
		return true;
	}
	else {
		return false;
	}
		
}

void sdds::openParking(ParkingLot& parkingLot, int noOfSpots) {
	parkingLot.parkingSpots = new ParkingSpot[noOfSpots];
	parkingLot.noOfSpots = noOfSpots;

	int i;
	for (i = 0; i < parkingLot.noOfSpots; i++) {
		setEmpty(parkingLot.parkingSpots[i]);
	}

}
int sdds::parkCar(ParkingLot& parkingLot) {
	int i;
	for (i = 0; i < parkingLot.noOfSpots; i++) {
		if (isEmpty(parkingLot.parkingSpots[i])) {
			parkCar(parkingLot.parkingSpots[i]);
			return i;
		}
	
	}
	return -1;

}

bool sdds::returnCar(ParkingLot& parkingLot, int spotNo) {
	if (spotNo >= 0 && spotNo < parkingLot.noOfSpots && !isEmpty(parkingLot.parkingSpots[spotNo])) {
		cout << "Returning ";

		print(parkingLot.parkingSpots[spotNo]);
		freeSpot(parkingLot.parkingSpots[spotNo]);
		return true;
	}
	else {
		return false;
	}
		
}
void sdds::closeParking(ParkingLot& parkingLot) {
	int i;
	for (i = 0; i < parkingLot.noOfSpots; i++) {
		if (!isEmpty(parkingLot.parkingSpots[i])) {
			returnCar(parkingLot,i);
		}
	}
	delete[] parkingLot.parkingSpots;
}