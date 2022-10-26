window.TestProcessController = function($scope, $routeParams,$http){

    $scope.apiUrl = "http://localhost:3000";
    $scope.questions = [];
    $scope.score = 0;
    $scope.isSubmit = false;

    $scope.radioChange = function(value){
      console.log(value);
    }


    $scope.countAnswers = function(){
      var count = 0;
      $scope.questions.forEach((item, i) => {
        if(item.userChoose != undefined){
          count++;
        }
      });
      return count;
    }

    $scope.chooseAnswer = function(qId,aId){
      $scope.questions.forEach((item, index) => {
        if(item.Id == qId){
          item.userChoose = aId;
        }
      });
    }
    $scope.submitExercise = function(){
      $scope.isSubmit = true;
      var score = 0;
      $scope.questions.forEach((item) => {
          if(item.userChoose != undefined && item.userChoose == item.AnswerId){
              score += item.Marks
          }
      });
      alert(`Bạn đã đạt ${score} điểm`);
      window.location.href = "#";
  }
   
  
    $http.get(`${$scope.apiUrl}/${$routeParams.subjectId}`)
      .then(response => {
          console.log(response);
          if(response.statusText == "OK"){
            //   response.data - bộ câu hỏi(rất nhiều)
            //   lấy random 10 câu hỏi trong bộ này
              while($scope.questions.length < 10){
                  var randomIndex = Math.floor(Math.random() * response.data.length);
                  const tmpQuestion = response.data[randomIndex];
            //array.indexOf(Object) => return -1 nếu object chưa có trong mảng
            // => return index của phần tử nêu object ttrungf 1 phần tử nào đó trong mảng

                  if($scope.questions.indexOf(tmpQuestion)==-1){
                    $scope.questions.push(tmpQuestion);
                  }
                 
              }
            
          }
        })

}