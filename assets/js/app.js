// Sticky Navbar

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});

// Dark Mode

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = toggle.querySelector("i");

    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
window.addEventListener("load",()=>{

    document.querySelector(".ui").style.width="95%";
    document.querySelector(".ux").style.width="90%";
    document.querySelector(".proto").style.width="90%";
    document.querySelector(".html").style.width="95%";

});