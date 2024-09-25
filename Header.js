// const headerNav = document.querySelector(".header");

// window.addEventListener("scroll", function() {
//     var header = document.querySelector("header");
//     header.classlist.toggle("sticky", window.scrollY > 0)
// });

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});
