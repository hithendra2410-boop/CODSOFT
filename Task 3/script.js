const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let value = buttons[i].innerText;

    if (value === "C") {
      display.value = "";
    } 
    else if (value === "=") {
      display.value = eval(display.value);
    } 
    else {
      display.value += value;
    }
  });
}
