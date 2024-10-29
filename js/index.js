// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "var(--primary-color)";
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "transparent";
  }
}

const leftScroll = (id) => {
  document.getElementById(id).scrollBy({
      left : -294,
      behavior : 'smooth'
  })
}

const rightScroll = (id) => {
document.getElementById(id).scrollBy({
  left: 294,
  behavior: 'smooth'
});
}

// fade animation
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll('.fade-in');

  function checkVisibility() {
    var windowHeight = window.innerHeight;
    elements.forEach(function (element) {
      var elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();  // Check visibility on page load
});