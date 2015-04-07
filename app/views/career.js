angular
.module('appchiever')
.controller('CareerCtrl', function ($scope, $http) {

  $scope.getCareer = function () {

    //make some request to the ONET API


    var req = {
      method: 'GET',
      url: 'https://services.onetcenter.org/ws/online/occupations/',
      headers: {
        'Authorization': 'Basic YXBwY2hpZXZlcjo3NDc2dndp'
      }
    }

    $http(req).success(function(res){
      console.log('success', res);
    }).error(function(err){
      console.log('error', err);
    })

  }

})
