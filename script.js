/* document.getElementById("submit_now").onclick = function() {
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var msg = document.getElementById("msg");
    window.alert(name.value + " , " + email.value + " , " + msg.value);
} */


$(function() {
    $('.toggleNav').on('click',function() {
        $('.flex-nav ul').toggleClass('open');
    });
});

function formSub() {
    const name = document.getElementById("name");
    const email = document.getElementById("mail");
    const msg = document.getElementById("msg");
    alert(name.value + " , " + email.value + " , " + msg.value);
}

function formClear() {
    window.alert("Fill in the form again dumbass");
}


const submit = document.getElementById("submit_now");
const clear = document.getElementById("clear_now");

submit.addEventListener("click", formSub, false);



clear.addEventListener("click", formClear, false);


