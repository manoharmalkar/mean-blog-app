app.

    controller('HomeController', function($scope, $http, $state ){
        $http({
            method: 'GET',
            url: 'getbloglist'
        }).success(function(data){
            $scope.blogs = data;
        });
            
        $scope.editBlog = function(id){
            $state.go('edit',{id:id});
        }
        $scope.searchTitle = function(){
            var data = {title:$scope.search};
            $http({
                method: 'POST',
                data:$.param(data),
                url: 'searchblog',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }).success(function(data){
                $scope.blogs = data;
            });
        }
        $scope.deleteBlog = function(id, index){
            var data = {_id:id};
            $http({
                method: 'POST',
                data:$.param(data),
                url: 'deleteblog',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }).success(function(data){
                alert("blog deleted");
                $scope.blogs.splice(index, 1);
            });
        }
    })
    
    .controller('EditController', function($scope, $http, $state){
        if($state.params.id){
            $http({
                method: 'POST',
                data:$.param($state.params),
                url: 'blogdetails',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }).success(function(data){
                $scope.formData = data[0];
                console.log($scope.blogs);
            });
        }
        $scope.saveBlog = function(){
            $http({
                method: 'POST',
                data : $.param($scope.formData),
                url: 'saveblog',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }).success(function(data){
                $state.go('blogs');
            });
        }
    })



;