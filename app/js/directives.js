'use strict';

/* Directives */
(function () {
	var app = angular.module("tableRows", []);
  app.directive("headerRow", function() { 
    return {
      restrict: "E",
      templateUrl: "directives/header-row.html"
    };
  });
  app.directive("entryRow", function() { 
    return {
      restrict: "E",
      templateUrl: "directives/entry-row.html"
    };
  });
})();