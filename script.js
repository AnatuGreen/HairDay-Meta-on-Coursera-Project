// console.log("loaded")
// Get the navigation bar element
var navbar = document.getElementById("navbar");

// Get the initial offset position of the navigation bar
var sticky = navbar.offsetTop;

// Add a scroll event listener
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
