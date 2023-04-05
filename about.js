
$(document).ready(function(){
    $("button").click(function(){
      var div = $("div");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '200px'}, "slow");
    });
  });
  

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


