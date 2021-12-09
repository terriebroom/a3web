// Added by Aida on December 8th, 2021
function myFunction() {
    var x = document.getElementById("myTopnav");
  
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive");
    } else {
    
        x.classList.remove("responsive");
    }
  }
