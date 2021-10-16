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
    insertLoading();
    setTimeout(() => {
      resolve(listItem);
    }, 3000);
  });
};

// ローディング画像を表示
const insertLoading = () => {
  const loading = document.getElementById("div");
  const img = new Image();
  img.src = "loading-circle.gif";
  img.id = "loadingImg";
  loading.appendChild(img);
}

const removeLoading = () => {
  const img = document.getElementById("loadingImg");
  img.remove();
}

getListItem().then((value) => {
  // ローディング画像を非表示
  removeLoading();
  insertUl(value);
});

const insertUl = (value) => {
  listItem.forEach(function (value) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = value.to;
    a.textContent = value.text;

    img.src = value.img;
    img.alt = value.alt;

    documentFragment.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin", img);
  });
  ul.appendChild(documentFragment);
}
