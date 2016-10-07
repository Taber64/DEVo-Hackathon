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
    templateUrl: '../partials/login.html',
    controller: 'loginController'
  }).
  when('/homepage',{
  	title: 'Main Homepage',
  	templateUrl: '../partials/homepage.html',
  	controller: 'homepageController'
  }).
  when('/createarecipe',{
  	title: 'Create A Recipe',
  	templateUrl: '../partials/createarecipe.html',
  	controller: 'createARecipeController'
  }).
  when('/enhanceyourshake',{
  	title: 'Enhance Your Shakeology',
  	templateUrl: '../partials/enhanceyourshakeology.html',
  	controller: 'createARecipeController'
  }).
  when('/addextras',{
  	title: 'Add Extras',
  	templateUrl: '../partials/addextras.html',
  	controller: 'createARecipeController'
  })
  .when('/nameyourrecipe',{
  	title: 'Name Your Recipe',
  	templateUrl: '../partials/nameyourrecipe.html',
  	controller: 'createARecipeController'
  })
  .when('/ideas',{
    title: 'Ideas',
    templateUrl: '../partials/ideas.html',
    controller: 'homepageController'
  })
  .when('/user',{
    title: 'Name Your Recipe',
    templateUrl: '../partials/user.html',
    controller: 'userProfileController'
  })
  .when('/reviewyourrecipe',{
    title: 'Name Your Recipe',
    templateUrl: '../partials/reviewyourrecipe.html',
    controller: 'createARecipeController'
  })
  .when('/savedrecipes',{
    title: 'User Saved Recipes',
    templateUrl: '../partials/userrecipedetails.html',
    controller: 'recipeDetailsController'
  })
  .when('/bbrecipe',{
    title: 'Name Your Recipe',
    templateUrl: '../partials/bbrecipedetails.html',
    controller: 'BBrecipeDetailsController'   
  })
  .otherwise({
  	redirectTo: '/homepage'
  });
}])