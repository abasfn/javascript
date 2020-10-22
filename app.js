function calulator(symbol) {
  var number1 = document.getElementById("box1").value;
  var number2 = document.getElementById("box2").value;

  var result = 0;
  if (symbol == "*") {
    result = number1 * number2;
  } else if (symbol == "+") {
    result = Number(number1) + Number(number2);
  } else if (symbol == "/") {
    result = Number(number1) / Number(number2);
  } else if (symbol == "-") {
    result = Number(number1) - Number(number2);
  }

  document.getElementById("box3").value = result;

//   return 1;
}

// function myfunk() {
//   document.getElementById("box3").value = calulator("*");
// }

// function myfunk2() {
//   document.getElementById("box3").value = calulator("+");
// }

// function myfunk3() {
//   document.getElementById("box3").value = calulator("/");
// }

// function myfunk4() {
//   document.getElementById("box3").value = calulator("-");
// }
