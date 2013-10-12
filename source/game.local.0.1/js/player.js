
function Player(onLoad)
{
    this.onLoad = onLoad;
    this.load();

    this.animations = {
          up: [{
            x: 63,
            y: 3,
            width: 16,
            height: 22
          }],
          right: [{
            x: 121,
            y: 2,
            width: 20,
            height: 23
          }],
          down: [{
            x: 33,
            y: 3,
            width: 16,
            height: 22
          }],
          left: [{
            x: 150,
            y: 2,
            width: 20,
            height: 23
          }]
    };
}


Player.prototype.load = function () {
    var player = this;
    var playerImage = new Image();
    playerImage.display = this;
    playerImage.onload = function() {
        player.sprite = new Kinetic.Sprite({
            x: playerX,
            y: playerY,
            image: this,
            animation: 'down',
            animations: player.animations,
            frameRate: 7,
            scale: [2, 2],
            zIndex: 2
        });
        
        player.onLoad(player.sprite);

    };
    playerImage.src = "img/link.png";
}
