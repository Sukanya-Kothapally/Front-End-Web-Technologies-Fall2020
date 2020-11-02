// Enter your code here
 function converttext(){
    event.preventDefault()
    var input=document.getElementById("userinput").value;
    var newline = input.split(/[^\w\s]|_/g).join("<br />");
    var final = '<div class="rounded mx-auto mt-5 p-3">' + newline + "</div>";
    var output = document.getElementById("results");
    output.insertAdjacentHTML("afterend", final);  
}

