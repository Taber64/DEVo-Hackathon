

/*
 * This show the recipe based on the ID of the main BB recipe Data along with any appended saved recipe. It shows
 * all recipes
 * For Homepage results & Ideas Page
 */
 angular.module('DevoDemoApp').controller('BBrecipeDetailsController',['$http','$location','$scope', '$rootScope','$window', 'allRecipesData',
 	function($http,$location,$scope, $rootScope, $window, allRecipesData){

 		$scope.retrieveBBSavedData = function(){
      $scope.BBRecipes = allRecipesData.getBBShakes();
      var id = allRecipesData.getRequestRecipeID(); //get the latest passed ID
      console.log("Retrieved ID: " + id);
      angular.forEach($scope.BBRecipes, function (key,value) {
      	
      	if(key.shakeID === id){ // if the ID Matches, this is the Recipe we want to show
          console.log("Shake ID: " + key.shakeID);
      		$scope.BBrecipeToDisplay = key;
          console.log(key);
      		//console.log("Recipe to Display: " + $scope.BBrecipeToDisplay.shakeFlavor);
      	}
      });
    }

    $scope.retrieveBBSavedData();

 }]);

