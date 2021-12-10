var x = document.getElementById("Login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");

function Register () {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function Login () {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}
var icon = document.getElementById("icon");

icon.onClick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "images/sun.png";
  } else{
    icon.src = "images/moon.png";
  }
}
