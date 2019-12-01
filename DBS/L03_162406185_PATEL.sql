/*
Name : Krishna Patel
ID No : 162406185
Date : Sep 23, 2019
Purpose : DBS201 Lab 3

-- Q1. Display the information of all offices.
/*
SELECT *
FROM offices;
*/

-- Q2. Display the employee number for all employees whose office code is 1. 
/*
SELECT employeeNumber
FROM employees
WHERE officeCode =1;
*/

-- Q3. Display customer number, customer name, contact first name and contact last name, and phone for all customers in Paris.
/*
SELECT customerNumber,customerName,contactFirstName,contactLastName,phone
FROM customers 
WHERE UPPER(city)='PARIS';
*/

-- Q4. Display customer number for customers who have payments.
/*
SELECT customerNumber
FROM payments
WHERE amount IS NOT NULL;
*/

-- Q5. List customer numbers, check number, and amount for customers whose payment amount is not in the range of $30,000 to $65,000. Sort the output by top payments amount first.
/*
 SELECT customerNumber,checkNumber,amount 
 FROM payments
 WHERE amount NOT  BETWEEN 30000 AND 65000 
 ORDER BY amount DESC;
 */
 
 -- Q6. Display the order information for all orders that are cancelled. 
 /*
SELECT * 
FROM orders
WHERE LOWER(status)='cancelled';
*/

-- Q7. Display the information of all products with string ‘co’ in their product name. (c and o can be lower or upper case).
/*
 SELECT * 
 FROM products
 WHERE UPPER(productName) LIKE '%CO%';
*/

-- Q8. Display all customers whose contact first name starts with letter s (both lowercase and uppercase) and includes letter e (both lowercase and uppercase).
/*
SELECT * 
FROM customers 
WHERE UPPER(contactFirstName) LIKE 'S%E%';
*/


