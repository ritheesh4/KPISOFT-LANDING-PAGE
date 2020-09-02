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
  let width = element.clientWidth
  let widthMax = element.scrollWidth - element.clientWidth;
  if (direction === "left") {
    if (element.style.marginRight) {
      element.style = "margin-right:0";
      if(element.clientWidth < 768) { element.style="margin-right:11.95vw !important"};
    }
    element.scrollLeft -= width;
   
  } else {
    if (element.scrollLeft === widthMax) {
      element.style = "margin-right :2vw !important";
      if(element.clientWidth < 768) { element.style="margin-right:11.95vw !important"};
    }
    element.scrollLeft += width;
  }
};