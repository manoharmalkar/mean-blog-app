app.

    controller('HomeController', function($scope, $http, $state ){
        $http({
            method: 'GET',
            url: 'getbloglist'
        }).success(function(data){
            $scope.blogs = data;
            console.log($scope.blogs);
        });
            
        $scope.editBlog = function(id){
            $state.go('edit',{id:id});
        }
    })
    
    .controller('EditController', function($scope, $http, $state){
        if($state.params.id)
        $http({
            method: 'POST',
            data:$.param($state.params),
            url: 'blogdetails',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        }).success(function(data){
            $scope.blogs = data;
            console.log($scope.blogs);
        });
        $scope.editBlog = function(id){
            console.log(id);
        }
    })



;