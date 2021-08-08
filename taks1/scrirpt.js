const newElement = document.createElement('li');

const newContent = document.createTextNode('これです');

newElement.appendChild(newContent);

const parentUl = document.querySelector('ul');

parentUl.appendChild(newElement);