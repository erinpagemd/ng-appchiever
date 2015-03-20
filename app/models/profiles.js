angular
.module('appchiever')
.factory('ProfileFactory', function($firebaseArray, BASE_URL) {
  var usersfb = new Firebase(BASE_URL + '/users');
  var fbArray = $firebaseArray(usersfb);

  function save (user) {
    fbArray.$add(user);
  }

  return {save:save};
});
