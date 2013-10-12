define(
	'Game/levels/DemoLevel',
	['underscore', 'backbone'],
	function(_, backbone) {
		var TILE_WALL = 0,
			TILE_FLOOR = 1,
			END_OF_ROW = 2;

		var symbols = [];
		symbols['|'] = TILE_WALL;
		symbols['='] = TILE_WALL;
		symbols['.'] = TILE_FLOOR;
		symbols[';'] = END_OF_ROW;

		var demoLevel = ""
			+ "|=============|;"
            + "|.............|;"
			+ "|.=.=.=.=.=.=.|;"
			+ "|.............|;"
			+ "|.=.=.=.=.=.=.|;"
			+ "|.............|;"
			+ "|.=.=.=.=.=.=.|;"
			+ "|.............|;"
			+ "|=============|;";

		var stripWhitespace = function(string) {
			return string.replace(' ', '');
		};

		var convertSymbolsToArray = function(string) {
			var tileArray = [];
			var row = [];
			_.each(string, function(symbol) {
				if(symbols[symbol] != END_OF_ROW) {
					row.push(symbols[symbol]);
				} else {
					tileArray.push(row);
					row = [];
				}					
			});

			return tileArray;
		};

		return convertSymbolsToArray(stripWhitespace(demoLevel));
	}
);