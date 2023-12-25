window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// ---------------------navbar BG-color chenger----------------------
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});
// ---------------------navbar BG-color chenger----------------------


let angle = document.querySelector('.first-info');
let element = document.querySelector('.first-main-table');
function slider(){
  angle.classList.toggle('up');
  element.classList.toggle('show');
};


let angle2 = document.querySelector('.second-info');
let element2 = document.querySelector('.second-main-table');
function slider2(){
  angle2.classList.toggle('up');
  element2.classList.toggle('show2');
};


let angle3 = document.querySelector('.third-info');
let element3 = document.querySelector('.third-main-table');
function slider3(){
  angle3.classList.toggle('up');
  element3.classList.toggle('show3');
};