let counterValue = 0;
const counterSpan = document.getElementById("value");
const btnDecrRef = document.querySelector('button[data-action ="decrement"]');
const btnIncRef = document.querySelector('button[data-action="increment"]');

function increment() {
  counterValue += 1;
  counterSpan.textContent = counterValue;
}

function decriment() {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
}

btnDecrRef.addEventListener("click", decriment);
btnIncRef.addEventListener("click", increment);
