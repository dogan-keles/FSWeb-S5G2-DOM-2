import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector(".logo-heading").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("nav");
el.addEventListener("wheel", zoom);

window.onload = (event) => {
  alert("Sayfa Yüklendi!");
};
let imagesNode = document.querySelectorAll("img");
imagesNode.forEach((img) => {
  img.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)";
  });
  img.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1.1)";
  });
});

const navAnchorNodeList = document.querySelectorAll("nav a");

navAnchorNodeList.forEach((anchorEl) => {
  anchorEl.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.style.fontSize = "2rem";
  });
});
navAnchorNodeList.forEach((anchorEl) => {
  anchorEl.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.fontSize = "1.5rem";
  });
});

window.addEventListener("resize", (event) => {
  console.log("Pencere Yeniden Boyutlandırıldı!");
  console.log(event.target.innerWidth, "x", event.target.innerHeight, "y");
});

window.addEventListener("scroll", (event) => {
  console.log("Kaydırıldı!");
  console.log(window.scrollX, "x", window.scrollY, "y");
});

// "Select" eventi sadece input'larda çalışır!!!
// "dblclick" eventi iki kere "select" edince çalışır!!!
