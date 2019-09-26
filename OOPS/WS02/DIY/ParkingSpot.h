#pragma once
#define _CRT_SECURE_NO_WARNINGS
#include"ParkingSpot.h"
namespace sdds {
	struct ParkingSpot{
		char licensePlate[9];
		char* makeModel;

	};
	void setEmpty(ParkingSpot&);
	bool isEmpty(const ParkingSpot&);
	void freeSpot(ParkingSpot&);
	void print(const ParkingSpot&);
	void parkCar(ParkingSpot&);
}