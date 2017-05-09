// API EndPoint
var url =  "http://api.icndb.com/jokes/random";

// Get Ordered List Element
var ol = document.getElementById("jokes");

// Create Request
var request = new XMLHttpRequest();
request.open("GET", url, true);

request.onload = function(){
  // Handle Response
  if(request.status == 200) {
  	console.log(request)
  	console.log(typeof(request.response));
  	var jsonObject = JSON.parse(request.response);
  	console.log(jsonObject.value.joke);

  	var li = document.createElement("li");

  	li.innerHTML = jsonObject.value.joke;
  	ol.appendChild(li);
  }
}


// Send Request
request.send();