app.
config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('blogs');
    $stateProvider
        .state('blogs', {
            url:'/blogs',
            templateUrl: 'static/ng-view/home.html'
        })
        .state('edit', {
            url:'/edit/:id',
            templateUrl: 'static/ng-view/edit.html'
        })
        
    ;
});