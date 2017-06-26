// //Function for shift key
// $(document).ready(function () {
//     $('#keyboard-upper-container').hide();
//     $(function () {
//         $(document).on('keydown', function(e){
//             if (e.which === 16) {
//                 $('#keyboard-upper-container').show();
//                 $('#keyboard-lower-container').hide(); 
//             }
//     });
//     $(document).on('keyup', function(e) {
//         if (e.which === 16) {
//         $('#keyboard-upper-container').show();
//         $('#keyboard-lower-container').hide(); 
//             console.log('shift')
//         }
// });

// //Sentences
(function($) {
    $.fn.writeText = function(content) {
        var sentences = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < sentences.length) {
                elem.text(elem.text() + sentences[current++]);
            }
        }, 100);
    };
});
//var fruits = [ "apple", "orange", "mango" ];
//fruits[0] is the first element
// fruits[1] is the second element
// fruits[2] is the third element
var sents = ["ten ate neite ate nee enet ite ate inet ent eate", 
"Too ato too nOt enot one totA not anot tOO aNot", 
"oat itain oat tain nate eate tea anne inant nean", 
"itant eate anot eat nato inate eat anot tain eat" , 
"nee ene ate ite tent tiet ent ine ene ete ene ate"];
console.log(sents[0]);
console.log(sents);

$("#sentence").append( sents[0]);
// // //Highlight keys in-class example
// // $(document).on('keydown, function(e) {
// //     handleHighlight(e.which);
// //     console.log(e.which)
// // document.on ('keydown", function(key) {
// //     handleHighlight(key.which, true);
// // });
// // function handleHighlight(code, kill) {
// //     if (!kill) {
// //         $('#' + code).css('background-color', 'white');
// //     } else (!kill) {
// //         $('#' + code).css('background-color', '#lightcoral');
// //     }
// // }    
// //Trying to get keyboard highlights
// // function handleHighlight(code, defaultColor){
// //         if (defaultColor){
// //             $('#' + code).css('background-color', '#f5f5f5');
// //         } else {
// //             $('#' + code).css('background-color', '#thistle');
// //         }//

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
        // if (e.which >= 65 || e.which <= 90 || e.which === 32 && e.which == e.shiftKey) {
        //         console.log(e.charCode + 65);
        // } 
        if(e.which === 48 || e.which >= 48 || e.which <= 57) {
            addHighlight(e.which);
        }
    //     if (e.shiftKey && e.which === 49){
    //         addHighlight(e.preventDefualt);
    // }
        if(e.which >= 65 || e.which <= 90){
             addHighlight(e.which + 32);
        }
        // if (e.whcih >= 51 || e.whcih >= 53 && e.shiftKey){
        //     addHighlight(e.which - 18);
        // if(e.shiftKey == false){
        //     addHighlight(e.charCode);
        if (e.which === 49 && e.shiftKey){
            addHighlight(e.which -16);
        }
        // }
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
        //  if(e.which >= 65 || e.which <= 90){
        //      removeHighlight(e.which + 32);
        // } 
        if (e.which === 49 && e.shiftKey){
            removeHighlight(e.which -16);
        }
    }); 
     $(document).on('keypress', function(e) {
        if(e.which){
            appendLetter(e.which);
        }
     }); 
    $('#sentence').append(str1);  

});
function addHighlight(code){
        // if (defaultColor){
        //     $('#' + code).css('background-color', '#f5f5f5');
        // } else {
            $('#' + code).css('background-color', 'yellow');
        // }
}
function removeHighlight(code, defaultColor){
        // if (defaultColor){
        //     $('#' + code).css('background-color', '#f5f5f5');
        // } else {
            $('#' + code).css('background-color', '#f5f5f5');
        // }
}

function appendLetter (code){
    if(code == 116){
        $('#target-letter').append(String.fromCharCode(code));
    } 
}