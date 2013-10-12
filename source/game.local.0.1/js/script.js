/* Author:

*/

$(document).ready(function () {
    var game = new Game();
    game.init();
});

/*
function ClipDebugger(clipMap) {
    this.clipMap = clipMap;
}

ClipDebugger.prototype.setDisplay = function (display) {
    this.display = display;
}

ClipDebugger.prototype.drawClipMap = function () {

    for (clipAreaIndex = 0; clipAreaIndex < clipMap.length.length(); clipAreaIndex ++) {
        clipAreas = new Kinetic.Polygon({
            points: this.clipMap[clipAreaIndex],
            fill: 'red',
            alpha: 0.5
        });

        this.display.add(clipArea);
    }
}
*/



var playerX = 0;
var playerY = 0;

var playerFace = 'down';

$(document).keydown(function(event) {
    // Up
    if (event.keyCode == 38) {
        event.preventDefault();
        playerY = playerY - 4;
        playerFace = 'up';
    }   
    // Right
    if (event.keyCode == 39) {
        event.preventDefault();
        playerX = playerX + 4;
        playerFace = 'right';
    }   
    // Down
    if (event.keyCode == 40) {
        event.preventDefault();
        playerY = playerY + 4;
        playerFace = 'down';
    }   
    // Left
    if (event.keyCode == 37) {
        event.preventDefault();
        playerX = playerX - 4;
        playerFace = 'left';
    }

});
/*
kakarikoVillage = new Locale();
kakarikoVillage.addClipArea([896, 688, 1024, 688, 1024, 736, 928, 736, 928, 832, 896, 832]);
display = new Display();
display.setLocale(kakarikoVillage);
display.drawLocale();*/
