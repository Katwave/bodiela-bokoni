// Services

const preview = document.getElementsByClassName("preview");
const previewContainer = document.getElementsByClassName("previewContainer");
const previewImage = document.getElementById("previewImage");
const closePreview = document.getElementById("close");

const images = [
  "../img/1.jpg",
  "../img/2.jpg",
  "../img/3.jpg",
  "../img/4.jpg",
  "../img/5.jpg",
  "../img/6.jpg",
  "../img/7.jpg",
  "../img/8.jpg",
  "../img/9.jpg",
  "../img/10.jpg",
  "../img/11.jpg",
  "../img/12.jpg",
  "../img/13.jpg",
  "../img/14.jpg",
  "../img/15.jpg",
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
    nav.style = "background:  #ddd; box-shadow: 6px 6px 36px rgba(0,0,0,.3);";
    for (let i = 0; i < links.length; i++) {
      links[i].style = "color:  #222;";
    }
  } else {
    nav.style = "background: transparent";
    for (let i = 0; i < links.length; i++) {
      links[i].style = "color:  #fff;";
    }
  }
  console.log(this.scrollY);
});
