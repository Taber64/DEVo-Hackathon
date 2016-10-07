
angular.module('DevoDemoApp').factory('recipeData', function(){
  var recipeData = {};

  recipeData.flavors = [];
  recipeData.enhancement = []; 
  recipeData.extras = [];

  recipeData.setFlavor = function(flavor){
  	recipeData.flavors = flavor;//only one variable needed
  }

  recipeData.setEnhancement = function(enhancement){
  	recipeData.enhancement.push(enhancement);
  }

  recipeData.setExtras = function(extras){
  	recipeData.extras.push(extras);
  }

  recipeData.getExtras = function(extras){
  	return recipeData.extras;
  }

  recipeData.getFlavor = function () {
  	return recipeData.flavors;
  }

  recipeData.getEnhancement = function () {
  	return recipeData.enhancement;
  }

  return recipeData;
});