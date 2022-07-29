const button = document.querySelector(".sidebar-toggle");
const side = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");

button.addEventListener("click", () => {
  console.log("helloworld");
  side.classList.toggle("show-sidebar");
});

close.addEventListener("click", () => {
  side.classList.toggle("show-sidebar");
});
