var form = document.querySelector("form");

form.addEventListener("submit", function(){
  
 var input = document.querySelectorAll("input");

var username = input[0].value
    
var password = input[1].value

if (password !== "12345678"){
  
  alert("YOU SUCK!") 
}
  
  for (let i = 0; i < username.length; i++){  
    var char = username[i]
    
    if(char === " "){
      alert("No spaces allowed in Username!")
      break
    }
      
    
    if(!(isNaN(char))) {
   
      break
    }
    if (i === username.length - 1) {
      
      alert("Username needs a number!")
    }
    
  }
});
                      
