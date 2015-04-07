angular
.module('appchiever')
.controller('ProfileCtrl', function ($firebaseObject, $scope, ProfileFactory, ActivityFactory, ClassFactory, $rootScope) {

  $scope.deleteClass = function(id){
    var classfb = $rootScope.usersfb.child('classes').child(id);
    var classobj = $firebaseObject(classfb);
    classobj.$remove();
  }


  $scope.deleteActivity = function(id){
    console.log(id);
    var activityfb = $rootScope.usersfb.child('activities').child(id);
    var activityobj = $firebaseObject(activityfb)
    activityobj.$remove();
  }

  $scope.update = function(){
    $scope.edituser.$save($scope.edituser);
    $scope.editingprofile = false;
  }

  $scope.editingprofile = false;

  $scope.hovering = false;

  //add ClassFactory to the scope
  $scope.classes = ClassFactory;

  $scope.calculateGpa = function () {
    var klasses = $scope.classes;
    var grades = [];

    _.forEach(klasses, function (klass){
      grades.push(klass.grade);
    });

    var gradeAs = _.filter(grades, function (grade){
      return grade === 'A';
    });

    var gradeBs = _.filter(grades, function (grade){
      return grade === 'B';
    });

    var gradeCs = _.filter(grades, function (grade){
      return grade === 'C';
    });

    $scope.totalgpa = ((4 * gradeAs.length) + (3 * gradeBs.length) + (2 * gradeCs.length)) / grades.length

  }

  //add the class to firebase
  $scope.addClass = function() {
    $scope.classes.$add($scope.class);
    $scope.class = null;
    classFilter($scope.classes);
  }

  //add ActivityFactory to the scope
  $scope.activities = ActivityFactory;

  //add the activity to firebase
  $scope.addActivity = function() {
    $scope.activities.$add($scope.activity);
    $scope.activity = null;
  }

  //add ProfileFactory to the scope
  $scope.user = ProfileFactory;

  function classFilter(klasses){
    $scope.isSeniorClass = _.any(klasses, function(klass){
      return klass.level === "Senior";
    })

    $scope.isJuniorClass = _.any(klasses, function(klass){
      return klass.level === "Junior";
    })

    $scope.isSophomoreClass = _.any(klasses, function(klass){
      return klass.level === "Sophomore";
    })

    $scope.isFreshmanClass = _.any(klasses, function(klass){
      return klass.level === "Freshman";
    })
  }

  $scope.classes.$loaded(function(klasses){
    classFilter(klasses);
  });


  function activityFilter(activities){
    $scope.isSeniorActivity = _.any(activities, function(activity){
      return activity.level === "Senior";
    })

    $scope.isJuniorActivity = _.any(activities, function(activity){
      return activity.level === "Junior";
    })

    $scope.isSophomoreActivity = _.any(activities, function(activity){
      return activity.level === "Sophomore";
    })

    $scope.isFreshmanActivity = _.any(activities, function(activity){
      return activity.level === "Freshman";
    })
  }

  $scope.activities.$loaded(function(activities){
    activityFilter(activities);
  })

  ClassFactory.$watch(function() {
    classFilter(ClassFactory);
  })

  ActivityFactory.$watch(function(event) {
    activityFilter(ActivityFactory);
  })

  $rootScope.$watch('profile', function(val){
    $scope.user = val;
    $scope.edituser = $firebaseObject($rootScope.profilefb);
  })

  //save the profile in firebase
  $scope.save = function () {
    ProfileFactory.$add($scope.user);
    $scope.firsttime = false;
  };

});
