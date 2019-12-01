// Data for the "HTML Tables" Page

var users = [
    {
        first_name: 'Kaitlin',
        last_name: 'Burns',
        age: 23,
        email: 'kburns99753@usermail.com'
    },
    {
        first_name: 'Joshua',
        last_name: 'Feir',
        age: 31,
        email: 'josh319726@usermail.com'
    },
    {
        first_name: 'Stephen',
        last_name: 'Shaw',
        age: 28,
        email: 'steve.shaw47628@usermail.com'
    },
    {
        first_name: 'Timothy',
        last_name: 'McAlpine',
        age: 37,
        email: 'Timbo72469@usermail.com'
    },
    {
        first_name: 'Sarah',
        last_name: 'Connor',
        age: 19,
        email: 'SarahC6320@usermail.com'
    }
];

var myDiv = document.getElementById('table001');

var tableElement = document.createElement('table');
tableElement.appendChild(createHeader());

for (var i = 0; i < users.length; i++) {
    tableElement.appendChild(createRow(users[i]));
}

myDiv.appendChild(tableElement);

function createHeader() {
    var headerRow = document.createElement('tr');
    headerRow.appendChild(createHeaderElement('First Name'));
    headerRow.appendChild(createHeaderElement('Last Name'));
    headerRow.appendChild(createHeaderElement('Age'));
    headerRow.appendChild(createHeaderElement('Email'));
    return headerRow;
}
function createRow(obj) {
    var row = document.createElement('tr');
    row.appendChild(createDataElement(obj.first_name));
    row.appendChild(createDataElement(obj.last_name));
    row.appendChild(createDataElement(obj.age));

    var mailTo = document.createElement('a');
    mailTo.href = 'mailto:' + obj.email;
    mailTo.appendChild(document.createTextNode(obj.email));
    var dataElement = document.createElement('td');

    dataElement.appendChild(mailTo);
    row.appendChild(dataElement);
    return row;
}
function createDataElement(str) {
    var dataElement = document.createElement('td');
    dataElement.appendChild(document.createTextNode(str));
    return dataElement;
}
function createHeaderElement(str) {
    var dataElement = document.createElement('th');
    dataElement.appendChild(document.createTextNode(str));
    return dataElement;
}
