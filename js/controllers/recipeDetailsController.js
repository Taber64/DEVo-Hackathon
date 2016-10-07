
 angular.module('DevoDemoApp').controller('recipeDetailsController',['$http','$location','$scope', '$rootScope','$window', 'allRecipesData',
 	function($http,$location,$scope, $rootScope, $window, allRecipesData){

 		$scope.retrievetheUserSavedData = function(){
      $scope.user__SavedRecipes = allRecipesData.getUserRecipes();
      var id = allRecipesData.getRequestRecipeID(); //
      console.log("Retrieved ID: " + id);
      angular.forEach($scope.user__SavedRecipes, function (key,value) {
      	// console.log("Shake ID: " + key.shakeID);
      	// console.log(key);
      	if(key.shakeID === id){ // if the ID Matches, this is the Recipe we want to show
      		$scope.recipeToDisplay = key;
      		console.log("Recipe to Display: " + $scope.recipeToDisplay.shakeFlavor);
      	}
      });
    }

    $scope.retrievetheUserSavedData();

 }]);

