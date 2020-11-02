var number= document.getElementById("interval");
var given = setInterval(changecolor, number.value * 1000);

function changecolor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

function background() {
  var buttonvalue = document.getElementsByClassName("btn")[0];
  if (buttonvalue.value == "Start") {
    buttonvalue.classList.remove("btn-primary");
    buttonvalue.classList.add("btn-danger");
    buttonvalue.setAttribute("value", "Stop");
    given = setInterval(changecolor, number.value * 1000);    
  } 
  else {
    buttonvalue.classList.remove("btn-danger");
    buttonvalue.classList.add("btn-primary");
    buttonvalue.setAttribute("value", "Start");
    number.disabled = false;
    clearInterval(given);
  }
}

