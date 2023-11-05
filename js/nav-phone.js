const hamburger_button = document.querySelector("#hamburger_button");
const navbar = document.querySelector("#navbar");
const navbarList = document.querySelector(".navbar__list");
const body = document.querySelector("body");

navbarList.addEventListener("click", () => {
  if (navbar.classList.contains("navbar-phone")) {
    close();
    console.log(hamburger_button.style.display);
  }
});

hamburger_button.addEventListener("click", (event) => {
  close();
});

const close = () => {
  body.classList.toggle("body-lock");

  const links = [...navbarList.getElementsByTagName("a")];

  navbar.classList.toggle("navbar-phone");

  links.forEach((elem) => {
    elem.classList.toggle("navbar-phone--item");
  });

  const ButtonSrc = hamburger_button.src;

  hamburger_button.src = ButtonSrc.includes("/assets/images/ham-icon.svg")
    ? "/assets/images/x.svg"
    : "/assets/images/ham-icon.svg";
};

//bug fix when changing resolution with opened navbar
window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    navbar.classList.remove("navbar-phone");
    const links = [...navbarList.getElementsByTagName("a")];

    links.forEach((elem) => {
      elem.classList.remove("navbar-phone--item");
    });
    if (!navbar.classList.contains("navbar-phone")) {
      hamburger_button.src = "/assets/images/ham-icon.svg";
    }
  }
});

// console.log("k = " + document.querySelector("#p1").getTotalLength());
// console.log("o = " + document.querySelector("#p2").getTotalLength());
// console.log("d = " + document.querySelector("#p3").getTotalLength());
// console.log("z = " + document.querySelector("#p4").getTotalLength());
// console.log("i = " + document.querySelector("#p5").getTotalLength());
// console.log("m = " + document.querySelector("#p6").getTotalLength());
// console.log("y = " + document.querySelector("#p7").getTotalLength());

// console.log("u = " + document.querySelector("#s1").getTotalLength());
// console.log("s = " + document.querySelector("#s2").getTotalLength());
// console.log("l = " + document.querySelector("#s3").getTotalLength());
// console.log("u = " + document.querySelector("#s4").getTotalLength());
// console.log("g = " + document.querySelector("#s5").getTotalLength());
// console.log("i = " + document.querySelector("#s6").getTotalLength());
