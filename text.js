function myfunk() {
  var x = document.getElementById("box1").value;

  var node = document.createElement("div");
  var button = document.createElement("button");
  button.textContent = "remove";
  button.classList.add("remove");

  button.addEventListener("click", function() {
    node.remove();
  })

  var textnode = document.createTextNode(x);
  node.appendChild(textnode);
  node.appendChild(button);
  document.getElementById("boxs2").appendChild(node);
}



function myfunk2(amalgar) {
  var list = document.getElementById("boxs2");
  //if(amalgar <= 6 && amalgar >= 0) {
      list.removeChild(list.childNodes[amalgar-1]);
  //}

//   if (amalgar == "1") {
//     list.removeChild(list.childNodes[0]);
//   } else if (amalgar == "2") {
//     list.removeChild(list.childNodes[1]);
//   } else if (amalgar == "3") {
//     list.removeChild(list.childNodes[2]);
//   } else if (amalgar == "4") {
//     list.removeChild(list.childNodes[3]);
//   } else if (amalgar == "5") {
//     list.removeChild(list.childNodes[4]);
//   } else if (amalgar == "6") {
//     list.removeChild(list.childNodes[5]);
//   } else if (amalgar == "7") {
//     list.removeChild(list.childNodes[6]);
//   }
}
