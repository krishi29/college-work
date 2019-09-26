/**
 * WEB222 – Assignment 01
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date: <SUBMISSION_DATE>
 *
 * Follow all instructions in README.md
 */

/**
 * Task 1 - format a name and email address into the following String format:
 *
 *      "Name <email@address>"
 *
 * `name` - a String with the person's name (e.g., "Kim Smythe")
 * `email` - a String with the person's email (e.g., "kims@gmail.com")
 *
 * For example: "Kim Smythe <kims@gmail.com>"
 */

function formatEmailAddress(name, email) {
    // Your code here...
}

/**
 * Task 2 - calculate the number of seconds for the given number of days
 *
 * `days` - a Number of days.
 *
 * Ignore any fractional parts (i.e., treat 1.34 the same as 1).
 * If no value is given for `days` (undefined, null, 0), assume 1 as a default.
 *
 * Return the number of seconds for the given days as a Number.
 */
function toSeconds(days) {
    // Your code here...
}

/**
 * Task 3 - format a file path as one of a Windows or Unix path.
 *
 * `dir` - a String with the name of the directory (e.g., 'documents')
 * `filename` - a String with the name of a file (e.g., 'resume')
 * `ext` - a String with a file extension (e.g., 'txt'), or the empty string
 * if there is no file extension.
 * `windowsDrive` - an optional String, which indicates a Windows Drive,
 * for example 'C:'.  If present, create a Windows path. Otherwise a Unix path.
 *
 * Windows: "C:\\documents\\resume.txt" (note the escaped backslash)
 * Unix: "/documents/resume.txt" (no drive name, forward slashes)
 */
function formatPath(dir, filename, ext, windowsDrive) {
    // Your code here...
}

/**
 * Task 4 - convert a temperature in Celsius or Fahrenheit to Kelvin,
 * returning a formatted string (e.g., "288.71 K").
 *
 * `temp` - a Number with a temperature value (e.g., 17)
 * `unit` - a String with a temperature scale unit.  Should be one of:
 * C, c, F, or F.  If no value is given, assume C. If anything else is given,
 * throw a new Error, "unknown unit". Hint:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#Description
 */
var tempToKelvin = function(temp, unit) {
    // Your code here...
};

/**
 * Task 5 - find the smallest number in a list.
 *
 * Allow any number of arguments to be passed to the function.  Allow both
 * String and Number arguments to be passed, but throw an error if any other
 * type is passed to the function (e.g., Boolean, Date, etc.). If the list
 * is empty (nothing passed to the function), return Number.MIN_VALUE, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
 */
function findSmallest() {
    // Your code here...
}

/**
 * Task 6 - find all odd numbers in a list.
 *
 * Allow any number of Number arguments to be passed to the function.
 * If a value is passed to the function that is not a Number, ignore it
 * and continue processing the rest. If the list is empty (nothing passed
 * to the function, or all need to be ignored, return `null`).
 *
 * Return a formatted string with all odd numbers in a list, for example:
 *
 * "1, 3, 5"
 */
const oddNumbers = (...numbers) => {
    // Your code here...
};

/**
 * Task 7 - calculate the Harmonized Sales Tax (HST) for a value in cents.
 * Return the value of a purchase with HST (13%) added to cents arguments.
 *
 * `cents` - a Number of cents.  If cents is missing (undefined/null) assume 0.
 *
 * If the cost in cents is exactly 75 cents, apply no HST on the purchase.
 *
 * Throw away any fractional cents, always returning a whole number. Hint:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 */
function addHST(cents) {
    // Your code here...
}

/**
 * Task 8 - make name=value pairs ready for inclusion on a URL's query string
 *
 * A URL can contain optional name=value pairs at the end. See:
 * https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * Given a product name (String), quantity (Number), and whether
 * or not this is a gift (Boolean), build and return a query string
 * like this:
 *
 * buildQueryString('shirt', 6);
 *
 * ?p=shirt&q=6
 *
 * Make sure quantity is at least 1 in all cases.  If 0 or a negative number
 * is passed into the function, use 1 instead.
 *
 * If it's a gift, you would do buildQueryString('shirt', 6, true);
 *
 * ?p=shirt&q=6&gift
 *
 * Make sure you properly encode any URL components, since URLs can't
 * contain spaces or certain other characters.  Hint:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 */
function buildQueryString(productName, quantity, isGift) {
    // Your code here...
}

/**
 * Do not modify the following code, which exposes your functions to the tests.
 */
module.exports = {
    formatEmailAddress,
    toSeconds,
    formatPath,
    tempToKelvin,
    findSmallest,
    oddNumbers,
    addHST,
    buildQueryString
};
