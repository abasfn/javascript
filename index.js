function remove(index) {
  var item = document.getElementById("boxs" + index);
  item.remove();
}

{
  /* <li id="boxs0" class="boxs1">
  <div class="content">
    <p>1انگشتر طلای زنانه</p>
    <p>14500</p>
    <button class="remove" onclick="remove(0)">
      remove
    </button>
  </div>
</li>; */
}

function createItem() {
  // debugger;

  // root
  var root = document.getElementById("row1");

  // create main nore
  var node = document.createElement("li");
  node.classList.add("boxs1");

  var div_node = document.createElement("div");
  div_node.classList.add("content");

  var nav_node = document.createElement("nav");
  div_node.appendChild(nav_node);

  var p_node = document.createElement("p");
  p_node.innerText = "test - " + Math.floor(Math.random() * 100);
  div_node.appendChild(p_node);

  var price_node = document.createElement("p");
  price_node.innerText = "123.3";
  div_node.appendChild(price_node);

  var button_node = document.createElement("button");
  button_node.classList.add("remove");
  button_node.innerText = "remove";
  button_node.addEventListener("click", function () {
    // alert("click button");
    node.remove();
  });
  div_node.appendChild(button_node);

  node.appendChild(div_node);

  root.appendChild(node);
}
