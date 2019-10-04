document.getElementById("submit_now").onclick = function() {
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var msg = document.getElementById("msg");
    window.alert(name.value + " , " + email.value + " , " + msg.value);
}


