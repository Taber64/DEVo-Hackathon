 angular.module('DevoDemoApp').controller('createARecipeController',['$http','$location','$scope', '$rootScope','$window', 
 	function($http,$location,$scope, $rootScope, $window){

   	$window.document.title = "Create a Recipe";


   	/*
   	 * When a User Selects a Flavor, it takes them to the next page
   	 */
   	$scope.flavorSelected = function(flavorForm){
   		$scope.submitted = true;
   		console.log("Form Obj" + flavorForm); // nice to log the obj
   		$scope.formInvalid =  true;
   		
   		if(flavorForm.$invalid) {
   			console.log("Invalid: " + flavorForm.$invalid);
   			return false; // The form was not filled properly
   		}
   		else { // the form is valid
   			$location.path('/enhanceyourshake');
   			console.log("Valid: " + flavorForm.$valid);
   			console.log("Selected Flavor: " + $scope.flavorChoice);
   		}
   	};

   	$scope.enhancementSelected = function(enhanceYourShakeForm) {
   		console.log($scope.enhancementChoice);
   		$scope.enhancement = (angular.isDefined($scope.enhancementChoice)) ? $scope.enhancementChoice : ''; //Check if enhancement choice is defined
   		$location.path('/addextras');
   	};


   	$scope.addExtra = function (addExtraForm) {
   		$scope.submitted =  true;
   		console.log("Extras: " + $scope.extras);
   		// angular.forEach($scope.extras, function(key, value){
   		// 	console.log(key);
   		// });
   		if(addExtraForm.$invalid) {
   			return false; // The form was not filled properly - In this case, ng.maxlength threw an error
   		}
   		else{
   			$location.path('/nameyourrecipe');
   		}
   		
   	};

   	$scope.nameyourRecipe = function(nameYourRecipeForm){      
      if(nameYourRecipeForm.$invalid) {
   			return false; // The form was not filled properly
   		}
   		else { // the form is valid
   			console.log("personalized name: " + $scope.personalizedShakeName);
   		}

   	};
 }]);