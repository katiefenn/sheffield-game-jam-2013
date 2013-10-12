function Sprite ()
{
    this.onLoad = function () {};
}

Sprite.prototype.load = function () {
    var imageFile = new Image();
    var sprite = this;
    imageFile.onLoad = function() {
        alert('O HAI');
        sprite.image = new Kinetic.Image({
            x: sprite.x,
            y: sprite.y,
            image: this,
            width: this.width * 2,
            height: this.height * 2,
            zIndex: 1
        });
        console.log(sprite.onLoad);
        sprite.onLoad();
    }
    imageFile.src = this.imageFileUrl; 

}
