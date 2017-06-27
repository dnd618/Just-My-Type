// // --Doesn't work//
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
var sentence = ["ten ate neite ate nee enet ite ate inet ent eate", 
"Too ato too nOt enot one totA not anot tOO aNot", 
"oat itain oat tain nate eate tea anne inant nean", 
"itant eate anot eat nato inate eat anot tain eat" , 
"nee ene ate ite tent tiet ent ine ene ete ene ate"];

//Trying to call lines of sentences
var letters = 0;
var sentenceCounter = 0;
var currentSentence = sentence[sentenceCounter];
// var currentLetterCode = currentSentence.charCodeAt(letterCounter);
function handleSentence() {
    var sentenceDIV = $('#sentence');
    sentenceDIV.empty();
    sentenceDIV.append(sentence[sentenceCounter]);
    sentenceCounter++;
}
$( document.body).on('keyup',function(handleSentence) {
    $( document.body ).append( $( "#sentence" ) );
    var s = $( "sentence" ).length;
    $( "sentence" ).text();
  })
//Switching keyboards between upper&lowercase

$( document ).ready(function() {
    $('#keyboard-upper-container').hide();
    handleSentence();

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
            $('#target-letter').append(String.fromCharCode(e.which));  
            //Purple box animation
            $("#purple-block").animate({ "left" : "1000px" }, 3500);    
            }
        }); 
    });
function addHighlight(code){
            $('#' + code).css('background-color', 'thistle');
}
function removeHighlight(code, defaultColor){
            $('#' + code).css('background-color', '#f5f5f5');
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
var seconds = 0;
var minutes = 0;
//Track words typed
var timeStart;
var errorCount = 0;
