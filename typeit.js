 //Text Animation Function
 $('#typeit-box').typeIt({
     speed: 100,
     startDelay: 1250
     click(): function() {
         $('#typeit-box-code-link').addClass('is-visible');
     }
 })
 tiType('A jQuery pl')
.tiPause(500)
.tiDelete(12)
.tiPause(500)
.tiType('The <strong>most versatile</strong> jquery')
.tiPause(200)
.tiDelete(5)
.tiType('Query typing plugin on the net.')
.tiPause(500)
.tiDelete(11)
.tiPause(350)
.tiType('on the ')
.tiPause(600)
.tiType('<em>planet.</em>');
// the queue I want to type
 $('#keyboard-upper-container', '#keyboard-lower-container').typeIt({
     // options
});

//Text to type
// var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',

// 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain

// nate eate tea anne inant nean', 'itant eate anot eat nato inate eat

// anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];