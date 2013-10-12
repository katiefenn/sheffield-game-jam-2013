define(
	'Game/levels/DemoLevel',
	['underscore', 'backbone'],
	function(_, backbone) {
		var TILE_WALL = 0,
			TILE_FLOOR = 1;

		var symbols = [];
		symbols['|'] = TILE_WALL;
		symbols['='] = TILE_WALL;
		symbols['.'] = TILE_FLOOR;

		var demoLevel = ""
			+ "|=========================|"
            + "|.........................|"
			+ "|.=.=.=.=.=.=.=.=.=.=.=.=.|"
			+ "|.........................|"
			+ "|.=.=.=.=.=.=.=.=.=.=.=.=.|"
			+ "|.........................|"
			+ "|.=.=.=.=.=.=.=.=.=.=.=.=.|"
			+ "|.........................|"
			+ "|.=.=.=.=.=.=.=.=.=.=.=.=.|"
			+ "|.........................|"
			+ "|.=.=.=.=.=.=.=.=.=.=.=.=.|"
			+ "|.........................|"
			+ "|=========================|";

		var stripWhitespace = function(string) {
			return string.replace(' ', '');
		};

		var convertSymbolsToArray = function(string) {
			var tileArray = [];
			_.each(string, function(symbol) {
				tileArray.push(symbols[symbol]);
			});

			return tileArray;
		};

		return convertSymbolsToArray(stripWhitespace(demoLevel));
	}
);