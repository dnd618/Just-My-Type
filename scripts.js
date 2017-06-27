// //Sentences--Doesn't work//
// (function($) {
//     $.fn.writeText = function(content) {
//         var sentences = content.split(""),
//             current = 0,
//             elem = this;
//         setInterval(function() {
//             if(current < sentences.length) {
//                 elem.text(elem.text() + sentences[current++]);
//             }
//         }, 100);
//     };
// });
//Adding sentence counter
var sents = ["ten ate neite ate nee enet ite ate inet ent eate", 
"Too ato too nOt enot one totA not anot tOO aNot", 
"oat itain oat tain nate eate tea anne inant nean", 
"itant eate anot eat nato inate eat anot tain eat" , 
"nee ene ate ite tent tiet ent ine ene ete ene ate"];

$("#sentence").append( sents[0]);
	  
//Switching keyboards between upper&lowercase
$('#keyboard-upper-container').hide();
$( document ).ready(function() {
    $(document).on('keydown',function(e){
        if (e.which === 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    }); 
    $(document).on('keyup',function(e){
        if (e.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
        }
    });
    $(document).on('keydown', function(e) {
        if(e.which === 48 || e.which >= 48 || e.which <= 57) {
            addHighlight(e.which);
        }
        if(e.which >= 65 || e.which <= 90){
             addHighlight(e.which + 32);
        }
        if (e.which === 49 && e.shiftKey){
            addHighlight(e.which -16);
        }
     });    
    $(document).on('keyup', function(e) {
        if (e.which >= 65 || e.which <= 90 || e.which >= 123 || e.which <= 126 && e.shiftKey) {
            removeHighlight(e.which);
        }
        if(e.which === 48 || e.which >= 48 || e.which <= 57) {
            removeHighlight(e.which);
        }
        if(e.which >= 65 && e.which <= 90){
             removeHighlight(e.which + 32);
        }
        if (e.which === 49 && e.shiftKey){
            removeHighlight(e.which -16);
        }
    }); 
     $(document).on('keypress', function(e) {
        if(e.which){
            $('#target-letter').append(e.which);  
            // appendLetter(e.which);
        }
     }); 
});
function getKey(event) {
    event = event || window.event;
    var keyCode = event.which || event.keyCode;
    var typedChar = String.fromCharCode(keycode);
}
function addHighlight(code){
            $('#' + code).css('background-color', 'thistle');
}
function removeHighlight(code, defaultColor){
            $('#' + code).css('background-color', '#f5f5f5');
}
// function appendLetter (code){
//     if(code == 116){
//         $('#target-letter').append(String.fromCharCode(code));
//     } 
// }
//Simple function to hide/show keyboard 
$(document).ready(function(){
    var upper = $('#keyboard-upper-container'),
        lower = $('#keyboard-lower-container');

    upper.hide();
    $(document).on('keyup keydown', function(e) {
        if (e.shiftKey) {
            lower.hide();
            upper.show();
        } else {
            upper.hide();
            lower.show();
        }
        if (e.type === 'keydown') {
            handleHighlight(e, 'thistle');
        } else {
            handleHighlight(e, '#f5f5f5');
        }
    });
});
//Creating reusable function for highlight
function handleHighlight(e, color) {
    var code = e.keyCode;
    if (!e.isShift && utils.isAlpha(code)) {
        code = e.keyCode +32;
    }
    if (utils.isAlphanumeric(code)) {
        $('#'+code).css('background-color', color);
    } else {
        $('span:contains(' +e.key+ ')').css('background-color', color);
    }
}
//Basic functions & variables
var utils = {
    isAlphanumeric: function(code) {
        if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57)) {
            return true;
        } else {
            return false;
        }
    },
    isNumber: function(code) {
        if (code >= 48 && code <= 57) {
            return true;
        } else {
            return false;
        }
    },
    isAlpha: function(code) {
        if (code >= 65 && code <= 90) {
            return true;
        } else {
            return false;
        }
    }
};
//Calculating WPM
var keyCount = 0;
var shiftMovesLeft = 0;
var shiftMovesRight = 0;
//Track purple cursor
var position =-1;
var seconds = 0;
var minutes = 0;
//Track words typed
var timeStart;
var errorCount = 0;
//How many errors per minute
