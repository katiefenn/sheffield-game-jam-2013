
function Display(blah) {
    this.blah = blah;
    this.sprites = new Object;
    this.loadingSprites = 0;
    this.layer = new Kinetic.Layer();
    this.stage = new Kinetic.Stage({
        container: "container",
        width: 1425,
        height: 807
    });
}

Display.prototype.setLocale = function (locale) {
    this.locale = locale;
}

Display.prototype.loadLocale = function (localeName) {
    var display = this;

    this.locale = new Locale(localeName, function() {
        var sprites = this.getSpriteMap();
        for (item in sprites) {
            var image = new Image;
            image.onload = function () {
                var sprite = new Kinetic.Sprite({
                    x: sprites[item].x,
                    y: sprites[item].y,
                    zIndex: 1,
                    animation: 'down',
                    animations: sprites[item].animation,
                    frameRate: 7,
                    image: image,
                    scale: [2, 2]
                });
                sprite.name = sprites[item].name;
                display.add(sprite);
            }
            image.src = sprites[item].image;
            display.loadingSprites++;
        }
    });
}


Display.prototype.add = function (node) {
    this.layer.add(node);
    this.sprites[node.name] = node;
    this.loadingSprites--;
    
    if (this.loadingSprites == 0) {
        var display = this;
        this.player = new Player (function (sprite) {
            display.add(sprite);
        });

        this.displayLocale();
    }

    if (typeof node.start != 'undefined') {
        node.start();
    }
}

Display.prototype.displayLocale = function () {
    this.stage.add(this.layer); 
}

/** Old stuff

Display.prototype.drawLocale = function () {

    this.stage = new Kinetic.Stage({
        container: "container",
        width: 1425,
        height: 807
    });

    this.layer = new Kinetic.Layer();

    this.worldImage = new Image();
    this.worldImage.display = this;
    this.loadingItemCount++;
    this.worldImage.onload = function() {
        var world = new Kinetic.Image({
            x: 0,
            y: 0, 
            image: this,
            width: this.width * 2,
            height: this.height * 2,
            zIndex: 1
        });

        // add the shape to the layer
        this.loaded = true;
        display.add(world); 
    };
    this.worldImage.src = "img/kakariko_village.png"; 
}

*/
