var Locale = Base.extend({
    initialize: function (setPieces, clipMap) {
        this.setPieces = setPieces;
        this.clipMap = clipMap;
    },

    getSetPieces: function () {
        return this.setPieces;
    }
});
