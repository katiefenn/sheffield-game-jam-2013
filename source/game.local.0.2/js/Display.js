var Display = Base.extend({
    initialize: function () {

        if (typeof blah == 'undefined') {
            blah = 1;
        } else {
            blah++;
        }

        this.id = blah;

        this.stage = new Kinetic.Stage({
            container: "container",
            width: 1425,
            height: 807 
        });

        this.layer = new Kinetic.Layer();

        this.setPieceSprites = {};
        this.characterSprites = {};
        this.traces = {};
    },

    displayScene: function (scene) {
        for (var spriteIndex in this.setPieceSprites) {
            if (this.setPieceSprites.hasOwnProperty(spriteIndex)) {
                this.layer.add(this.setPieceSprites[spriteIndex]);
                this.setPieceSprites[spriteIndex].start();
            }
        }

        this.stage.add(this.layer);
        
    },

    addTrace: function (trace) {
        this.layer.add(trace);
        this.stage.add(this.layer);
    },

    addSetPieceSprite: function (name, sprite) {
        this.setPieceSprites[name] = sprite;
    },

    addCharacterSprite: function (name, sprite) {
        this.characterSprites[name] = sprite;
    }
});
