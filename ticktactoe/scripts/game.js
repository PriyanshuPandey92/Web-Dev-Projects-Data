const buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', printXorZero);
}

var flag = true;
var gameActive = true;
var result;
function printXorZero() {
    if (gameActive && this.innerText.length == 0) {
        this.innerText = flag ? "X" : "0";
        flag = !flag;
        
        result = checkForWin(buttons);
        if (result) {
            gameActive = false;
            alert(this.innerText + " wins!");
            setTimeout(() => reset(buttons), 5000);
        }
        result = checkForDraw(buttons);
        if (result) {
            gameActive = false;
            alert("Draw!");
            setTimeout(() => reset(buttons), 5000);
        }
    }
}

function checkForWin(buttons) {
    // Checking rows
    for (var i = 0; i < 3; i++) {
        var rowStart = i * 3;
        if (buttons[rowStart].innerText && buttons[rowStart].innerText == buttons[rowStart + 1].innerText && buttons[rowStart + 1].innerText == buttons[rowStart + 2].innerText) {
            return true;
        }
    }

    // Checking columns
    for (var j = 0; j < 3; j++) {
        if (buttons[j].innerText && buttons[j].innerText == buttons[j + 3].innerText && buttons[j + 3].innerText == buttons[j + 6].innerText) {
            return true;
        }
    }

    // Checking diagonal 1
    if (buttons[0].innerText && buttons[0].innerText == buttons[4].innerText && buttons[4].innerText == buttons[8].innerText) {
        return true;
    }

    // Checking diagonal 2
    if (buttons[2].innerText && buttons[2].innerText == buttons[4].innerText && buttons[4].innerText == buttons[6].innerText) {
        return true;
    }

    return false;
}

function checkForDraw(buttons){
    for(var k = 0; k < buttons.length; k++){
        if(buttons[k].innerText.length == 0){
            return false;
        }
    }
    return true;
}

function reset(buttons){
    for(var l = 0; l < buttons.length; l++){
        buttons[l].innerText = "";
    }
    gameActive = true;
}
