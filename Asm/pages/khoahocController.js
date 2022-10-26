window.khoahocController = function($scope,$http){
    $scope.subjects=[];
    $scope.keyword ="";
    $scope.changeKeyword = function(){
    $http.get(`${subjectApiUrl}?Name_like=${$scope.keyword}`)
    .then(function(response){
      if(response.statusText == "OK"){
        $scope.subjects = response.data;
      }
    })
  }
    $http.get(subjectApiUrl)
    .then(function(response){
        console.log(response);
        if(response.statusText== "OK"){
            $scope.subjects = response.data;
        }
    })
}