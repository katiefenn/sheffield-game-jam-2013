define(
	'Game/Game',
	['underscore', 'backbone', 'Game/Display'],
	function (_, Backbone, Display) {
		var Game = Backbone.Model.extend({
			initialize: function() {
				this.set('display', new Display());
			},

			runLevel: function(levelName) {
				var display = this.get('display');
				require(['Game/levels/' + levelName], function(level) {
					display.showLevel(level);
				});
			}
		});

		return Game;
	}
);