//Sample Javascript library

var KJS = (function() {

  var api = {};
  
  api.plusOne = function(num) {
     return num + 1; 
  };  
  
  api.id = function(id) {
    return document.getElementById(id);
  };
  
  // makeTag("H1") to make an element with tag
  api.makeTag = function(tag) {
  	return document.createElement(tag);
  };
  
  api.makeText = function(text) {
  	return document.createTextNode(text);
  };

  api.clone = function(node, id) {
    var elem = node.cloneNode(true);
    if ((id !== "") && (id !== null)) {
      elem.setAttribute("id", id);
    } else {
      elem.removeAttribute("id");
    }
    return elem;
  };

  api.template = function(node, id) {
    var elem = api.clone(node, id);
    node.parentNode.removeChild(node);
    return elem;
  };  

  api.swap (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  api.shuffle (arr) {
     var N = arr.length;

     for (var i = 0; i < N; i++) {
       var j = Math.floor(Math.random() * N);
       console.log(j);
       api.swap(arr, i, j); 
       console.log(arr);
     }
     return arr;  
  }

  return api;

})();
