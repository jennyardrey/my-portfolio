/* document.getElementById("submit_now").onclick = function() {
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var msg = document.getElementById("msg");
    window.alert(name.value + " , " + email.value + " , " + msg.value);
} */

function formSub() {
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var msg = document.getElementById("msg");
    window.alert(name.value + " , " + email.value + " , " + msg.value);
}


var submit = document.getElementById("submit_now");

submit.addEventListener("click", formSub, false);

var clear = document.getElementById("clear_now");

function formClear() {
    window.alert("Fill in the form again dumbass");
}

clear.addEventListener("click", formClear, false);


