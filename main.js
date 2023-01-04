// import("./changeImg.js");
// import("./changeNum.js");

const cancleButton = document.querySelector(".image-cancel");
const imageWrapper = document.querySelector(".image-wrapper");
const body = document.querySelector("body");

cancleButton.addEventListener("click", () => {
  imageWrapper.classList.remove("is-active");
});

/*
  에러! - 이벤트 버블링 발생
  
  부모와 자식이 클릭이 겹쳐 클릭 이벤트가 중복으로 발생하는 문제가 생겼다.
  부모한테 if(e.target !== e.currentTarget) {return;}을 줌으로 모달창이 뜨는 공간은
  클릭이 이뤄지지 않도록 했다.
*/
body.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  imageWrapper.classList.add("is-active");
  hideButton();
});

// 모달창 동작

const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const image = document.querySelector(".image");

const imageNumber = document.querySelector(".image-number");

const imgArr = ["seoul.jpg", "tokyo.jpg", "london.jpg"];
let index = 0;

function changeImageNumber() {
  imageNumber.innerHTML = `
    <span>Image ${index + 1} of ${imgArr.length}</span>
  `;
}

function hideButton() {
  if (index == 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (index == imgArr.length - 1) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

leftButton.addEventListener("click", () => {
  index -= 1;
  image.src = `./imgs/${imgArr[index]}`;
  changeImageNumber();
  hideButton();
});

rightButton.addEventListener("click", () => {
  index += 1;
  image.src = `./imgs/${imgArr[index]}`;
  changeImageNumber();
  hideButton();
});
