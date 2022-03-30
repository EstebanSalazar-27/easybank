const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".unorderlist__nav")

navToggle.addEventListener("click", () =>{

  navMenu.classList.toggle("unorderlist__nav--visible")
})


