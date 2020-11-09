function checkemail() {
    var str = document.getElementById("email").value;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(str))
        return true
    else {


        return false
    }
}
const form = document.querySelector('boxs2');

function checkbae() {

    const user = document.getElementById("user");
    if (user.value.length < 5 || user.value.length > 15) {

        toastr.warning('نام کاربری کمتر از 5 کارکتر است')
        return
    }

    if (checkemail() == false) {
        toastr.warning('this is not Gmail')
        return
    }
    alert("done")
}


