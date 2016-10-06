/*
 * @Author: Philip Emokpare
 * Description: This module handles the routing of the App 
 * @controller:  Hompage Controller functions
 */

 angular.module('DevoDemoApp').controller('homepageController',['$http','$location','$scope', '$rootScope','$window', 
 	function($http,$location,$scope, $rootScope, $window){

   	//$scope.devTeam = "This is our Team. We rock";

 	$http.get('../js/mock/shakeData.json').then(function(results){
 		console.log(results);
 		$scope.team = results.data;
 		console.log($scope.team);
 		
 	}).catch(function(errors){
 		console.log("Error occurred");
 	});


 }]);