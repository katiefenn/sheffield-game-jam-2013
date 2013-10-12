var Game = Base.extend({
    initialize: function () {
        this.started = false;
        this.sceneHasLoaded = false;
    },
    start: function() {
        this.started = true;
        this.loadDemo();
    },
    loadDemo: function() {
        // This is taking the responsibility of the script
        // for now, calling the scenes
        var game = this,
            displayBuilder = DisplayBuilder.new(),
            resourceLoader = JsonLoader.new();

        resourceLoader.load('json/locales/kakariko_village.js', function(resource) {
            var locale = Locale.new(resource.spriteMap, resource.clipMap);

            var scene = Scene.new(locale, [], null);

            displayBuilder
                .withLocaleSetPieces(locale.setPieces)
                .withCharacters([]);

            displayBuilder.build(function(display) {
                game.display = display;
                game.play(scene);
            }); 
        });
    },
    play: function (scene) {
        this.currentScene = scene;
        this.display.displayScene(this.currentScene);
    },
    plugInTool: function (tool) {
        if (LocaleTool.isPrototypeOf(tool)) {
            tool.assume(this.currentScene.getLocale());
        }
    },
    showToolTrace: function (trace) {
        this.display.addTrace(trace);
    }
});
