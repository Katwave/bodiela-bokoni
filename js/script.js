// Services

const preview = document.getElementsByClassName("preview");
const previewContainer = document.getElementsByClassName("previewContainer");
const previewImage = document.getElementById("previewImage");
const closePreview = document.getElementById("close");

const images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./img/11.jpg",
  "./img/12.jpg",
  "./img/13.jpg",
  "./img/14.jpg",
  "./img/15.jpg",
];

for (let i = 0; i < preview.length; i++) {
  preview[i].addEventListener("click", (e) => {
    e.preventDefault();
    previewImage.src = images[i];
    previewContainer[0].style = "display:flex";
  });
}
closePreview.addEventListener("click", (e) => {
  e.preventDefault();
  previewContainer[0].style = "display:none";
});

// Navigation

const nav = document.getElementsByTagName("nav")[0];
const links = document.getElementsByClassName("links");

window.addEventListener("scroll", (e) => {
  let scr = this.scrollY;
  if (scr >= 10) {
    nav.style =
      "background:   rgb(209, 195, 0); box-shadow: 8px 8px 40px rgba(0,0,0,0.5);";
    for (let i = 0; i < links.length; i++) {
      links[i].style = "color:  #fff;";
    }
  } else {
    nav.style = "background: transparent";
    for (let i = 0; i < links.length; i++) {
      links[i].style = "color:  #fff;";
    }
  }
  console.log(this.scrollY);
});

// Loader spinner

window.addEventListener("load", (e) => {
  document.getElementsByClassName("loader")[0].style = "display:none";
  cursor.style = "display:block";
});

// Cursor on mousemove

class followMouse {
  constructor(cursor, body) {
    this.cursor = cursor;
    this.body = body;
  }
  follow(e) {
    let x = e.clientX;
    let y = e.clientY;

    if (x <= this.body.clientWidth - 20) {
      this.cursor.style.left = `${x}px`;
      this.cursor.style.top = `${y}px`;
    } else {
      this.cursor.style.left = `${x - 20}px`;
      this.cursor.style.top = `${y - 20}px`;
    }
  }
}

const cursor = document.getElementsByClassName("cursor")[0];
const body = document.getElementsByTagName("body")[0];

const cursorFollowed = new followMouse(cursor, body);

document.addEventListener("mousemove", (e) => {
  cursorFollowed.follow(e);
});

// Navigetion menu for mobile devices

const hamburgerNav = document.getElementsByClassName("hamburgerNav")[0];
const openNav = document.getElementsByClassName("hamBTN-open")[0];
const closeNav = document.getElementById("closeNav");

openNav.addEventListener("click", () => {
  hamburgerNav.style = "display:flex";
  openNav.style = "display:none";
  closeNav.style = "display:block";
});
closeNav.addEventListener("click", () => {
  hamburgerNav.style = "display:none";
  openNav.style = "display:block";
  closeNav.style = "display:none";
});
