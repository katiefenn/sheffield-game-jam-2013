define(
	'Game/sprites/Sprites',
	['Game/sprites/WallSprite', 'Game/sprites/FloorSprite'],
	function(WallSprite, FloorSprite) {
		return {
			wallSprite: WallSprite,
			floorSprite: FloorSprite
		};
	}

);