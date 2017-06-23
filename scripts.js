//Hiding keyboard but not showing when shift btn clicked
$(document).ready(function(){
    $(document).keydown(function(e){
        if(e.keyCode == 17){
            $('keyboard-upper-container').hide();
            $('keyboard-lower-container').show(); 
        }
    })
    $(document).keyup(function(e){
        if (e.keyCode == 16){
            $('keyboard-upper-container').hide();
            $('keyboard-lower-container').show(); 
        }
     })
 });
