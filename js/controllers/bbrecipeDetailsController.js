/*
 * This show the recipe based on the ID of the main BB recipe Data along with any appended saved recipe. It shows
 * all recipes
 * For Homepage results & Ideas Page
 */
angular.module('DevoDemoApp').controller('BBrecipeDetailsController', ['$http', '$location', '$scope', '$rootScope', '$window', 'allRecipesData',
  function($http, $location, $scope, $rootScope, $window, allRecipesData) {


    $scope.getRecipes = function() {
      var id = allRecipesData.getRequestRecipeID(); //get the latest passed ID
      console.log("Retrieved ID: " + id);
      angular.forEach($scope.BBRecipes, function(key, value) {
        console.log("shake id: " + key.shakeID);
        if (key.shakeID === id) { // if the ID Matches, this is the Recipe we want to show
          console.log("Shake ID: " + key.shakeID);
          $scope.BBrecipeToDisplay = key;
          console.log(key);
          //console.log("Recipe to Display: " + $scope.BBrecipeToDisplay.shakeFlavor);
        }
      });
    }


    $scope.retrieveBBSavedData = function() {
      if (!angular.isDefined(allRecipesData.getBBShakes())) { // if no user Appended Main BB Data
        $http.get('../js/mock/secondShake.json').then(function(results) {
          console.log(results);
          $scope.BBRecipes = results.data;
          console.log("bb recipes: " + $scope.BBRecipes);
          $scope.getRecipes();
        }).catch(function(errors) {
          console.log("Error occurred");
        });
      } else {
        $scope.BBRecipes = allRecipesData.getBBShakes();
        $scope.getRecipes();
      }
    }

    $scope.retrieveBBSavedData();


  }
]);
