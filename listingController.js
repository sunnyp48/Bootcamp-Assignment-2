

// lisitng is name of the app............ListingController is the name of the controller
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
     

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */


    $scope.addListing = function() {
      /*
      ($scope.listings.push({code: $scope.code,
       name:$scope.name, 
       coordinates: $scope.coordinates.latitude, 
       coordinates: $scope.coordinates.longitude,
       address: $scope.address}); 
     */

      $scope.listings.push($scope.input);
      $scope.input = {};

      $scope.code= '';
      $scope.name=  '';
      $scope.coordinates.latitude = '';
      $scope.coordinates.longitude = '';
      $scope.address = '';

      
    };

    
    $scope.deleteListing = function(index) {

   
   $scope.listings.splice($scope.listings.indexOf(index),1);

  };
    $scope.showDetails = function(index) {
    $scope.add = $scope.listings[index];

  }
}

 
  ]);
