// // Enter your code here
let url = 'https://swapi.dev/api/people/';
characters();
async function characters(){
while(url){
    let swapi=await fetch(url)
    let data = await swapi.json();
    let output="";
    data.results.forEach(function(character){
        output+=  `<li>${character.name} - ${character.birth_year}</li>`; 
});
var results =document.getElementById('results');
url=data.next;
results.innerHTML +=output;
}
}

