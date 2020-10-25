function myfunk() {
    var x=document.getElementById("box1").value;
    document.getElementById("boxs2").value=x;


    var node=document.createElement("p");
    var textnode = document.createTextNode(x);
    node.appendChild(textnode);
    document.getElementById("boxs2").appendChild(node);
}