var btn = document.querySelectorAll(".btn-three");
var btn2 = document.querySelectorAll(".box-3");
var lista = document.querySelectorAll(".lista");
var band = false;
var hideList = document.querySelector(".topConstent");

var m = document.querySelectorAll(".lista ul > a");
var l = document.querySelectorAll(".subContent");
/**************************************************** */

var index = [];

function myGeneralFunction(e) {
  var hasClass = document.querySelectorAll(".tema");
  var tema = e.target;
  //tema.classList.toggle("subContent");

  for (i = 0; i < l.length; i++) {
    index.push("tema" + i);

    if (
      hasClass[i].classList.contains(index[i]) ==
      tema.classList.contains("tema" + i)
    ) {
      l[i].classList.toggle("subContent");
    }
  }
}

for (i = 0; i < m.length; i++) {
  m[i].onclick = myGeneralFunction;
}



/*************************************************** */

btn[0].onclick = () => {
  if (band) {
    newFunction(1, 2);
    band = false;
  }
  btn2[0].classList.toggle("hidden");
  lista[0].classList.toggle("hidden");
  band = true;
};

btn[1].onclick = () => {
  if (band) {
    newFunction(0, 2);
    band = false;
  }
  btn2[1].classList.toggle("hidden");
  lista[1].classList.toggle("hidden");
  band = true;
};

btn[2].onclick = () => {
  if (band) {
    newFunction(0, 1);
    band = false;
  }
  btn2[2].classList.toggle("hidden");
  lista[2].classList.toggle("hidden");
  band = true;
};

function newFunction(a, b) {
  if (!lista[a].classList.contains("hidden")) {
    btn2[a].classList.toggle("hidden");
    lista[a].classList.toggle("hidden");
  }
  if (!lista[b].classList.contains("hidden")) {
    btn2[b].classList.toggle("hidden");
    lista[b].classList.toggle("hidden");
  }
}
/*
for (i = 0; i < btn.length; i++) {
  btn[i].onclick = myGeneralFunction;
}

function myGeneralFunction() {
  var bt = document.querySelectorAll(".box-3");
  var lista = document.querySelectorAll(".lista");

  bt[0].classList.toggle("hidden");
}
*/


