view();
function view() {
    var smiley = getSmiley(smileyIndex);
    document.getElementById('app').innerHTML = `
        <h1>Clicker Game</h1>
        <hr>
        <div onclick="doClick()">${smiley}</div>
        <div>${points}</div>
        <button onclick="reset()">Reset</button><br>
        <button onclick="buyUpgrade(10)">Upgrade (10 points)</button><br>
        <button onclick="omegaUpgrade(100)">Omega upgrade (100 points)</button><br>
        <button onclick="whatAjoke(10)">What a joke (1000 points)</button>
    `;
}