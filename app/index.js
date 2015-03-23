'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('appchiever', ['ui.router', 'firebase'])
.constant('BASE_URL', 'https://appchiever.firebaseio.com')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('login', {url:'/login', templateUrl:'views/login.html', controller:'LoginCtrl'})
    .state('profile', {url:'/profile', templateUrl:'views/profile.html', controller:'ProfileCtrl'})
})
.run(function($rootScope, AuthFactory, BASE_URL){
  $rootScope.auth = AuthFactory;

  $rootScope.auth.$onAuth(function(authData){
    $rootScope.authData = authData;
    if (authData) {
      var fb = new Firebase(BASE_URL);
      $rootScope.usersfb = fb.child('users').child(authData.uid);
      $rootScope.usersfb.on('value', function(data){
        var key = Object.keys(data.val().profile)[0]
        var profile = data.val().profile[key];
        $rootScope.profile = profile;
      })
    }
  })
});
