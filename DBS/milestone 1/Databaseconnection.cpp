
/*
Name : Krishna Patel,Ostap Sulyk,Darsh Modessa,Monica Pendrak
Group : 23
Purpose : Milestone 1
*/


#define _CRT_SECURE_NO_WARNINGS

#include <mysql.h>
#include <iostream>
#include <string>
#include <iomanip>

using namespace std;


struct Employee {
	char employeeNumber[10];
	char lastName[50];
	char firstName[50];
	char email[100];
	char phone[50];
	char extension[10];
	char reportsTo[100];
	char jobTitle[50];
	char city[50];
};

//prototypes
int menu(void);
int findEmployee(MYSQL* conn, int employeeNumber, struct Employee& emp);
void displayEmployee(MYSQL* conn, struct Employee& emp);
void displayAllEmployees(MYSQL* conn);


int main(void) {
	MYSQL* conn;
	struct Employee employee;
	bool flag = 1;
	conn = mysql_init(0);
	conn = mysql_real_connect(conn, "mymysql.senecacollege.ca", "db_kdpatel27", "9>gp&nBh2C", "db_kdpatel27", 3306, nullptr, 0);

	if (conn) {

		string createview = "CREATE OR REPLACE VIEW employeeDetails AS SELECT e.employeeNumber, e.lastName, e.firstName, e.email, o.phone, e.extension, concat(f.firstName, ' ', f.lastname) AS 'reportsTo', e.jobTitle, o.city FROM employees e LEFT JOIN employees f ON e.reportsTo = f.employeeNumber JOIN offices o ON e.officeCode = o.officeCode;";
		const char* empViewQry = createview.c_str();
		int status = mysql_query(conn, empViewQry);

		if (!status) {
			do {
				switch (menu()) {
				case 0:
					cout << "Exiting the program..." << endl;
					flag = 0;
					break;

				case 1:
					displayEmployee(conn, employee);
					break;

				case 2:
					displayAllEmployees(conn);
					break;


				default:
					cout << "This is unlikely to be displayed";
				}
			} while (flag);
		}
		else {

			cout << "Create View statement failed: " << mysql_error(conn) << ": " << mysql_errno(conn) << endl;
		}


	}
	else { //if the connection is not successful
		cout << "Connection failed" << mysql_error(conn) << ": " << mysql_errno(conn) << endl;
	}

	mysql_close(conn);

	return 0;

}

int menu(void) {
	int option;
	bool valid = false;

	cout << "******************** HR Menu ********************" << endl;
	cout << "1) Find Employee" << endl;
	cout << "2) Employees Report" << endl;
	cout << "0) Exit" << endl;

	cout << "Please enter your selection (0 - 2): ";
	do {
		cin >> option;
		if (cin.fail()) {
			cin.clear();
			cin.ignore(1000, '\n');
		}
		else {
			if (option >= 0 && option <= 5)
				valid = true;
			else
				cout << "Invalid Entry, Enter again: ";
		}
	} while (!valid);

	return option;

}

int findEmployee(MYSQL* conn, int employeeNumber, struct Employee& emp) {
	int ret = 0;

	string query = "SELECT * FROM employeeDetails WHERE employeeNumber = " + to_string(employeeNumber) + ";";
	const char* q = query.c_str();
	int exequery = mysql_query(conn, q);

	if (!exequery) {


		MYSQL_RES* recordSet;
		recordSet = mysql_store_result(conn);

		MYSQL_ROW row;
		row = mysql_fetch_row(recordSet);

		if (row == nullptr) {
			cout << "Employee " << employeeNumber << " does not exist." << endl << endl;
		}
		else {
			ret = 1;


			//copy the found employee to emp
			strcpy(emp.employeeNumber, row[0]);
			strcpy(emp.lastName, row[1]);
			strcpy(emp.firstName, row[2]);
			strcpy(emp.email, row[3]);
			strcpy(emp.phone, row[4]);
			strcpy(emp.extension, row[5]);
			strcpy(emp.reportsTo, row[6] ? row[6] : " ");//for null value in reportsTo
			strcpy(emp.jobTitle, row[7]);
			strcpy(emp.city, row[8]);
		}

	}
	else {
		//query execution is not successful
		cout << "Error message: " << mysql_error(conn) << ": " << mysql_errno(conn) << endl << endl;
	}
	return ret;

}

void displayEmployee(MYSQL* conn, struct Employee& emp) {
	int empNo;
	cout << "Please enter the employee number: ";
	cin >> empNo;

	int found = findEmployee(conn, empNo, emp);

	if (found) {
		//cout << "\nDisplay by displayEmployee()" << endl;
		cout << "employeeNumber = " << emp.employeeNumber << endl;
		cout << "lastName = " << emp.lastName << endl;
		cout << "firstName = " << emp.firstName << endl;
		cout << "email = " << emp.email << endl;
		cout << "phone = " << emp.phone << endl;
		cout << "extension = " << emp.extension << endl;
		cout << "reportsTo = " << emp.reportsTo << endl;
		cout << "jobTitle = " << emp.jobTitle << endl;
		cout << "city = " << emp.city << endl << endl;
	}
}

void displayAllEmployees(MYSQL* conn) {
	string query = "SELECT employeeNumber, concat(firstName, ' ', lastName) AS 'Employee Name', email, phone, extension, reportsTo FROM employeeDetails;";
	const char* q = query.c_str();
	int exequery = mysql_query(conn, q);

	if (!exequery) {

		cout << "The query executed successfully with no error." << endl;

		MYSQL_RES* recordSet;
		recordSet = mysql_store_result(conn);

		MYSQL_ROW row;
		//header
		cout << left << setw(10) << "E" << left << setw(25) << "Employee Name" << setw(35) << "Email" << setw(20) << "Phone" << setw(10) << "Ext" << setw(25) << "Manager" << endl;
		cout << "-----------------------------------------------------------------------------------------------------------------------" << endl << endl;

		while (row = mysql_fetch_row(recordSet)) {
			cout << left << setw(10) << row[0] << setw(25) << row[1] << setw(35) << row[2] << setw(20) << row[3] << setw(10) << row[4] << setw(25);
			row[5] ? cout << row[5] : cout << " "; //for null value
			cout << endl;
		}
		cout << endl;
	}
	else {

		cout << "Error message: " << mysql_error(conn) << ": " << mysql_errno(conn) << endl << endl;
	}



}