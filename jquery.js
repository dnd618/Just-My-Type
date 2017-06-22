//Hiding keyboard
$(document).ready(function(){
    $("keyboard-lower-container").click(function(){
        $("p").hide();
    });
    $("keyboard-upper-container").click(function(){
        $("p").show();
    });
});
