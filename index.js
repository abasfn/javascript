function mfunk() { 


var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<=1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
    toastr.warning('this is not Gmail')
  return false;
  }



    var x =document.getElementsByTagName("input");
    console.log(x[0].value)
    console.log(x[1].value)
    console.log(x[2].value)
}


