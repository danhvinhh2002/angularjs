window.dangkiConTroller =function($scope,$http){
    $scope.studentUniver ={
      username: "",
      password: "",
      fullname: "",
      email: "",
      gender: "",
      birthday: "",
      schoolfee: 0
     
    };
    $scope.register =function(){
        $http.post('http://localhost:3000/students', $scope.studentUniver)
        .then(response => {
            console.log(response);
            alert('Đăng kí thành công !');
            window.location.href = "#";
        });
    }
    $scope.huy =function(){
        window.location.href ="#";
    }
}