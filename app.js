h1 = document.querySelector("h1");

function changecolor(color, delay, nextcolorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextcolorChange) nextcolorChange();
  }, delay);
}

changecolor("red", 1000, () => {
  changecolor("blue", 1000, () => {
    changecolor("grey", 1000, () => {
      changecolor("gold", 1000);
    });
  });
});
