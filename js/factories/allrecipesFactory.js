
angular.module('DevoDemoApp').factory('allRecipesData', function(){
  var allRecipesData = {};

  allRecipesData.setBBShakes = function(BBShakes){
    console.log("Factory: " + BBShakes);
  	sessionStorage.BBShakes = angular.toJson(BBShakes); 
  }

  allRecipesData.getBBShakes = function(){
  	return angular.fromJson(sessionStorage.BBShakes);
  };

  allRecipesData.setUserRecipes = function(usersavedrecipes){
  	sessionStorage.userSavedRecipes = angular.toJson(usersavedrecipes); 
  }

  allRecipesData.getUserRecipes = function(){
  	return angular.fromJson(sessionStorage.userSavedRecipes);
  }

  allRecipesData.setRequestRecipeID =  function(id){
    sessionStorage.recipeID = angular.toJson(id); 
  }

  allRecipesData.getRequestRecipeID = function(){
    return angular.fromJson(sessionStorage.recipeID);
  };

  return allRecipesData;
});