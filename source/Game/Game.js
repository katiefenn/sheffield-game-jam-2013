define(
	'Game/Game',
	['underscore', 'backbone', 'Game/Display'],
	function (_, Backbone, Display) {
		var Game = Backbone.Model.extend({
			initialize: function() {
				this.set('display', new Display());
			},

			runLevel: function(levelName) {
				require(['Game/levels/' + levelName], function(level) {
					//console.log(level);
				});
			}
		});

		return Game;
	}
);