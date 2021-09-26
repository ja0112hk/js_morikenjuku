const df = document.createDocumentFragment();

const ul = document.getElementById("ul");

const listItem = [
  {
    to: "bookmark.html",
    img: "1.png",
    alt: "画像1",
    text: "ブックマーク"
  },
  {
    to: "message.html",
    img: "2.png",
    alt: "画像2",
    text: "メッセージ"
  }
];

function arrayPromise() {
  return new Promise((resolve, reject) => {
    resolve(listItem);
  });
}

arrayPromise().then((value) => {
  for (let i = 0; i < value.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = value[i].to;
    a.textContent = value[i].text;

    img.src = value[i].img;
    img.alt = value[i].alt;

    df.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin", img);
  }
  ul.appendChild(df);
});