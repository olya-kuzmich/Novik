let close=document.querySelector(".but_menu");
let nav=document.querySelector(".nav_menu");
let burger=document.querySelector(".menu");

nav.addEventListener("click", function () {
  nav.classList.add("d-none");
});

burger.addEventListener('click', function(){
    nav.classList.remove("d-none");
})