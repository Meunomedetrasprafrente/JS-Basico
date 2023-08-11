// how to accept user input

//easy way with a window prompt
/* 
let username = window.prompt("What's your name?")
console.log(username) */

//hard way with a window prompt

document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username)
}