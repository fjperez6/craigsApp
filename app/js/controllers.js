'use strict';

/* Controllers */

(function () {
	var app = angular.module('angularFireController', []);
  
  app.controller('StoreController', ['$scope', 'StoreServices', function($scope, service){
    
    //Need to seperate the updatelist function from cntrl to srvc
    service.$bind($scope, "products");
    $scope.updateList = function(item) {
      var now = new Date();
      //alert(item + now);
      $scope.products.$add({category: item, date: now});   
    };
  }]);
})();