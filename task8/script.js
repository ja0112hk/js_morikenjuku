const documentFragment = document.createDocumentFragment();

const ul = document.getElementById("ul");

const listItem = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

const insertLoading = () => {
  const div = document.getElementById("loading");
  const img = new Image();
  img.src = "loading-circle.gif";
  img.id = "loadingImg";
  loading.appendChild(img);
}

const removeLoading = () => {
  const img = document.getElementById("loadingImg");
  img.remove();
}

const insertCreatedListToUl = (value) => {
  value.forEach(function (value) {
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

const getListItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("エラーが発生しました。");
    }, 3000);
  });
};

getListItem()
  .then((value) => {
    removeLoading();
    insertCreatedListToUl(value);
  })
  .catch((error) => {
    console.log(error);
  });

insertLoading();