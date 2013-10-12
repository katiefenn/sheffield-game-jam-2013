define(
	'Game/Display',
	['underscore', 'backbone', 'easel', 'Game/sprites/Sprites'],
	function(_, backbone, createjs, Sprites) {
		var Display = Backbone.Model.extend({
			initialize: function() {
				this.set('stage', new createjs.Stage(document.getElementById('canvas')));
			},

			showLevel: function(tileArray) {
				_.each(tileArray, function(tile) {

				});
			}
		});

		return Display;
	}
);