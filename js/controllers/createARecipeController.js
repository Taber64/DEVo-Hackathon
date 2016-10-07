 angular.module('DevoDemoApp').controller('createARecipeController',['$http','$location','$scope', '$rootScope','$window', 'recipeData',
 	function($http,$location,$scope, $rootScope, $window, recipeData){

   	$window.document.title = "Create a Recipe";

      /*
       * Whenever the current page is a create a recipe page, it shows the flavor
       * if the user selected one previously
       */
      if($location.path() === "/createarecipe"){
         $scope.flavorChoice = recipeData.getFlavor(); // reassign for maintaining state
      }

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
            recipeData.setFlavor($scope.flavorChoice);
            console.log("Get Saved Flavor from Factory: " + recipeData.getFlavor()); // Get the Saved Flavor
   			$location.path('/enhanceyourshake');
   			console.log("Valid: " + flavorForm.$valid);
   			console.log("Selected Flavor: " + $scope.flavorChoice);
   		}
   	};

   	$scope.enhancementSelected = function(enhanceYourShakeForm) {
   		console.log($scope.enhancementChoice);
   		$scope.enhancement = (angular.isDefined($scope.enhancementChoice)) ? $scope.enhancementChoice : ''; //Check if enhancement choice is defined
   		
         if(angular.isDefined($scope.enhancementChoice)) {
            //data is defined
            $scope.enhancement = $scope.enhancementChoice;
            recipeData.setEnhancement($scope.enhancementChoice);
            console.log("Get enhancement from Factory: " + recipeData.getEnhancement()); // Get the Saved Flavor
         }else {
            //don't set any values
         }
         $location.path('/addextras'); // go to next page, since enhancement is not a required field
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
            recipeData.setExtras($scope.extras);
            console.log("Get Extras: " + recipeData.getExtras()); // Get the Saved Flavor
            var savedExtras = recipeData.getExtras();

            angular.forEach(savedExtras, function(key, value){
               console.log(value);
            });
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