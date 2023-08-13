const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const toTop = document.querySelector(".to-top");

//navbar burger
burger.addEventListener('click', function(){
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});