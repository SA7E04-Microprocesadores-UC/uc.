var burguer = document.querySelector("#nav-icon2");
var coll = document.querySelector(".content-device");

var concept = document.querySelectorAll(".afterICon");
var conceptShow = document.querySelectorAll(".afterICon + ul");
var fix = document.querySelector(".device2 .subContent a:nth-child(4)")

var fix2 = document.querySelectorAll(".top-content ul > div:nth-last-child(2) a")
var fix3 = document.querySelectorAll(".device3 a")

fix2[1].href = fix3[0].href = "https://drive.google.com/drive/folders/1hXnww2CZ3BFUEOMJYWd8YNa8wemPPLjK?usp=sharing"
fix2[2].href = fix3[1].href ="https://drive.google.com/drive/folders/1tddLM9v0-74Afx7p1AKR-oG34iosshK8?usp=sharing"

fix.href = "IDE-Arduino.html";
/****************************************************************** */
var mega = document.querySelector(
  ".dropdow .dropdow-content .dropdow-content2 ul a:nth-child(2)"
);
var megaDevice = document.querySelectorAll(".before");
var newUl = document.querySelector(
  ".dropdow .dropdow-content .dropdow-content2 ul"
);
var newUlDevice = document.querySelectorAll(".subContent");
const newA = document.createElement("a");
const newADevice = document.createElement("a");

const newA2 = document.createElement("a");
const newADevice2 = document.createElement("a");

newA2.href = newADevice2.href = "manejo-de-tablas.html";
newA2.innerHTML = newADevice2.innerHTML = "Manejo de tablas";
  

newA.href = newADevice.href = "Instrucciones-y-modos-de-direccionamiento.html";
newA.innerHTML = newADevice.innerHTML =
  "Instrucciones y modos de direccionamiento";

mega.href = megaDevice[1].href = "Microcontroladores-AVR.html";
mega.innerHTML = megaDevice[1].innerHTML = "Microcontroladores AVR";

newUl.appendChild(newA);
newUl.appendChild(newA2);
newUlDevice[1].appendChild(newADevice);
newUlDevice[1].appendChild(newADevice2);

var ulDevice = document.querySelectorAll(".subContent > a");
for (i = 0; i < ulDevice.length; i++) ulDevice[i].classList.remove("before")
for (i = 0; i < ulDevice.length; i++) ulDevice[i].classList.add("before");


/******************************************************************* */
burguer.onclick = function () {
  open();
};
function open() {
  burguer.classList.toggle("open");
  coll.classList.toggle("open");
}

function actionToggle() {
  var myElement = document.querySelector(".action");
  myElement.classList.toggle("active");
}

function myFunction() {
  var hola = document.querySelector(".device");
  hola.classList.toggle("activated");
}

function myFunction2() {
  var hola = document.querySelector(".device2");
  hola.classList.toggle("activated");
}

function myFunction3() {
  var hola = document.querySelector(".device3");
  hola.classList.toggle("activated");
}
/******************************************************* */
var hasClass = document.querySelectorAll(".icon-arrow-down");
var index = [];

function myGeneralFunction(e) {
  var ai = e.target;
  ai.classList.toggle("activated");

  for (i = 0; i < conceptShow.length; i++) {
    index.push("ai" + i);

    if (
      hasClass[i].classList.contains(index[i]) ==
      ai.classList.contains("ai" + i)
    ) {
      conceptShow[i].classList.toggle("activated");
    }
  }
}

for (i = 0; i < concept.length; i++) {
  concept[i].onclick = myGeneralFunction;
}

/************************* copy to clipboard *************************/
function CopyToClipboard(containerid) {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Código copiado");
  }
}
/***********************************************************************/
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
  "mySlides7",
  "mySlides8",
  "mySlides9",
  "mySlides10",
  "mySlides11",
  "mySlides12",
  "mySlides13",
  "mySlides14",
  "mySlides15",
  "mySlides16",
  "mySlides17",
];
var dotId = [
  "dot1",
  "dot2",
  "dot3",
  "dot4",
  "dot5",
  "dot6",
  "dot7",
  "dot8",
  "dot9",
  "dot10",
  "dot11",
  "dot12",
  "dot13",
  "dot14",
  "dot15",
  "dot16",
  "dot17",
];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
/**showSlides(1, 16);
 */
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);

  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actived", "");
  }
  x[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " actived";
}

/**********************************************************************/
