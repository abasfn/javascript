

function remove(index) {
    var id = ("boxs" + index)
    var item = document.getElementById(id);

    item.remove();
}


function add() {

    var rot = document.getElementById("row1");
    var node = document.createElement("li");
    node.classList.add("boxs1");

    var div = document.createElement("div");
    div.classList.add("content");

    var nav = document.createElement("nav");


    var p = document.createElement("p");

    p.innerText = "abas ";

    var button = document.createElement("button");
    p.classList.add("button");
    button.innerText = "remove";
    button.addEventListener("click", function () {

        node.remove();
    });
    div.appendChild(nav)
    div.appendChild(p);
    div.appendChild(button);
    node.appendChild(div);
    rot.appendChild(node);
}













