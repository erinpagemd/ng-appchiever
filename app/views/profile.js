angular
.module('appchiever')
.controller('ProfileCtrl', function ($scope, ProfileFactory, $rootScope) {

  $rootScope.$watch('profile', function(val){
    console.log('profile changed', val);
    $scope.user = val;
  })


  console.log('profile');


  //save the profile in firebase
  $scope.save = function () {
    $scope.user.$add($scope.user);
  };

});
