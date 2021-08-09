const liElement = document.createElement('li');

const liContent = document.createTextNode('これです');

liElement.appendChild(liContent);

const ulElement = document.getElementById('ul');

ulElement.appendChild(liElement);