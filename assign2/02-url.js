function urlsubmit(event){
    event.preventDefault()
    var link= document.getElementById('comments').value;
    if (!link.includes('?'))
    {
        var result = '<div class="bg-light border rounded w-50 mx-auto mt-5 p-3"><h2 class = "mt-2 mb-4">Results</h2><h5 class = "mt-4">URL</h5>' + '<h7 class = "mt-2">' + link
    }  
    else{
        var parameters = "";
        var url = link.slice(0, link.indexOf("?"));
        var tabs = link.slice(link.indexOf("?") + 1, link.length).split("&");
        for (var i = 0; i < tabs.length; i++) {
            parameters =parameters + "<div class = 'mt-5'>" + tabs[i].replace("=", ": ") + "</div>";
        }
        var result = '<div class="bg-light border rounded w-50 mx-auto mt-5 p-3"><h2 class = "mt-2 mb-4">Results</h2><h4 class = "mt-4">URL</h4>' + '<h7 class = "mt-2">' + url +'</h7><h5 class = "mt-4">Query Parameters:</h5>' + parameters + "</div>";
        }
    var output = document.getElementById("output");
    output.insertAdjacentHTML("afterend", result);    
}


// Input #1:
// http://www.example.com

// Output
// http://www.example.com

// Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

// Input #1:
// http://www.example.com

// Output
// http://www.example.com

// Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
