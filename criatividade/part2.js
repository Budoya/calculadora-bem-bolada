
//eventos
const resultInput = document.getElementById("result");
let inicio = document
  .getElementById("equal")
  .addEventListener("click", calculate);

let copiada = document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

let limpada = document
  .getElementById("clear")
  .addEventListener("click", function () {
    input.value = "";
    input.focus();
  });
  

//themedark/white
let theme = document
  .getElementById("themeSwitcher")
  .addEventListener("click", function () {
    console.log("Clicou no botão!");
    if (main.dataset.theme === "dark") {
      main.style.setProperty("--bg-color", "#f1f5f9");
      main.style.setProperty("--border-color", "#aaa");
      main.style.setProperty("--font-color", "#212529");
      main.style.setProperty("--primary-color", "#26834a");
      main.dataset.theme = "light";
    } else {
      main.style.setProperty("--bg-color", "#212529");
      main.style.setProperty("--border-color", "#666");
      main.style.setProperty("--font-color", "#f1f5f9");
      main.style.setProperty("--primary-color", "#4dff91");
      main.dataset.theme = "dark";
    }
  });

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

export { theme, inicio, limpada, copiada, calculate, resultInput };
