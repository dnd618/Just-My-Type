 //Text Animation Function
// $(document).ready(function(){
// $('.type-it').typeIt({
//      speed: 900,
//      lifeLike: false,
//      autoStart: false
// });
// // .tiType('I am typing slowly,')
// // .tiSettings({speed: 100})
// // .tiType('but now I am typing pretty fasst')
// // .tiDelete(2)
// // .tiType('t!');

//  tiType('A jQuery pl')
// .tiPause(500)
// .tiDelete(12)
// .tiPause(500)
// .tiType('The <strong>most versatile</strong> jquery')
// .tiPause(200)
// .tiDelete(5)
// .tiType('Query typing plugin on the net.')
// .tiPause(500)
// .tiDelete(11)
// .tiPause(350)
// .tiType('on the ')
// .tiPause(600)
// .tiType('<em>planet.</em>');
// // the queue I want to type
//  $('#keyboard-upper-container', '#keyboard-lower-container').typeIt({
//      // options
// });

// $('.type-it').typeIt({
//      strings: ['ten ate neite ate nee enet ite ate inet ent eate,']
// });
//
//
var sentences = ["ten ate neite ate nee enet ite ate inet ent eate",

"Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain",

"nate eate tea anne inant nean", "itant eate anot eat nato inate eat",

"anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"],

document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=numberOfMistakes[rank];
      var speed =2 * numberOfMistakes[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===numberOfMistakes.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}

