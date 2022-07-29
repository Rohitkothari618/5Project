let count = 0;

const buttons = document.querySelectorAll(".btn");
const text = document.getElementById("value");
console.log(buttons, text);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let data = e.currentTarget.classList;
    if (data.contains("decrease")) {
      count--;
    } else if (data.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    text.textContent = count;
    if (count > 0) {
      text.style.color = "green";
    } else if ((count == 0)) {
      text.style.color = "black";
    } else if (count < 0) {
      text.style.color = "red";
    }
  });
});
