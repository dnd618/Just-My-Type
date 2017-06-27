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
var sentenceCounter = 0;
sentenceCounter = 0;
var currentLetterCode = currentSentence.charCodeAt(letterCounter);
function handleSentences() {
    var sentenceDIV = $('#sentence').empty();
    $('#sentence').append(sentences[sentenceCounter]);
        sentenceCounter++;
    }
// letterCounter = 0;
// currentSentence = sentence[sentenceCounter];
// function handleResponse(e) {
//     console.log(e);
//     if (e.type === 'keyup') {
//     currentSentence = sentence[sentenceCounter];
//     }
// }
// function handleSentences () {
// $("#sentence").html( sents[i]);
// i++

// }
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
// //Simple function to hide/show keyboard 
// $(document).ready(function(){
//     var upper = $('#keyboard-upper-container'),
//         lower = $('#keyboard-lower-container');

//     upper.hide();
//     $(document).on('keyup keydown', function(e) {
//         if (e.shiftKey) {
//             lower.hide();
//             upper.show();
//         } else {
//             upper.hide();
//             lower.show();
//         }
//         if (e.type === 'keydown') {
//             handleHighlight(e, 'thistle');
//         } else {
//             handleHighlight(e, '#f5f5f5');
//         }
//     });
// });
//Creating reusable function for highlight
// function handleHighlight(e, color) {
//     var code = e.keyCode;
//     if (!e.isShift && utils.isAlpha(code)) {
//         code = e.keyCode +32;
//     }
//     if (utils.isAlphanumeric(code)) {
//         $('#'+code).css('background-color', color);
//     } else {
//         $('span:contains(' +e.key+ ')').css('background-color', color);
//     }
// }

//CharCodeAt example; function where the computer knows what characters to look at
// var hello = 'hello';
// undefined
// var letterCounter = 0;
// undefined
// function test() {
//     console.log(hello.charCodeAt(letterCounter);
//     letterCounter++;
// }
// VM2894:2 Uncaught SyntaxError: missing ) after argument list
// function test() {
//     console.log(hello.charCodeAt(letterCounter));
//     letterCounter++;
// }
// undefined
// test();
// test();
// test();
// test();
// test();
// console output :2 104
// console output :2 101
// console output :2 108
// console output :2 108
// console output :2 111
