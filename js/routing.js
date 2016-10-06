/*
 * @Author: Philip Emokpare
 * Description: This module handles the routing of the App 
 * 
 */

'use strict';

angular.module('DevoDemoApp', ['ngRoute']).config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true); // this is important for state routing using no Hashbang

  $routeProvider
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'loginController'
  }).
  when('/homepage',{
  	title: 'Main Homepage',
  	templateUrl: 'homepage.html',
  	controller: 'homepageController'
  }).
  otherwise({
  	redirectTo: '/homepage'
  });
}])