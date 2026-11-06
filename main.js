let count = localStorage.getItem("count") || 0;

const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");

counter.textContent = count;

plusBtn.onclick = function () {
  count++;
  counter.textContent = count;
  localStorage.setItem("count", count);
};

resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
  localStorage.removeItem("count");
};
