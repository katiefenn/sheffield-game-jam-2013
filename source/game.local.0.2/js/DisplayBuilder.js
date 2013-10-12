var DisplayBuilder = Base.extend({

    initialize: function () {
        this.localeSetPieces = [];
        this.characters = [];
        this.totalToBuild = 0;
        this.onBuild = function() {};
        this.images = [];
    },

    withLocaleSetPiece: function (setPiece) {
        this.totalToBuild++;
        this.localeSetPieces.push(setPiece);

        return this;
    },

    withLocaleSetPieces: function (setPieces) {
        for (var setPieceIndex in setPieces) {
            if (setPieces.hasOwnProperty(setPieceIndex)) {
                this.withLocaleSetPiece(setPieces[setPieceIndex]);
            }
        }

        return this;
    },

    withCharacter: function(character) {
        this.totalToBuild++;
        this.characters.push(character);

        return this;
    },

    withCharacters: function (characters) {
        for (var characterIndex in characters) {
            if (characters.hasOwnProperty(characterIndex)) {
                this.withCharacter(characters[characterIndex]);
            }
        }

        return this;
    },

    build: function (onBuild) {
        this.display = Display.new();
        this.onBuild = onBuild;

        for (var setPieceIndex in this.localeSetPieces) {
            this.buildSetPiece(this.localeSetPieces[setPieceIndex]);
        }

        for (var characterIndex in this.characters) {
            this.buildCharacter(this.characters[characterIndex]);
        }
    },

    buildSetPiece: function (setPiece) {
        var displayBuilder = this,
            display = this.display,
            buildSprite = function(image) {
                var sprite = new Kinetic.Sprite({
                    x: setPiece.x,
                    y: setPiece.y,
                    zIndex: 1,
                    animation: 'down',
                    animations: setPiece.animation,
                    frameRate: 7,
                    image: image,
                    scale: [2, 2]
                });

                display.addSetPieceSprite(setPiece.name, sprite);
                displayBuilder.advanceProgress();
            };

        if (typeof this.images[setPiece.image] == 'undefined') {
            this.images[setPiece.image] = new Image();
            this.images[setPiece.image].onload = buildSprite(this.images[setPiece.image]);
            this.images[setPiece.image].src = setPiece.image;
        } else {
            buildSprite(this.images[setPiece.image]);
        }
    },

    buildCharacter: function (character) {
        var displayBuilder = this,
            display = this.display,
            buildSprite = function(image) {
                var sprite = new Kinetic.Sprite({
                    x: character.x,
                    y: character.y,
                    zIndex: 1,
                    animation: 'down',
                    animations: character.animation,
                    frameRate: 7,
                    image: image,
                    scale: [2, 2]
                });

                display.addCharacterSprite(character.name, sprite);
                displayBuilder.advanceProgress();
            };

        if (typeof this.images[character.image] == 'undefined') {
            this.images[character.image] = new Image();
            this.images[character.image].onload = buildSprite(this.images[character.image]);
            this.images[character.image].src = character.image;
        } else {
            buildSprite(this.images[character.image]);
        }
    },

    advanceProgress: function () {
        this.totalToBuild--;

        if (this.totalToBuild === 0) {
            this.onBuild(this.display);
        }
    }
});
