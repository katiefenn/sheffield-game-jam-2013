define(
	'Game/sprites/FloorSprite',
	[],
	function() {
		var spriteSheet = {"animations": {"idle": {"frames": [0], "next": "idle"}},"images": ["img/floor.png"],"frames": [[0, 0, 64, 64, 0, 0, 0]]};

		return spriteSheet;
	}
);