 angular.module('DevoDemoApp').controller('createARecipeController',['$http','$location','$scope', '$rootScope','$window', 'recipeData',
 	function($http,$location,$scope, $rootScope, $window, recipeData){

   	$window.document.title = "Create a Recipe";

      var currentPage = $location.path(); //Get the Page's current location

      /*
       * Whenever the current page is a create a recipe page, it shows the flavor
       * if the user selected one previously
       */
      if(currentPage === "/createarecipe" || currentPage === '/reviewyourrecipe'){
        $scope.flavorChoice = recipeData.getFlavor(); // reassign for maintaining state
      }

      if(currentPage === "/enhanceyourshake" || currentPage === '/reviewyourrecipe'){
        $scope.enhancementChoice = recipeData.getEnhancement(); // reassign for maintaining state
      }

      if(currentPage === "/addextras" || currentPage === '/reviewyourrecipe'){
         console.log("Current Page is Extras: ");
         var savedExtras = recipeData.getExtras(); // reassign for maintaining state

         $scope.extras = {};

         angular.forEach(savedExtras, function(key, value){
            // console.log("In Loop ");
            // console.log(key);
            if(value === "extra1") {
               $scope.extras.extra1 = key;
               //console.log("value: " + value + " key: " + $scope.extras.extra1);
            }
            if(value === "extra2"){
               $scope.extras.extra2 = key;
            }

            if(value === "extra3"){
               $scope.extras.extra3 = key;
            }

         });
      }

      if(currentPage === '/nameyourrecipe' || currentPage === '/reviewyourrecipe'){
         $scope.personalizedShakeName = recipeData.getPersonalizedName();
      }

      if(currentPage === '/reviewyourrecipe'){//show this only in the reviewPage
         $scope.nutritionFacts = recipeData.getNutritionFacts();
         console.log($scope.nutritionFacts);
         
         $scope.calories = recipeData.getCalories();
         console.log($scope.calories);
      }

   	/*
   	 * When a User Selects a Flavor, it takes them to the next page
   	 */
   	$scope.flavorSelected = function(flavorForm){
   		$scope.submitted = true;
         // console.log("Form Obj" + flavorForm);
         // console.log("Invalid: " + $scope.flavorChoice);
   		// console.log("Form Obj" + flavorForm);

   		if($scope.flavorChoice === undefined || $scope.flavorChoice.length < 3) { 
         //flavorForm.$invalid - NOT USED since we are maintaining state with SessionStorage /Service, 
         //so the input form thinks there is data saved

            $scope.frmInvalid = true;
            console.log($scope.frmInvalid);
   			
   			return false; // The form was not filled properly
   		}
   		else { // the form is valid
            recipeData.setFlavor($scope.flavorChoice);
            console.log("Get Saved Flavor from Factory: " + recipeData.getFlavor()); // Get the Saved Flavor
   			$location.path('/enhanceyourshake');
   			// console.log("Valid: " + flavorForm.$valid);
   			// console.log("Selected Flavor: " + $scope.flavorChoice);
   		}
   	};

   	$scope.enhancementSelected = function(enhanceYourShakeForm) {
   		console.log($scope.enhancementChoice);
   		$scope.enhancement = (angular.isDefined($scope.enhancementChoice)) ? $scope.enhancementChoice : ''; //Check if enhancement choice is defined
   		
         if(angular.isDefined($scope.enhancementChoice)) {
            //data is defined
            $scope.enhancement = $scope.enhancementChoice;
            recipeData.setEnhancement($scope.enhancementChoice);
           // console.log("Get enhancement from Factory: " + recipeData.getEnhancement()); // Get the Saved Flavor
         }else {
            //don't set any values
         }
         $location.path('/addextras'); // go to next page, since enhancement is not a required field
   	};


   	$scope.addExtra = function (addExtraForm) {
         if(angular.isDefined($scope.extras)) {
            recipeData.setExtras($scope.extras);
         }
          var savedExtras = recipeData.getExtras(); // reassign for maintaining state

         angular.forEach(savedExtras, function(key, value){
            $scope.extras = {};
            console.log(key);
            if(value === "extra1") {
               $scope.extras.extra1 = key;
            }
            if(value === "extra2"){
               $scope.extras.extra2 = key;
            }

            if(value === "extra3"){
               $scope.extras.extra3 = key;
            }

         });
         $location.path('/nameyourrecipe');
   		
   	};

   	$scope.nameyourRecipe = function(nameYourRecipeForm){    
         $scope.submitted = true;  
         if(nameYourRecipeForm.$invalid) {
   			return false; // The form was not filled properly
   		}
   		else { // the form is valid
   			console.log("personalized name: " + $scope.personalizedShakeName);
            recipeData.setPersonalizedName($scope.personalizedShakeName);
            recipeData.setCalories(); // set the sample Data - no values passed
            recipeData.setNutritionFacts();

            $location.path('/reviewyourrecipe');

   		}

   	};
 }]);