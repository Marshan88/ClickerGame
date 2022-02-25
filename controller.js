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
    alert(`The programmer's wife sent him to the grocery store. Her instructions were: "buy milk. See if they have eggs. If they do, buy 10". So he went to the store and got back home with 10 packs of milk. When the wife asked why, he said: "they had eggs"`)
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