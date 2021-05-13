var app = angular.module("app",[]);

app.controller("mainController", function($scope,$http){
    $scope.tittle="prueba ";


    $scope.sendmail = function(){
        
        //alert($scope.name+" "+$scope.email+" "+$scope.phone);
        //console.log($scope.username);
    
           $http({
             method: 'POST',
             //url: 'http://localhost:3000/emails/', 
             url: 'http://mdprofessionalservice.com:3000/emails/',
             data:{
                   name:$scope.name,
                   email:$scope.email,
                   phone: $scope.phone
                  }
            //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
          }).then(function(response) {
            swal({
                title: "Genial!",
                text: "Tu Email ha sido enviado!",
                icon: "success",
                button: "OK",
                dangerMode: true
              });
     ;
          });
   
        }

});