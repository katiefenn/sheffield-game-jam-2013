var Scene = Base.extend({
    initialize: function (locale, characters, script) {
        this.locale = locale;
        this.characters = characters;
        this.script = script;
    },

    getLocale: function () {
        return this.locale;
    },

    getCharacters: function () {
        return this.characters;
    },

    getScript: function () {
        return this.script;
    }
});
