#pragma once
#define _CRT_SECURE_NO_WARNINGS
#include"ParkingLot.h"
#include"ParkingSpot.h"
namespace sdds {
	struct ParkingLot {
		int noOfSpots;
		ParkingSpot* parkingSpots;

	};
	void setEmpty(ParkingLot&);
	bool isEmpty(const ParkingLot&);
	void openParking(ParkingLot&, int noOfSpots);
	int parkCar(ParkingLot&);
	bool returnCar(ParkingLot&, int spotNo);
	void closeParking(ParkingLot&);
}