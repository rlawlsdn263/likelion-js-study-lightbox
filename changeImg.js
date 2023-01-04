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

// for (let item of imgArr) {
//   if(image.src)
// }
