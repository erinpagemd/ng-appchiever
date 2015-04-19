angular
.module('appchiever')
.factory('CollegeFactory', function($firebaseArray){
  var fb = new Firebase('https://college-info.firebaseio.com/')
  var collegeArray = $firebaseArray(fb);

  return collegeArray;
});
