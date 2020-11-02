// Enter your code here
//console.log('Enter your code here');

function submitform(){
    event.preventDefault();
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var status= document.getElementById("status").value;
    if(document.getElementById('r1').checked){
        var section="Undergrad";
    }
    else{
        var section="grad";
    }
    var checkbox = document.forms[0];
    var i;
    var checkedvalues="";
    for(i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            checkedvalues = checkedvalues+ checkbox[i].value + ",";
            var final = checkedvalues.replace('on,', '');
            final=final.replace(/,\s*$/, "");
                }
    }
   
    var anything= document.getElementById("anything").value;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Class Registration: ' + status);
    console.log('Class Section: ' + section);
    console.log('Courses: ' + final);
    console.log('Comments: ' + anything);

};
