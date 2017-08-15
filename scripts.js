var upper,
    lower,
    sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ],
    currentSentence = '',
    sentenceCounter = 0,
    letterCounter = 0,
    time,
    mistakes = 0;

$(document).ready(function() {
    upper = $('#keyboard-upper-container');
    lower = $('#keyboard-lower-container');

    upper.hide();
    setSentence();
    handleTargets(letterCounter);

    $(document).on('keyup keydown', function(e) {
        var trueCode = configKeyCode(e);

        if (time === undefined) {
            time = new Date().getTime();
        }

        if (e.keyCode === 16) {
            handleShift(e);
        }

        handleHighlight(e, trueCode);

        if (e.type === 'keyup') {
            handleResponse(trueCode);
        }
    });
});

function handleResponse(code) {
    if (code === currentSentence.charCodeAt(letterCounter)) {
        setGlyphicon(true);
        letterCounter++;

        if (letterCounter >= currentSentence.length) {
            letterCounter = 0;
            setSentence();
        }

        handleTargets(letterCounter);
    } else {
        mistakes++;
        setGlyphicon(false);
    }
}

function setGlyphicon(isCorrect) {
    $('#feedback').empty();

    if (isCorrect) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
    }
}

function setSentence() {
    if (sentenceCounter >= sentences.length) {
        gameOver();
        return;
    }

    currentSentence = sentences[sentenceCounter];

    var sentenceContainer = $('#sentence'),
        splitSentence = currentSentence.split(''),
        constructedSentence = '';

    for (var i = 0; i < splitSentence.length; i++) {
        constructedSentence += `<span id='letter-${i}'>${currentSentence[i]}</span>`
    }

    sentenceContainer.empty();
    sentenceContainer.append(constructedSentence);
    sentenceCounter++;
}

function handleTargets(counter) {
    var targetDiv = $('#target-letter');
    targetDiv.empty();

    if (counter > 0) {
        $('#letter-' + (counter-1)).css('background-color', 'lavenderblush');
    }

    targetDiv.append(currentSentence[letterCounter]);
    $('#letter-' + counter).css('background-color', 'lavenderblush');
}

function configKeyCode(e) {
    if (utils.isAlpha(e.keyCode) && !e.shiftKey) {
        return e.keyCode + 32;
    } else {
        return e.keyCode;
    }
}

function handleShift(event) {
    if (event.type === 'keydown') {
        toggleKeyboard('upper');
    } else if (event.type === 'keyup') {
        toggleKeyboard('lower');
    }
}

function handleHighlight(event, code) {
    if (event.type === 'keydown') {
        $('#' + code).css('background-color', 'lavenderblush');
    } else if (event.type === 'keyup') {
        $('#' + code).css('background-color', 'lavenderblush');
    }
}

function toggleKeyboard(type) {
    if (type === 'upper') {
        lower.hide();
        upper.show();
    } else if (type === 'lower') {
        upper.hide();
        lower.show();
    }
}

function gameOver() {
    handleWPM();

    var playAgain = confirm(
        `your wpm score is: ${handleWPM()}
        do you want to play, again?`
    );

    if (playAgain) {
        location.reload(true);
    }
}

function handleWPM() {
    var elapsed = new Date().getTime() - time;
    var numberOfWords = sentences.reduce(function(acc, curr) {
        return acc += curr.split(' ').length;
    }, 0);

    var minutes = elapsed / 60000;

    return Math.round(numberOfWords / minutes - 2 * mistakes);
}

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

