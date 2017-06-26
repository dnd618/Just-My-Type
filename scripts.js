//Function for shift key
$(document).ready(function (){
    $('#keyboard-upper-container').hide(function () {
        $(document).keydown(function (e) {
        if(e.keyCode == 16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show(); 
        }
    });
});
$(document).keyup(function(e)
    {
        if (e.keyCode == 16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show(); 
            console.log('shift')
        }
     });
});
//Sentences
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain',
 'nate eate tea anne inant nean', 'itant eate anot eat nato inate eat',
 'anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
//  (function($) {
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

// //Highlight keys in-class example
// $(document).on('keydown, function(e) {
//     handleHighlight(e.which);
//     console.log(e.which)
// document.on ('keydown", function(key) {
//     handleHighlight(key.which, true);
// });
// function handleHighlight(code, kill) {
//     if (!kill) {
//         $('#' + code).css('background-color', 'white');
//     } else (!kill) {
//         $('#' + code).css('background-color', '#lightcoral');
//     }
// }    
//Trying to get keyboard highlights
function handleHighlight(code, defaultColor){
        if (defaultColor){
            $('#' + code).css('background-color', '#f5f5f5');
        } else {
            $('#' + code).css('background-color', '#thistle');
        }
}
//Look for function to append strings; highlight keys; keystrokes true or false; 
//break & start new loop when game ends; have shift key work properly for uppercase