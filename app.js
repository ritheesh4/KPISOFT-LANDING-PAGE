const navBar = document.getElementById("main-nav");

window.onscroll = function() {
  var top = window.scrollY;

  if (top >= 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
};

document.getElementById("leftMove").addEventListener("click", () => {
  scrollItems("left");
});

document.getElementById("rightMove").addEventListener("click", () => {
  scrollItems("right");
});

const scrollItems = direction => {
  let element = document.getElementById("testominals");
  let width = element.clientWidth;
  let widthMax = element.scrollWidth - element.clientWidth;

  if (direction === "left") {
    element.scrollLeft -= width;
    if (element.style.marginRight) {
      element.style = "margin-right:0";
    }
  } else {
    element.scrollLeft += width;
    if (element.scrollLeft === widthMax) {
      element.style = "margin-right :2rem";
    }
  }
};
