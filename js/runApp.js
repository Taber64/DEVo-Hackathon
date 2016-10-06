/*
 * @Author: Philip Emokpare
 * Description: This module handles the running of the App
 * 
 */
angular.module('DevoDemoApp').run(['$rootScope', '$location', function($rootScope, $location){
     $rootScope.$on('$routeChangeStart', function (event, next, current){

     	// Authentication can come in here

         //Default routing. make it Login         
     	  if(angular.isDefined(next.$$route)){
     	  	var nextUrl = '/homepage';
     	  }
     	  else{
     	  	var nextUrl = next.$$route.originalPath;

     	  	if(nextUrl === '/login'){ //
     	  		$location.path('login');
     	  	}else {
     	  		$location.path("/homepage"); // defaults to homepage
     	  	}
     	  }
     });

}]);


