 //Text Animation & Highlight Function

//Part of in-class example 
// $(document).ready(function() {
//     var sentences 'ten ate neite ate nee enet ite ate inet ent eate',

//         'Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain',

//         'nate eate tea anne inant nean", "itant eate anot eat nato inate eat',

//         'anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate'.
// });
// $(document).on('keydown, function  (key) {
//     handleHighlight(key.which)
//     });
// document.on ('keydown", function(key) {
//     handleHighlight(key.which, true);
// });
// function handleHighlight('code' defaultColor) {
//     if (defaultColor) {
//         $('#'+code).css(background-color, 'white');
//     } else {
//         $('#'=code).css('background-color, 'pink');
//     }
// }
// function initialize() {
//     sentenceContainer = $('sentences');
//     sentenceContainer.append(sentences[sentenceIndex]);
// }
//     });
// });
//IN CLASS EXAMPLE FOR SENTENCES; Basically you need to keep a variable counter for any keys you wanna count
sentenceCounter = 0;
var currentLetterCode = currentSentence.charCodeAt(letterCounter);
function handleSentences() {
$('#sentence').empty();
$('#sentence').append(sentences[sentenceCounter]);
    sentenceCounter++;
}
letterCounter = 0;
currentSentence = sentence[sentenceCounter];
function handleResponse(e) {
    console.log(e);
    if (e.type === 'keyup') {
    currentSentence = sentence[sentenceCounter];
    }
}
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

