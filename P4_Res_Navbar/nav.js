let navToggle = document.getElementById("nav-toggle");
let navLink = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    navLink.classList.toggle("show-links")
})