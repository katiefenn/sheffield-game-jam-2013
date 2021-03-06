define(function () {
    var spritesheets = {
            "player-character": {
                "animations": {
                    "walk-up": {
                        "frames": [0, 0, 1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7],
                        "next": "walk-up"
                    },
                    "walk-right": {
                        "frames": [8, 8, 9, 9, 9, 10, 10, 10, 11, 8],
                        "next": "walk-right"
                    },
                    "walk-down": {
                        "frames": [12, 12, 13, 13, 14, 15, 16, 16, 17, 17, 18, 19],
                        "next": "walk-down"
                    },
                    "walk-left": {
                        "frames": [20, 20, 21, 21, 21, 22, 22, 22, 23, 22],
                        "next": "walk-left"
                    },
                    "idle": {
                        "frames": [12],
                        "next": "idle"
                    },
                    "idle-up": {
                        "frames": [0],
                        "next": "idle-up"
                    },
                    "idle-right": {
                        "frames": [8],
                        "next": "idle-right"
                    },
                    "idle-down": {
                        "frames": [12],
                        "next": "idle-down"
                    },
                    "idle-left": {
                        "frames": [20],
                        "next": "idle-left"
                    }
                },
                "images": ["source/img/player-character.png"],
                "frames": [
                    [122, 122, 16, 22, 0, 0, 0],
                    [152, 122, 16, 22, 0, 0, 0],
                    [182, 122, 16, 22, 0, 0, 0],
                    [212, 122, 16, 22, 0, 0, 0],
                    [2, 122, 16, 22, 0, 0, 0],
                    [32, 122, 16, 22, 0, 0, 0],
                    [62, 122, 16, 22, 0, 0, 0],
                    [92, 122, 16, 22, 0, 0, 0],
                    [121, 2, 20, 23, 0, 0, 0],
                    [241, 122, 20, 23, 0, 0, 0],
                    [272, 122, 20, 23, 0, 0, 0],
                    [301, 122, 20, 23, 0, 0, 0],
                    [123, 33, 16, 22, 0, 0, 0],
                    [153, 33, 16, 22, 0, 0, 0],
                    [183, 33, 16, 22, 0, 0, 0],
                    [213, 33, 16, 22, 0, 0, 0],
                    [3, 33, 16, 22, 0, 0, 0],
                    [33, 33, 16, 22, 0, 0, 0],
                    [63, 33, 16, 22, 0, 0, 0],
                    [93, 33, 16, 22, 0, 0, 0],
                    [150, 2, 16, 22, 0, 0, 0],
                    [241, 32, 20, 23, 0, 0, 0],
                    [272, 32, 20, 23, 0, 0, 0],
                    [301, 32, 20, 23, 0, 0, 0]
                ]
            }
        };

    var config = {
        "sprites": [
            {"name": "player-character", "spritesheet": spritesheets["player-character"], "properties": {"scaleX": 2, "scaleY": 2}}
        ]
    };

    return config;
});