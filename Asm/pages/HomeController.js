window.HomeController = function($scope,$http){
    $scope.subjects=[]
    $http.get(subjectApiUrl)
    .then(function(response){
        console.log(response);
        if(response.statusText== "OK"){
            $scope.subjects = response.data;
        }
    })
}