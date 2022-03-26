var card = document.querySelector(".collapse");
var r = document.querySelector(".ref");

r.addEventListener("click", () => {
  card.classList.toggle("vis");
});
