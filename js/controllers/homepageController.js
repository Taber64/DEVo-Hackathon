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
 		$scope.shakes = results.data;
 		var temp = [], old_attr;

 		angular.forEach($scope.shakes, function(key, value){
            console.log("Key: " + key + " Value: " + value);

            console.log(key.shakeAttributes);

            temp.push(key.shakeAttributes);

            console.log("Temp attrs: " + key.shakeAttributes);

 		});
 		    $scope.attrs = temp[0];
 		    console.log(typeof $scope.attrs);
            console.log("Attrs: " + $scope.attrs);
 		
 	}).catch(function(errors){
 		console.log("Error occurred");
 	});


 }]);