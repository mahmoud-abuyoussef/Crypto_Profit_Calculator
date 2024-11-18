const darkMode = document.getElementById("dark-mode"),
  body = document.getElementById("body");
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mood");
});

onkeyup = function calc() {
  const investment = document.getElementById("investment").value,
    initial = document.getElementById("initial").value,
    selling = document.getElementById("selling").value;
  const qty = investment / initial;
  const result = qty * selling;
  if (result < selling) {
    document.getElementById("net-profit").style.color = "red";
    document.getElementById("net-profit").innerHTML = "$ " + result;
  } else if (result > selling) {
    document.getElementById("net-profit").style.color = "green";
    document.getElementById("net-profit").innerHTML = "$ " + result;
  } else {
    document.getElementById("result-calc").innerHTML = "$ " + result;
  }
  document.getElementById("net-profit").innerHTML = "$ " + result;
  document.getElementById("profit-ratio").innerHTML = "$ " + (result - investment);
  document.getElementById("month-net-profit").innerHTML = "$ " + result * 30;
  document.getElementById("weekly-net-profit").innerHTML = "$ " + result * 7;
};
