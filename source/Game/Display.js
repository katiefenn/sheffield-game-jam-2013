define(
	'Game/Display',
	['underscore', 'backbone', 'easel', 'Game/sprites/Sprites', 'preload'],
	function(_, backbone, createjs, sprites, preload) {
		var Display = Backbone.Model.extend({
			initialize: function() {
				this.set('stage', new createjs.Stage(document.getElementById('canvas')));
				this.set('sprites', {});
				this.set('tileWidth', 64);
				this.set('tileHeight', 64);
				this.set('tiles', []);
				this.get('tiles')[0] = sprites.wallSprite;
				this.get('tiles')[1] = sprites.floorSprite;
			},

			showLevel: function(tileArray, onReady) {
				var x = 0,
					y = 0;
				_.each(tileArray, function(row) {
					_.each(row, function(tile) {
			            var spritesheet = new createjs.SpriteSheet(tile),
			                sprite = new createjs.BitmapAnimation(spritesheet);

			            sprite.x = x * this.get('tileWidth');
			            sprite.y = y * this.get('tileHeight');

			            this.get('sprites')[getLevelSpriteName(x, y)] = sprite;
					}, this);
				}, this);

				loadSprites(sprites, function() {
		            _.each(this.sprites, function (sprite) {
		                sprite.gotoAndPlay('idle');
		                this.get('stage').addChild(sprite);
		            }, this);

		            createjs.Ticker.setFPS(30);
		            var This = this;
		            createjs.Ticker.addEventListener("tick", function() {
		                updateSprites(This.sprites, This.getCurrentScene());
		                This.stage.update();
		            });
				}, this);
			},
		});

		var getLevelSpriteName = function(x, y) {
			return 'row' + x + 'column' + y;
		}

		var loadSprites = function(sprites, onComplete, context) {
			var manifest = [],
				loader = new preload.LoadQueue(false);

			_.each(sprites, function(sprite) {
				manifest.push(sprite.images[0]);
			});

			loader.onComplete = function () {
				onComplete.call(context);
			};

			loader.loadManifest(manifest);
		}

		return Display;
	}
);