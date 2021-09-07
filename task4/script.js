const ul = document.getElementById('ul');

const array = [{
    to: "bookmark.html",
    img: "1.png", 
    alt:"画像1",
    text: "ブックマーク"
}, 
{
    to: "message.html", 
    img: "2.png", 
    alt:"画像2", 
    text: "メッセージ"
}];

for (let i =0; i <= array.length - 1; i++) {
    const li =document.createElement('li');
    const a =document.createElement('a');
    const img =document.createElement('img');

    a.href = array[i].to;
    a.textContent = array[i].text;

    img.src = array[i].img;
    img.alt = array[i].alt;


    ul.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}
