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

const leftScroll = () => {
  document.getElementById('cardWrapper').scrollBy({
      left : -294,
      behavior : 'smooth'
  })
}

const rightScroll = () => {
document.getElementById('cardWrapper').scrollBy({
  left: 294,
  behavior: 'smooth'
});
}