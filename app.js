const navBar = document.getElementById('main-nav');

window.onscroll = function () {
  var top = window.scrollY;

  if (top >= 100) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
};
