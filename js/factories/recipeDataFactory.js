
angular.module('DevoDemoApp').factory('recipeData', function(){
  var recipeData = {};

  recipeData.flavors = [];
  recipeData.enhancement = []; 
  recipeData.extras = [];

  /*
   * The Set & Get Use Both Session storage and Angular Services in case the user refreshes the page
   * so the state of the data is maintained
   */
  recipeData.setFlavor = function(flavor){
  	sessionStorage.flavor = angular.toJson(flavor); //save to session storage
  	//recipeData.flavors = flavor;//only one variable needed
  	recipeData.flavors = flavor;
  }

  recipeData.setEnhancement = function(enhancement){
  	sessionStorage.enhancement = angular.toJson(enhancement); 
  	//recipeData.enhancement.push(enhancement);
  }

  recipeData.setExtras = function(extras){
  	sessionStorage.extras = angular.toJson(extras); 
  	//recipeData.extras.push(extras);
  }

  recipeData.getExtras = function(){
  	return angular.fromJson(sessionStorage.extras);
  	//return recipeData.extras;
  }

  recipeData.getFlavor = function () {
  	console.log("Factory flavor: " + angular.fromJson(sessionStorage.flavor));
    return angular.fromJson(sessionStorage.flavor);
  //return recipeData.flavors; //normal service
  }

  recipeData.getEnhancement = function () {
  	return angular.fromJson(sessionStorage.enhancement);

  	//return recipeData.enhancement; // normal service
  }

  recipeData.setPersonalizedName = function(name){
    sessionStorage.personalizedName = angular.toJson(name); 
  }

  recipeData.getPersonalizedName = function(){
    return angular.fromJson(sessionStorage.personalizedName);
  }

  recipeData.setCalories = function(){
  	//We are setting the values directly here since we have no facts
  	var calories = 150;
  	sessionStorage.calories = angular.toJson(calories); 
  }

  recipeData.getCalories = function(){
  	return angular.fromJson(sessionStorage.calories);
  };

  recipeData.setNutritionFacts = function(){
  	//We are setting the values directly here since we have no facts
  	var nutritionFacts = "Protein 30g, Carbs 40g, Fat 9g, Sodium 20g, Fiber 15g";
  	sessionStorage.nutritionFacts = angular.toJson(nutritionFacts); 
  }

  recipeData.getNutritionFacts = function(){
  	return angular.fromJson(sessionStorage.nutritionFacts);
  };


  return recipeData;
});