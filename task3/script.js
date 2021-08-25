const ul = document.getElementById('ul');
const liLength = 2;

for (let i =1; i <= liLength; i++) {
    const li =document.createElement('li');
    const a =document.createElement('a');
    const img =document.createElement('img');
    const data = ["bookmark.png", "message.png"];

    a.href = `a${i}.html`
    a.textContent = `a${i}`;

    img.src = `/img/${data[i - 1]}`;


    ul.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}
