var JsonLoader = Base.extend({
    load: function(path, onLoad) {
        $.ajax({
            url: path,
            dataType: 'json',
            success: onLoad
        });
    }
});
