'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('tempApp', ['ui.router'])
.constant('BASE_URL', 'https://appchiever.firebaseio.com/')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('login', {url:'/login', templateUrl:'views/login.html', controller:'LoginCtrl'})

});
