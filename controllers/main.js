var app = angular.module("app",[]);

app.controller("mainController", function($scope,$http){
    $scope.tittle="prueba";
    $scope.loading = false;
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.message = "";

    $scope.sendmail = function(){
        
      //alert($scope.name+" "+$scope.email+" "+$scope.phone);
      if (($scope.name == "" ) || ($scope.email == "") || ($scope.phone == "") || ($scope.message == "")){
        swal({
          title: "You must complete all the fields",
          button: "OK",
          dangerMode: true
        });

        return

      }
        $scope.loading = true;
           $http({
             method: 'POST',
             url: 'http://localhost:3000/emails/', 
            // url: 'http://mdprofessionalservice.com:3000/emails/',
             data:{
                   name:$scope.name,
                   email:$scope.email,
                   phone: $scope.phone,
                   message: $scope.message
                  }
            //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
          }).then(function(response) {
            $scope.loading = false;
            swal({
                title: "Alright!",
                text: "Your email has been sent!",
                icon: "success",
                button: "OK",
                dangerMode: true
              });
            $scope.name = "";
            $scope.email = "";
            $scope.phone = "";
            $scope.message = "";
 
          });
   
        }

});