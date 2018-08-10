// Create a JQuery link for the button and the paragraph

// $(document).ready(function(){
//     $("button").click(function() {
//         $("p").effect(parameter);
//     });
// });


//Call the class .activate, and perform the following action on the p tag: toggle
//Other effects: toggle, fadeIn, fadeOut, etc.
//NOTE: Everything goes inside the $(document) {} area
$(document).ready(function(){
    
    // Animate the text of paragraph
    $(".activate").click(function() {
        $("p").toggle(100); //use "slow" or write the miliseconds
    });

    // Animate the box to open and close
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });

    // Animate the box (div)
    $(".animatebox").click(function(){
        var greenbox = $(".greenbox"); //creating a variable and assign it to the class
        greenbox.animate({height: '300px', opacity:'0.4'}, "slow"); //giving effects to the box
        greenbox.animate({width: '300px', opacity:'0.8'}, "slow"); //giving effects to the box
        greenbox.animate({height: '100px', width: '100px', opacity:'0.8'}, "slow"); //giving effects to the box
    })

});