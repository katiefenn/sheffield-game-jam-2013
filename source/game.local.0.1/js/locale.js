
function Locale(name, onLoad) {
    var locale = this;
    this.onLoad = onLoad;
    this.clipMap = [];

    $.ajax({
        url: 'json/locales/' + name + '.js',
        dataType: 'json',
        success: function (data) {
            locale.data = data;
            locale.onLoad();
        }
    });
}

Locale.prototype.init = function () {
}

Locale.prototype.getSpriteMap = function () {
    spriteMap = this.data.spriteMap;

    return spriteMap;
}

Locale.prototype.getClipMap = function () {
    return this.clipMap;
}

Locale.prototype.addClipArea = function (clipArea) {
    this.clipMap.push(clipArea);
}
