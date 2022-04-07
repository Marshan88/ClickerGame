var points = 0;
var pointsPerClick = 1;
var smileyIndex = 0;


function doClick() {
    points += pointsPerClick;
    smileyIndex = getNextSmileyIndex(smileyIndex);
    view();
}

function buyUpgrade() {
    if (points < 10) return;
       points -= 10;
       pointsPerClick++;
        view();
}

function omegaUpgrade() {
    if (points >= 100){
        points -= 100;
        pointsPerClick *= 10;                
    }
        view();
}

function whatAjoke() {
    if (points < 1000) return
    points = 0;
    pointsPerClick = 0;
    alert(`Why did the programmer quit his job? ..Because he didn't get arrays.`)
    updateView();
    }

function reset() {
    location.reload();
}

function getSmiley(aSmileyIndex) {
    if(aSmileyIndex == 0) return '😀';
    if(aSmileyIndex == 1) return '😁';
    if(aSmileyIndex == 2) return '🤩';
    if(aSmileyIndex == 3) return '🤠';
    if(aSmileyIndex == 4) return '😈';
}

function getNextSmileyIndex(aSmileyIndex) {
    const maxSmileyIndex = 4;
    aSmileyIndex++;
    if (aSmileyIndex > maxSmileyIndex) {
        aSmileyIndex = 0;
    }
    return aSmileyIndex;
}