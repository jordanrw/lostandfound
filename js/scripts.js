//refers to the webpage  [$ casts it to a jquery object]
$(document).ready(function () { 

//var just means variable  //search or find function
   var headers = $("buttonl");
    //cheating way
    //var divs = $("div");
    
    
   var siblingDivs = $(headers[0]).siblings("button");
    
    
    //Make it red.
   headers.addClass("red");
    
    headers.hover(function() {      // Make it blue on hover in...
        
        headers.addClass("red");
        headers.removeClass("blue");
        $(siblingDivs).addClass("red");

    }, function() {                 // Make it read on hover out...
        
        headers.addClass("blue");
        headers.removeClass("red");
    });
    
    
});