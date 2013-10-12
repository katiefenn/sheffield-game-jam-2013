describe("Loader", function () {

    beforeEach (function () {
        loader = new Loader();
    });

    it ('should load a string resource individually', function () {
        var resource = 'path/file.js';

        loader.loadOne = function () {};
        spyOn(loader, 'loadOne');
        loader.load(resource, function () {});

        expect(loader.loadOne).toHaveBeenCalled();
    });

    it ('should throw an exception if a supplied resource is not a string or an array', function () {
        var callToLoader = function() {
            console.log(loader);
            loader.load({}, function() {});
        }

        expect(callToLoader).toThrow();
    });


});
