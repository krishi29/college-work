// Data for the "HTML Lists" Page

var fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

var directory = [
    { type: 'file', name: 'file1.txt' },
    { type: 'file', name: 'file2.txt' },
    {
        type: 'directory',
        name: 'HTML Files',
        files: [
            { type: 'file', name: 'file1.html' },
            { type: 'file', name: 'file2.html' }
        ]
    },
    { type: 'file', name: 'file3.txt' },
    {
        type: 'directory',
        name: 'JavaScript Files',
        files: [
            { type: 'file', name: 'file1.js' },
            { type: 'file', name: 'file2.js' },
            { type: 'file', name: 'file3.js' }
        ]
    }
];

var myDiv = document.getElementById('fruits');
var orderlist = document.createElement('ol');

for (var i = 0; i < fruits.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(fruits[i]));
    orderlist.appendChild(item);
}
myDiv.appendChild(orderlist);

myDiv = document.getElementById('directory');
myDiv.appendChild(displaydirectory(directory));

function displaydirectory(obj) {
    var unorderedlist = document.createElement('ul');
    for (var i = 0; i < obj.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(obj[i].name));
        unorderedlist.appendChild(item);
        if (obj[i].type === 'directory') {
            unorderedlist.appendChild(displaydirectory(obj[i].files));
        }
    }
    return unorderedlist;
}
