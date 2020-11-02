let url = 'https://swapi.dev/api/people/';
let colors ={};
getdata(url);
async function getdata(url){
      let swapi=await fetch(url)
      let data = await swapi.json();
      let urlnext='';
      urlnext=data.next;
      data.results.forEach(function(character){
        if(character.eye_color in colors){
          colors[character.eye_color] = colors[character.eye_color] + 1;
      }
        else{
         colors[character.eye_color] = 1;
        }  
  });
    url = urlnext;
      if(!url){
        doughnutChart();
      }
	  else{
		  getdata(url);
	  }  
  }

  function doughnutChart(){
    let colors_array = Object.keys(colors);
    let noofcolors = Object.values(colors);	
    let ctx = document.getElementById("myChart")
    let Doughnut  = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
            data: noofcolors,
            backgroundColor: colors_array,
        }],
        labels: colors_array,
      }, 
      options: {
        legend:{
          position: 'bottom',
        }
      } 
    });
  }














/* let url = 'https://swapi.dev/api/people/';
let colors ={};
getdata(url);
function getdata(url){     
  fetch(url)
  .then(data => {
      return data.json();
  })
  .then(data =>{
      let next = '';
      next = data.next;      
      data.results.forEach((character) => {
      if(character.eye_color in colors){
          colors[character.eye_color] = colors[character.eye_color] + 1;
      }
        else{
         colors[character.eye_color] = 1;
        }  
      });
      url = next;
      if(!url){
        doughnutChart();
      }
	  else{
		  getdata(url);
	  }  
  })
}


function doughnutChart(){
	let colors_array = Object.keys(colors);
	let noofcolors = Object.values(colors);	
  let ctx = document.getElementById("myChart")
  let Doughnut  = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: noofcolors,
          backgroundColor: colors_array,
      }],
      labels: colors_array,
    }, 
    options: {
      legend:{
        position: 'bottom',
      }
    } 
  });
}

*/

// Colors used :

// backgroundColor: [
//   'rgba(54, 162, 235, 0.8)',
//   'rgba(255, 206, 86, 0.8)',
//   'rgba(255, 99, 132, 0.8)',
//   'rgba(75, 192, 192, 0.8)',
//   'rgba(153, 102, 255, 0.8)',
//   'rgba(255, 159, 64, 0.8)',
//   'rgba(199, 199, 199, 0.8)',
// ]
// borderColor: [
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(255, 99, 132, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
//   'rgba(255, 159, 64, 1)',
//   'rgba(159, 159, 159, 1)',
// ]
