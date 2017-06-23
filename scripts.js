//Hiding keyboard but not showing when shift btn clicked
$(document).ready(function(){
    $(document).keydown(function(e){
        if(e.keyCode == 15){
            $('keyboard-upper-container').hide();
            $('keyboard-lower-container').show(); 
        }
    })
    $(document).keyup(function(e){
        if (e.keyCode == 14){
            $('keyboard-upper-container').hide();
            $('keyboard-lower-container').show(); 
        }
     })
 });
