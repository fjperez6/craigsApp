'use strict';

/* Controllers */

(function () {
	var app = angular.module('angularFireController', []);
  
  app.controller('StoreController', ['$scope', 'StoreServices', function($scope, service){
    
    //service.setLisToScope();
    /*
    $scope.newItem = {};

    $scope.addNewItem = function() {
      itemService.addItem($scope.newItem);
      $scope.newItem = {};
    };
    $scope.deleteItem = function(id){
      itemService.deleteItem(id);
    };
  }
    $scope.removeAll = function() {
      itemService.removeAll();
    };
    */
    service.$bind($scope, "products");
    /*
    $scope.updateList = function(item) {
      var now = new Date();
      $scope.products.hrcsba.dates.pop();   
      $scope.products.hrcsba.dates.unshift(now);   
    };
    */
  }]);
})();