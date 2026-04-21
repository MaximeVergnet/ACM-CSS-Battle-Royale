let value = 0;
const bar = document.getElementById("bar");
const label = document.getElementById("label");

function updateBar() {
  bar.style.width = value + "%";
  label.textContent = value + "%";
}

document.getElementById("increase").onclick = () => {
  value = Math.min(100, value + 10);
  updateBar();
};

document.getElementById("decrease").onclick = () => {
  value = Math.max(0, value - 10);
  updateBar();
};
