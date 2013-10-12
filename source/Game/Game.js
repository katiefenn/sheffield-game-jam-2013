define(
	'Game/Game',
	['underscore', 'backbone'],
	function (_, Backbone) {
		var Game = Backbone.Model.extend({
			initialize: function() {
				console.log('O HAI');
			}
		});

		return Game;
	}
);