// Write your code here!
// CREATING DOM ELEMENT

const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.innerHTML = '<h1>LUCY is the champion</h1>';

//SET ATTRIBUTE
newHeader.setAttribute('id', 'victory');