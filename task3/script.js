const ul = document.getElementById('ul');

for (let i =1; i <=2; i++) {
    const li =document.createElement('li');
    const a =document.createElement('a');
    const img =document.createElement('img');

    a.href = "a" + i + ".html";
    a.textContent = "a" + i;

    ul.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}

ul.firstChild.querySelector('img').src = "/img/bookmark.png";
ul.lastChild.querySelector('img').src = "/img/message.png";