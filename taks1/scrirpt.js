const liElement = document.createElement('li');

const textNode = document.createTextNode('ใใใงใ');

liElement.appendChild(textNode);

const ulElement = document.getElementById('js-ul');

ulElement.appendChild(liElement);