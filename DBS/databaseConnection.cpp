#include <mysql.h>
#include<iostream>

using namespace std;

int main(void) {

	MYSQL* conn;
	conn = mysql_init(0);
	conn = mysql_real_connect(conn, "mymysql.senecacollege.ca", "db_kdpatel27", "9>gp&nBh2C", "db_kdpatel27", 3306, nullptr, 0);

	if (conn) {
		cout << "successful connection to database" << endl;
	}
	else {
		cout << "Connection Failed" << mysql_error(conn) << endl;
	}

	cout << "****************";
	cout << " Employee Report ";
	cout << "****************";

	string sanfranciscoReport = "select e.employeeNumber, e.firstName, e.lastName, o.phone, e.extension from employees e inner join  offices o on e.officeCode = o.officeCode where o.city = 'San Francisco';";
	const char* sanfranciscoReport_q = sanfranciscoReport.c_str();
	int exequery = mysql_query(conn, sanfranciscoReport_q);

	if (exequery) {
		//query execution is not successful
		cout << "Error message: " << mysql_error(conn) << endl;
	}
	else {
		MYSQL_RES* res = mysql_store_result(conn);
		cout << endl;
		cout << "Employee Report: " << endl;

		MYSQL_ROW row;
		while (row = mysql_fetch_row(res)) {
			cout << "ID: " << row[0] << "\t";
			cout << "Name: " << row[1] << " " << row[2] << "\t";
			cout << "Phone: " << row[3] << "\t";
			cout << "Extension: " << row[4];
			cout << endl;
		}

	}

	string managerReport = "select distinct e2.employeeNumber, e2.firstName, e2.lastName, o.phone, e2.extension from employees e1 inner join employees e2 on e2.employeeNumber = e1.reportsTo inner join offices o on e2.officeCode = o.officeCode;";
	const char* managerReport_q = managerReport.c_str();
	int exequery2 = mysql_query(conn, managerReport_q);
	
	if (exequery2) {
		cout << "Error message: " << mysql_error(conn) << endl;
	}
	else {
		//query execution is not successful
		MYSQL_RES* res2 = mysql_store_result(conn);

		cout << "Manager Report: " << endl;

		MYSQL_ROW row2;
		while (row2 = mysql_fetch_row(res2)) {
			cout << "ID: " << row2[0] << "\t";
			cout << "Name: " << row2[1] << " " << row2[2] << "\t";
			cout << "Phone: " << row2[3] << "\t";
			cout << "Extension: " << row2[4];
			cout << endl;
		}
	}

	mysql_close(conn);

	return 0;
}
