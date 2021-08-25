const ul = document.getElementById('ul');
const liLength = 2;
const data = ["bookmark.png", "message.png"];

for (let i =1; i <= liLength; i++) {
    const li =document.createElement('li');
    const a =document.createElement('a');
    const img =document.createElement('img');

    a.href = `a${i}.html`
    a.textContent = `a${i}`;

    img.src = `/img/${data[i - 1]}`;


    ul.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}
