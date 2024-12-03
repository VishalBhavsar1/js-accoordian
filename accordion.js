function toggle(target) {
    // console.log('open');
    // console.log(target);

    // create a reference to all section using a class name.

    var divToHide = document.getElementsByClassName("accordion-section");
    // loop through each section
    for(var i=0; i < divToHide.length; i++) {
        // hide each section
        divToHide[i].style.display = "none";
    }
    // create a reference to an element with the same name as the target variable
    var content = document.getElementById(target);
  
    if(content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  }
  
