const liElement = document.createElement('li');

const anchorElement = document.createElement('a');
anchorElement.setAttribute('href', '1.html');
anchorElement.textContent = 'これです';

const bookmarkImg = document.createElement('img');
bookmarkImg.setAttribute('src', 'bookmark.png');
bookmarkImg.setAttribute('alt', 'ブックマーク');

anchorElement.appendChild(bookmarkImg);

liElement.appendChild(anchorElement);

const ulElement = document.getElementById('js-ul');

ulElement.appendChild(liElement);