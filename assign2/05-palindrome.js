// Enter your code here
//omchange inside this
function enter(value){
    if(event.key === 'Enter');
        event.preventDefault();
        Palindrome(value.number);
}

function Palindrome(number){
var number= document.getElementById('number').value;
var actual,reminder,finalnum=0;
actual=number;
while(number>0){
    reminder=number%10;
    number =parseInt(number/10);
    finalnum =finalnum*10+reminder;
}
var message;
if(finalnum==actual)
		{
            document.getElementById('result').style.display="block" ;
            message = 'Yes. This is a Palindrome!';	
            message = message.fontcolor("green");
            
		}
		else
		{
            document.getElementById('result').style.display="block" ;
            message = 'No. Try again.';
            message = message.fontcolor("red");
            
        }
document.getElementById('result').innerHTML = message;
    }