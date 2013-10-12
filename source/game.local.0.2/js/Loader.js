/*var Loader = Base.extend({
    load: function (resource, onLoad) {
        if (Object.prototype.toString.call(resource) == '[object Array]') {
            //this.loadMany
        }
        else if (typeof resource == "string") {

        }
        else {
            throw {
                name: 'Type error',
                level: 'Blocker',
                message: 'Resource provided to loader should be of type string or array'
            }
        }
    },
    loadOne: function (path, onLoad) {

    },
    loadMany: function (paths, onLoad) {

    },
    isImage: function (path) {
        if (path.indexOf('.jpg') != -1
            || path.indexOf('.gif') != -1
            || path.indexOf('.png') != -1
        ) {
            return true;
        }

        return false;
    },
    isJson: function (path) {
        if (path.indexOf('.js')) {
            return true;
        }

        return false;
    }
});*/

function Loader() {
    this.load = function (resource, onLoad) {
        if (Object.prototype.toString.call(resource) == '[object Array]') {
            this.loadMany(resource);
        }
        else if (typeof resource == "string") {
            this.loadOne(resource);
        }
        else {
            throw {
                name: 'Type error',
                level: 'Blocker',
                message: 'Resource provided to loader should be of type string or array'
            }
        }
    }
    this.loadOne = function (path, onLoad) {

    }
    this.loadMany = function (paths, onLoad) {

    }
}