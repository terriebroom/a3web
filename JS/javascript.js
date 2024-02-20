
function myFunction() {
    // var is the variable storing the data.
    // = (equals too). 
    // getElementById is returning the element in the id property to match the specific string (myTopnav). 
    var x = document.getElementById("myTopnav");
    // classList = return the class name to the relative element. 
    // classList(contains) will return if that parameter/token is true. 
    if (!x.classList.contains("responsive")) {
        // classList(add) will add the specific parameter/token. 
        x.classList.add("responsive");
    } else {
        // classList(remove) will remove the specific parameter/token if false.
        x.classList.remove("responsive");
    }
  }
