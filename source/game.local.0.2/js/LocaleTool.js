var LocaleTool = Base.extend({

    initialize: function (game) {
        game.plugInTool(this);
    },

    assume: function (locale) {
        this.locale = locale;
        if (window.console && window.console.log) {
            window.console.log('LocaleTool: Ready.');
        }
    },

    traceClipMap: function () {
        var localeTool = this;
        for (var clipAreaIndex in localeTool.locale.clipMap) {
            trace = new Kinetic.Polygon({
                points: localeTool.locale.clipMap[clipAreaIndex],
                fill: 'red',
                alpha: 0.5
            });

            game.showToolTrace(trace);
        }
    }
});
