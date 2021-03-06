var code = document.querySelectorAll(".code_panel");
var def = document.querySelectorAll(".define_include");
var originalAVR = document.querySelectorAll(".originalAVR");
var comment = document.querySelectorAll(".code_comment");
var variables = document.querySelectorAll(".variables");
var functions = document.querySelectorAll(".functionsDeclarations");
var button = document.querySelectorAll("#button1");
const inconAdjust = document.querySelectorAll(".fa-adjust");
var lcd = document.querySelectorAll(".include_lcd");
var tableColor = document.querySelectorAll(".setTableColor");
var td = document.querySelectorAll("td");
var th = document.querySelectorAll("th");
var menuDevice = document.querySelector(".content-device ul");
var b = document.querySelectorAll(".content-device ul li:not(:last-child)");
var a = document.querySelector(".action ul");
var c = document.querySelectorAll(".action ul li a");
var d = document.querySelectorAll(".action ul li:not(:last-child)");
var f = document.querySelectorAll(".top-content .dropdow-content");
var g = document.querySelectorAll(".top-content .dropdow-content a");

var h = document.querySelectorAll(
  ".content-device ul .dropdow-content a:not(:last-child)"
);
var m = document.querySelectorAll(".content-device ul .dropdow-content > a");
var l = document.querySelectorAll(".subContent");
var menuDevicedrop = document.querySelectorAll(
  ".content-device .dropdow-content a"
);



/******funcion para desplegar sub menu en dispositivos moviles***/
var index = [];

function myGeneralFunction(e) {
  var hasClass = document.querySelectorAll(".tema");
  console.log(hasClass[0])
  var tema = e.target;
  tema.classList.toggle("subContent");

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

/****************************************************** */

var currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  dark();
} else if (currentTheme == "light") {
  originalAVRFunction();
}

for (i = 0; i < inconAdjust.length; i++) {
  inconAdjust[i].addEventListener("click", function () {
    if (currentTheme == "dark") currentTheme = "light";
    else currentTheme = "dark";

    let theme = currentTheme;
    localStorage.setItem("theme", theme); // Almacena el tema ajustado por el usuario

    if (currentTheme == "dark") {
      dark();
    } else if (currentTheme == "light") {
      originalAVRFunction();
    }
  });
}

function originalAVRFunction() {
  for (i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = "#f8faff";
    code[i].style.borderLeft = "8px solid gray";
  }

  for (i = 0; i < def.length; i++) def[i].style.color = "blue";
  for (i = 0; i < originalAVR.length; i++) originalAVR[i].style.color = "black";
  for (i = 0; i < comment.length; i++) comment[i].style.color = "rgb(0 128 0)";
  for (i = 0; i < variables.length; i++) variables[i].style.color = "#a000a0";
  for (i = 0; i < functions.length; i++) functions[i].style.color = "#b00234";
  for (i = 0; i < button.length; i++) button[i].style.color = "black";
  for (i = 0; i < lcd.length; i++) lcd[i].style.color = "#800000";
  for (i = 0; i < tableColor.length; i++)
    tableColor[i].style.backgroundColor = "#f8faff";
  for (i = 0; i < tableColor.length; i++) tableColor[i].style.color = "black";
  for (i = 0; i < td.length; i++)
    td[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
  for (i = 0; i < th.length; i++)
    th[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
  menuDevice.style.backgroundColor = "#fff";
  menuDevice.style.color = "black";
  for (i = 0; i < menuDevicedrop.length; i++)
    menuDevicedrop[i].style.color = "black";
  for (i = 0; i < b.length; i++)
    b[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
  a.style.backgroundColor = "#fff";
  for (i = 0; i < c.length; i++) c[i].style.color = "black";
  for (i = 0; i < d.length; i++)
    d[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
  //for (i = 0; i < f.length; i++) f[i].style.backgroundColor = "#f1f1f1";
  //for (i = 0; i < g.length; i++) g[i].style.color = "black";
  for (i = 0; i < h.length; i++)
    h[i].style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
}

function dark() {
  for (i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = "#282c34";
    code[i].style.borderLeft = "unset";
  }

  for (i = 0; i < def.length; i++) def[i].style.color = "rgb(255 155 255)";
  for (i = 0; i < originalAVR.length; i++) originalAVR[i].style.color = "white";
  for (i = 0; i < comment.length; i++)
    comment[i].style.color = "rgb(69 255 69 / 61%)";
  for (i = 0; i < variables.length; i++) variables[i].style.color = "#f2daff";
  for (i = 0; i < functions.length; i++) functions[i].style.color = "#ffa5a5";
  for (i = 0; i < button.length; i++) button[i].style.color = "white";
  for (i = 0; i < lcd.length; i++) lcd[i].style.color = "rgb(252, 146, 158)";
  for (i = 0; i < tableColor.length; i++)
    tableColor[i].style.backgroundColor = "#232B32";
  for (i = 0; i < tableColor.length; i++) tableColor[i].style.color = "white";
  for (i = 0; i < td.length; i++)
    td[i].style.borderBottom = "1px solid rgb(255 255 255 / 10%)";
  for (i = 0; i < th.length; i++)
    th[i].style.borderBottom = "1px solid rgb(255 255 255 / 10%)";
  menuDevice.style.backgroundColor = "#292929";
  menuDevice.style.color = "white";
  for (i = 0; i < menuDevicedrop.length; i++)
    menuDevicedrop[i].style.color = "white";
  for (i = 0; i < b.length; i++)
    b[i].style.borderBottom = "1px solid rgb(255 255 255 / 10%)";
  a.style.backgroundColor = "#292929";
  for (i = 0; i < c.length; i++) c[i].style.color = "white";
  for (i = 0; i < d.length; i++)
    d[i].style.borderBottom = "1px solid rgb(255 255 255 / 10%)";
  //for (i = 0; i < f.length; i++) f[i].style.backgroundColor = "#292929";
  //for (i = 0; i < g.length; i++) g[i].style.color = "white";
  for (i = 0; i < h.length; i++)
    h[i].style.borderBottom = "1px solid rgb(255 255 255 / 10%)";
}

/*var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("act");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
*/
