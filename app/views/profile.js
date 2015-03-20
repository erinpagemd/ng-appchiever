angular
.module('appchiever')
.controller('ProfileCtrl', ProfileController)

function ProfileController ($scope) {
  getProfileObj($scope);
};

function getProfileObj ($scope) {
  var firstname = $scope.firstname;
  var lastname = $scope.lastname;
  var schoolname = $scope.schoolname;
  var schoolmascot = $scope.schoolmascot;
  var gradyear = $scope.gradyear;
  var gradcity = $scope.gradcity;
  var gradstate = $scope.gradstate;
  var picurl = $scope.picurl;
  var profileObj = {
    firstname: firstname,
    lastname: lastname,
    schoolname: schoolname,
    schoolmascot: schoolmascot,
    gradyear: gradyear,
    gradcity: gradcity,
    gradstate: gradstate,
    picurl: picurl
  };

  //clear the inputs
  $scope.firstname = null;
  $scope.lastname = null;
  $scope.schoolname = null;
  $scope.schoolmascot = null;
  $scope.gradyear = null;
  $scope.gradcity = null;
  $scope.gradstate = null;
  $scope.picurl = null;

  return profileObj;

}
