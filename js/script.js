//Parallax
document.addEventListener("mousemove", parallax);
function parallax(e) {
    img = document.querySelector(".zenitsu");
    shape = document.querySelector(".shape");

    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;

    img.style.transform = `translateX(${-x}px) translateY(${-y}px`;
    shape.style.transform = `translateX(${-x}px) translateY(${-y}px`;
}

//DarkMode
let moon = document.querySelector(".moon");
let sunny = document.querySelector(".sunny");
let links = document.querySelectorAll(".dot");
let hamburguer = document.querySelector(".hamburguer");
let nav = document.querySelector(".nav");


moon.addEventListener("click", () => {
    document.body.style.backgroundColor = "#111";
    document.querySelector(".btnCV").style.backgroundColor = "#cc5803";
    moon.style.transform = "rotate(360deg)";
    links.forEach((e) => {
        e.style.color = "var(--white-darkmode)";
    });
    setTimeout(() => {
        moon.style.transform = "translateY(-20px)";
        moon.style.opacity = "0";
    }, 1000)
    setTimeout(() => {
        moon.style.display = "none";
        sunny.style.display = "block"
    }, 2000)

    setTimeout(() => {
        sunny.style.opacity = "1";
        moon.style.transform = "translateY(0px)";
        moon.style.transform = "rotate(0deg)";
    }, 2500)


    document.body.style.color = "var(--white-darkmode)"
    document.querySelector(".boxLeft h1").style.color = "var(--white-darkmode)";
    moon.style.filter = "invert(1)";
    sunny.style.filter = "invert(1)";
    hamburguer.style.filter = "invert(1)"
    nav.style.backgroundColor = "#111";

    document.querySelectorAll(".aboutRight img").forEach((e) => {
        e.style.filter = "invert(1)";
    })
    document.querySelectorAll(".card").forEach((e) => {
        e.style.backgroundColor = "#171717";
    })
})






sunny.addEventListener("click", () => {
    document.body.style.backgroundColor = "";
    document.querySelector(".btnCV").style.backgroundColor = "";
    sunny.style.transform = "rotate(360deg)";

    links.forEach((e) => {
        e.style.color = "";
    });
    setTimeout(() => {
        sunny.style.transform = "translateY(-20px)";
        sunny.style.opacity = "0";
    }, 1000)
    setTimeout(() => {
        sunny.style.display = "none";
        moon.style.display = "block"
    }, 2000)

    setTimeout(() => {
        moon.style.opacity = "1";
        sunny.style.transform = "translateY(0px)";
        sunny.style.transform = "rotate(0deg)";
    }, 2500)


    document.body.style.color = ""
    document.querySelector(".boxLeft h1").style.color = "";
    moon.style.filter = "invert(0)";
    sunny.style.filter = "invert(0)";
    hamburguer.style.filter = "invert(0)"
    nav.style.backgroundColor = "";

    document.querySelectorAll(".aboutRight img").forEach((e) => {
        e.style.filter = "";
    })
    document.querySelectorAll(".card").forEach((e) => {
        e.style.backgroundColor = "";
    })
})