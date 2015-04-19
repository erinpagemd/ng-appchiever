angular
.module('appchiever')
.controller('CollegeCtrl', function ($scope, CollegeFactory) {

  $scope.getColleges = function () {
    console.log('Clicked!')
    console.log(CollegeFactory)
    console.log('printed??')

    $scope.colleges = CollegeFactory;

    
  };


});
