const liElement = document.createElement('li');

const textNode = document.createTextNode('これです');

liElement.appendChild(textNode);

const ulElement = document.getElementById('js-ul');

ulElement.appendChild(liElement);