var testresults
function checkemail(){
    var str = document.validation.emailcheck.value
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(str))
        testresults = true
    else {
        toastr.warning('this is not Gmail')
        testresults = false
        return (testresults)
    }
    

    var x =document.getElementsByTagName("input");
    console.log(x[0].value)
    console.log(x[1].value)
    console.log(x[2].value)




}
function checkbae(){
    if (document.layers || document.getElementById || document.all)
        return checkemail()
    else
        return true
}


