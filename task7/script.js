const documentFragment = document.createDocumentFragment();

const ul = document.getElementById("ul");

const listItem = [{
  to: "bookmark.html",
  img: "1.png",
  alt: "画像1",
  text: "ブックマーク"
}, {
  to: "message.html",
  img: "2.png",
  alt: "画像2",
  text: "メッセージ"
}];

const getListItem = () => {
  return new Promise((resolve) => {
    resolve(listItem);
    insertLoading();
  });
};

// ローディング画像を表示
const insertLoading = () => {
  const loading = document.getElementById("div");
  const img = document.createElement("img");
  img.src = "loading-circle.gif";
  img.id = "loadingImg";
  loading.appendChild(img);
}

getListItem().then((value) => {
  setTimeout(() => {
    // ローディング画像を非表示
    const img = document.getElementById("loadingImg");
    img.src = "";
    insertUl(value);
  }, 3000);
});

const insertUl = (value) => {
  for (let i = 0; i < value.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = value[i].to;
    a.textContent = value[i].text;

    img.src = value[i].img;
    img.alt = value[i].alt;

    documentFragment.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin", img);
  }
  ul.appendChild(documentFragment);
}
