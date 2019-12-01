/*
Name: Krishna Patel
ID#: 162406185
Date: 28 September, 2019
Purpose: DBS201 Lab 4 - FALL 2019
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q1 	For all employees in France, display employee number, first name, last name, city, phone number and postal code
/*
SELECT employeeNumber, firstName, lastName, city, phoneNumber, postalCode
FROM employees
WHERE UPPER(city)='FRANCE';
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q2a 	Create a view (vwCustomer_Order) to list all orders with the following data for all customers:
		-- Customer Number, Order number, order date, product name, quantity ordered, and price for each product in every order
DROP VIEW vwCustomerOrder;  -- just in case you make a mistake, then you can drop it to recreate it.

/*
CREATE VIEW vwCustomer_Order AS
SELECT c.customerNumber, o.orderNumber, o.orderDate, p.productName, od.quantityOrdered, od.priceEach
FROM customers c, orders o, products p, orderdetails od
WHERE o.orderNumber = od.orderNumber and c.customerNumber = o.customerNumber and od.productCode = p.productCode;
*/
      
-- Q2b 	Write a statement to view the results of the view just created.        
/*
SELECT *
FROM vwCustomer_Order
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q3 	Using vwCustomerOrder (just created) display the information for customer number 124.  
		-- Sort the output based on order number and then order line number.
/*
SELECT *
FROM vwCustomer_Order
WHERE customerNumber = 124
ORDER BY orderNumber;
*/

-- -----------------------------------------------------------------------------------------------------------------------
-- Q4	Display customer number, first name, last name, phone, and credit limits for all customers who do not have any orders.

/*
SELECT c.customerNumber, c.contactFirstName, c.contactLastName, c.phone, c.creditLimit
FROM customers c
LEFT OUTER JOIN orders o ON c.customerNumber = o.customerNumber
WHERE o.customerNumber IS NULL;
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q5	Create a view (vwEmployeeManager) to display all information of employees and the name and the last name of 
        -- their managers if there is any manager that the employee reports to. 
/*
CREATE VIEW vmEmployeeManager AS
SELECT e1.*, e2.firstName managerFirstName, e2.lastName managerLastName
FROM employees e1
JOIN employees e2 ON e1.reportsTo = e2.employeeNumber;
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q6	Modify the employee_manager view so the view returns employee information for ALL employees who have a manager or not. 
		-- Do not DROP and recreate the view – modify it. (Google is your friend).
/*
ALTER VIEW vmEmployeeManager AS
SELECT e1.*, e2.firstName managerFirstName, e2.lastName managerLastName
FROM employees e1
LEFT OUTER JOIN employees e2 ON e1.reportsTo = e2.employeeNumber;
*/
-- -----------------------------------------------------------------------------------------------------------------------
-- Q7 	Drop both the 2 new views just created in the previous questions

/*
DROP VIEW vwCustomer_Order;
DROP VIEW vmEmployeeManager;
*/