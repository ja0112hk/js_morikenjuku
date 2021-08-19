const li = document.createElement('li');

const a = document.createElement('a');
a.href = '1.html';
a.textContent = 'これです';

const img = document.createElement('img');
img.src = 'bookmark.png';
img.alt = 'ブックマーク';

// a.appendChild(img);
a.insertAdjacentElement('afterbegin', img);

// li.appendChild(a);
li.insertAdjacentElement('afterbegin', a);

const ul = document.getElementById('js-ul');

ul.appendChild(li);