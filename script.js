const menuMovel = document.querySelector(".navbar")
const iconeMenu = document.querySelector(".menu-mobile")

iconeMenu.addEventListener('click', function() {
    menuMovel.classList.toggle("active-menu");
})