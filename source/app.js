require.config({
    baseUrl: '',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: 'Backbone'
        },
        easel: {
            exports: 'createjs'
        },
        preload: {
            exports: 'createjs'
        }
    },
    paths: {
        jquery: "libs/jquery/jquery-1.9.1.min",
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        easel: 'libs/easeljs-0.6.0.min',
        preload: 'libs/preloadjs-0.3.0.min'
    }
});

requirejs(['Game/Game'],
    function (Game) {
        var game = new Game;
    }
);