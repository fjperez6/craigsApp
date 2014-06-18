'use strict';


// Declare app level module which depends on filters, and services
(function () {
	var app = angular.module('craigsApp', ['tableRows']);

	app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];

    $http.get('js/categories.json').success(function(data){
      store.products = data;
    });
  }]);
})();