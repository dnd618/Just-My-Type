// function isAlphanumericKey(keycode) {
//     return (keycode >= 48) && (keycode <= 90);
// }


// $(document).ready(function(){

//     $(".keyboard-key").on({
//         // Upon mouse-down, make the selectedLetter region immediately visible again
//         // and show the letter that was pressed (which is exactly the button's label).
//         // Also, speak the letter.
//         mousedown: function() {
//             $("#selectedLetter").stop().css('opacity', '1.0').text($(this).text());
//             responsiveVoice.speak($(this).text().toLowerCase(), "UK English Male");
//         },

//         // Upon mouse-up, fade away the shown letter.
//         mouseup: function() {
//             $("#selectedLetter").stop().animate({opacity: 0}, 1000);
//         }

//     });

// });

// // Emulates a mousedown event on a keyboard-key button.
// $(document).keydown(function (e) {
//     if (isAlphanumericKey(e.which)) {
//         var myID = "#key-" + String.fromCharCode(e.which);
//         $(myID).trigger("mousedown").addClass('active-style');
//     }
// });
// // Emulates a mouseup event on a keyboard-key button.
// $(document).keyup(function (e) {
//     if (isAlphanumericKey(e.which)) {
//         var myID = "#key-" + String.fromCharCode(e.which);
//         $(myID).trigger("mouseup").removeClass('active-style');
//     }
// });
// //Typing ACSII characters

// String.fromCharCode(65,66,67); // returns 'ABC'
var TxtType = function(el, toRotate, period) {
		        this.toRotate = toRotate;
		        this.el = el;
		        this.loopNum = 0;
		        this.period = parseInt(period, 10) || 2000;
		        this.txt = '';
		        this.tick();
		        this.isDeleting = false;
		    };
		
		    TxtType.prototype.tick = function() {
		        var i = this.loopNum % this.toRotate.length;
		        var fullTxt = this.toRotate[i];
		
		        if (this.isDeleting) {
		        this.txt = fullTxt.substring(0, this.txt.length - 1);
		        } else {
		        this.txt = fullTxt.substring(0, this.txt.length + 1);
		        }
		
		        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		
		        var that = this;
		        var delta = 200 - Math.random() * 100;
		
		        if (this.isDeleting) { delta /= 2; }
		
		        if (!this.isDeleting && this.txt === fullTxt) {
		        delta = this.period;
		        this.isDeleting = true;
		        } else if (this.isDeleting && this.txt === '') {
		        this.isDeleting = false;
		        this.loopNum++;
		        delta = 500;
		        }
		
		        setTimeout(function() {
		        that.tick();
		        }, delta);
		    };
		
		    window.onload = function() {
		        var elements = document.getElementsByClassName('typewrite');
		        for (var i=0; i<elements.length; i++) {
		            var toRotate = elements[i].getAttribute('data-type');
		            var period = elements[i].getAttribute('data-period');
		            if (toRotate) {
		              new TxtType(elements[i], JSON.parse(toRotate), period);
		            }
		        }
		        // INJECT CSS
		        var css = document.createElement("style");
		        css.type = "text/css";
		        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		        document.body.appendChild(css);
		    };