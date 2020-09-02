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
  if (direction === "left") {
    element.scrollLeft -= width;
   
  } else {
    element.scrollLeft += width;
  }
};