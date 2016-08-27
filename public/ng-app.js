var app = angular.module("MeanBlog", [
    'ui.router'
]);

/*app.config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }
});*/