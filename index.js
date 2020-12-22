function myfunk() {
    document.body.style.background="#333";
}
function myfunk3() {
    var para=document.createElement("input");
    var element=document.getElementById("div1");
    element.appendChild(para);
    document.body.style.background="#333";
    document.getElementById("div1").classList.add("mystyle");

}