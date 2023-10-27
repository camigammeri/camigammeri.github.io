/*// SHOW/HIDE NAV ON SCROLL

const nav = document.querySelector("nav");
nav.classList.add("nav-up");
const navHeight = 92;

// The point the scroll starts from (in px)
let lastScrollY = 0;

// How far to scroll (in px) before triggering
const delta = 1;

// Function to run on scrolling
function scrolled() {
  let sy = window.scrollY;

  // Only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {

    // Scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    }

    // Scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
    }

    // Update current scroll point
    lastScrollY = sy;
  }
}

// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function (e) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    scrolled();
    didScroll = false;
  }
}, 250)*/

// NAV COLOR CHANGE ON SCROLL

document.addEventListener('scroll', () => {
  const header = document.querySelector('nav');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// EMAILJS

function sendMail() {

  var params = {
    name: document.getElementById("#name").value,
    email: document.getElementById("#email").value,
    message: document.getElementById("#message").value,
  };

  emailjs.send("service_kax7wo9", "template_zahmm6e", params).then(function (res) {
    alert("Success" + res.status);
  })
}