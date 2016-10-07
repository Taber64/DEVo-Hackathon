/*
 * @Authors: Philip Emokpare, Sam Richardson, Kevin Taber
 * Description: This module handles the routing of the App 
 * @controller:  Hompage Controller functions
 */

 angular.module('DevoDemoApp').controller('homepageController',['$http','$location','$scope', '$rootScope','$window', 'allRecipesData',
 	function($http,$location,$scope, $rootScope, $window, allRecipesData){

   	//$scope.devTeam = "This is our Team. We rock";

 	$http.get('../js/mock/shakeData.json').then(function(results){
 		console.log(results);
 		$scope.shakes = results.data;
 	}).catch(function(errors){
 		console.log("Error occurred");
 	});

  /*
   * Shows the Search Feedback text if the characters typed is more
   * than 3 or hide it when its 0
   */
  $scope.searchShakes = function(str){
  	if(str.length > 3) {
  		$scope.searchInProgress = true;
  		$scope.searchTerm = str;
  	}else {
  		$scope.searchInProgress = false;
  	}
  	
  	//console.log("String Being Searched: " + str);
  }

  /*
   * Find the Recipe to be Previewed and Show it using the passed ID
   */
  $scope.openRecipePreview = function(id){
    allRecipesData.setRequestRecipeID(id); // Save the Id of the recipe to be viewed for later retrieval
    $location.path('/bbrecipe'); // go to the User saved recipes page
  }


  //THE CODE BELOW WORKS FOR shakeName Search
 	// $http.get('../js/mock/shakeData.json').then(function(results){
 	// 	console.log(results);
 	// 	$scope.shakes = results.data;
 	// 	var 
 	// 	  temp = [], 
 	// 	  stored_attrs = [], 
 	// 	  the_shakes = $scope.shakes;
 	// 	angular.forEach($scope.shakes, function(key, value){
  //     console.log("Key: " + key + " Value: " + value);

  //     console.log(key.shakeAttributes);
  //     for(x in key.shakeAttributes) {
  //     	console.log(key.shakeAttributes[x].shakeName);
  //     	var y = key.shakeAttributes[x].shakeName;
  //     	temp.push(y);
  //     }
  //     // 
 	// 	});
 	// 	    $scope.attrs = temp;
 	// 	    console.log($scope.attrs);
 		
 	// }).catch(function(errors){
 	// 	console.log("Error occurred");
 	// });



 }]);