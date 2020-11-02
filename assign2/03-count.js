document.addEventListener( 'DOMContentLoaded',function(){
    var search=document.getElementById("intro").innerHTML.toString();
    document.getElementById("find").onclick =function ()
    {highlight(search)};	
   },false);
   
   function highlight(search)
   {
    var letter=document.getElementById("input").value;
    if(letter)
    {
     var highlight=new RegExp("("+letter+")", "gi");
     var searchinput=search.replace(highlight, "<span class='highlightcolor'>"+letter+"</span>");
     document.getElementById("intro").innerHTML=searchinput;
    }
   } 


