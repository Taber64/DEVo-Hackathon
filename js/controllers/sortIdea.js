angular.module('DevoDemoApp').controller('userProfileController', ['$http', '$location', '$scope', '$rootScope', '$window', 'allRecipesData',
  function($http, $location, $scope, $rootScope, $window, allRecipesData) {
    
    function Ctrl1($scope) {
      $scope.sortOptions = ["Price", "Rating"];
      $scope.sort = "Price";
      $scope.setSort = function(type) { $scope.sort = type.toLowerCase(); };
      $scope.availableRestaurants = [{ name: "Chevy's", rating: 6, price: 6 },
        { name: "Burger King", rating: 2, price: 1 },
        { name: "Red Robin", rating: 4, price: 4 },
        { name: "Carl's Jr", rating: 5, price: 2 }
      ];
    }

  }
]);
