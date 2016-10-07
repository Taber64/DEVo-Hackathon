
 angular.module('DevoDemoApp').controller('userProfileController',['$http','$location','$scope', '$rootScope','$window', 'allRecipesData',
 	function($http,$location,$scope, $rootScope, $window, allRecipesData){

    $scope.userSavedRecipes = allRecipesData.getUserRecipes();

    console.log($scope.userSavedRecipes);


    /*
     * Find the Recipe to be Previewed and Show it using the passed ID
     */
    $scope.openRecipePreview = function(id){
      allRecipesData.setRequestRecipeID(id); // Save the Id of the recipe to be viewed for later retrieval
      $location.path('/savedrecipes'); // go to the User saved recipes page
    }

 }]);

