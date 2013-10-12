
describe("DisplayBuilder", function () {

    beforeEach(function () {
        displayBuilder = DisplayBuilder.new();
        setPiece = {"name": "example", "image": "img/kakariko_village.png","x": 0, "y": 0, "width": 1, "height": 1};
    });

    it("should allow a locale set piece to be added", function () {
        displayBuilder.withLocaleSetPiece(setPiece);
        expect(displayBuilder.localeSetPieces.length).toEqual(1); 
    });

    it("should allow multiple set pieces to be added", function () {
        setPiece2 = jQuery.extend(setPiece);
        setPiece2.name = "example2";
        displayBuilder.withLocaleSetPieces([setPiece, setPiece2]);
        expect(displayBuilder.localeSetPieces.length).toEqual(2);
    }); 

});
