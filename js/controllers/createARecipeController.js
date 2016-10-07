 angular.module('DevoDemoApp').controller('createARecipeController',['$http','$location','$scope', '$rootScope','$window', 'recipeData', 'allRecipesData',
 	function($http,$location,$scope, $rootScope, $window, recipeData, allRecipesData){

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


      /*
       * Saving the User Created Recipe in both the actual main BB Shakes JSON 
       * and the user JSON which will be shown only on a User Page
       */
      $scope.saveYourRecipe = function(){

        console.log("Here saveYourRecipe");

         // var temp_userSavedRecipes = {
         //  flavorChoice: recipeData.getFlavor(),
         //  enhancement: recipeData.getEnhancement(),
         //  extras: recipeData.getExtras(),
         //  personalizedShakeName: recipeData.getpersonalizedName(),
         //  calories: recipeData.calories(),
         //  nutritionFacts: recipeData.nutritionFacts()
         // }

         var temp_userSavedRecipes = {};
         $scope.userCreatedRecipes = [];

         $http.get('../js/mock/secondShake.json').then(function(results){
            console.log(results);
            $scope.BBshakes = results.data;
            $scope.len = $scope.BBshakes.length + 1; //increment the id
             console.log("Len 1: " + $scope.len);

            temp_userSavedRecipes = {
                "shakeID" : $scope.len, // a number as id
                "shakeType" : $scope.flavorChoice, //shaketype i.e vanilla, choc etc
                "shakeImg" : "https://img1.beachbodyimages.com/beachbody/image/upload/c_crop,h_385,w_770,x_0,y_0/v1475711719/Oatmeal_Raisin_Cookie_Shakeology.jpg",
                "shakeName": $scope.personalizedShakeName,
                "shakeAddons": $scope.extras,
                "shakeNutrition": {
                  "calories": $scope.calories,
                  "fat": "6",
                  "satFat": "0",
                  "cholesterol": "5",
                  "sodium": "387",
                  "carbs": "31",
                  "fiber": "6",
                  "sugars": "12",
                  "protein": "19"
                },
                "shakeXX": ["1 Protein", "½ Single Serving Snack", "1 Fruit"],
                "shakeX3": ["½ Carb", "1 Protein", ""],
                "shakeBB": ["1 Protein Liquid","1 Carb Liquid","1 Balanced Liquid"],
                "shakeContainer": ["1 Yellow", "1 Red", ""],
                "enhancement": $scope.enhancementChoice
              }
            $scope.BBshakes.push(temp_userSavedRecipes); // hold the values

            console.log("Added the temp: " + $scope.BBshakes); // show incremented obj

            allRecipesData.setBBShakes($scope.BBshakes); // Set the main Obj to be retrieved later

            $scope.userCreatedRecipes.push(temp_userSavedRecipes); // save Recipe for User Page Only

            console.log($scope.userCreatedRecipes);

            allRecipesData.setUserRecipes($scope.userCreatedRecipes); // Set user Recipes

            // console.log(temp_userSavedRecipes.shakeID);

            // var modified_UserShakesData = $scope.createMockObj($scope.BBshakes.length);
            // console.log(modified_UserShakesData);
            //we are going to save the Original BB Shakes recipe
           }).catch(function(errors){
            console.log("Error occurred");
         });
         


         $location.path('/user'); //go to the user profile - Loggedin Assumed

          console.log("Temp User Saved Recipe: " + temp_userSavedRecipes);
      };
 }]);