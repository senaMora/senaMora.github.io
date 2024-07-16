function add() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let result = parseFloat(n1) + parseFloat(n2);
  document.getElementById("result").innerHTML = "result is: " + result;
}
