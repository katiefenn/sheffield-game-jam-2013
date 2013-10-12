define(
	'Game/sprites/WallSprite',
	[],
	function() {
		var spriteSheet = {"animations": {"idle": {"frames": [0], "next": "idle"}},"images": ["img/wall.png"],"frames": [[0, 0,64, 64, 0, 0, 0]]};

		return spriteSheet;
	}
);