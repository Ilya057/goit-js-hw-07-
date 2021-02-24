const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener("input", (event) => {
  const input = event.target.value;
  outputRef.textContent = input;
  if (input === "") {
    outputRef.textContent = "незнакомец";
  }
});
