var JsonResource = Base.extend({
    initialize: function(path, onLoad) {
        this.load(path, onLoad); 
    },

    load: function(path, onLoad) {
        $.ajax({
            url: path,
            dataType: 'json',
            success: onLoad
        });
    }
});
