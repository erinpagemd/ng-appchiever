angular
.module('appchiever')
.factory('ProfileFactory', function($firebaseArray, BASE_URL, $rootScope) {
  var profilefb = $rootScope.usersfb.child('profile');
  var profileArray = $firebaseArray(profilefb);

  return profileArray;
})
.factory('ActivityFactory', function($firebaseArray, BASE_URL, $rootScope) {
  var activitiesfb = $rootScope.usersfb.child('activities');
  var activityArray = $firebaseArray(activitiesfb);

  return activityArray;
})
.factory('ClassFactory', function($firebaseArray, BASE_URL, $rootScope) {
  var classesfb = $rootScope.usersfb.child('classes');
  var classArray = $firebaseArray(classesfb);

  return classArray;
});
