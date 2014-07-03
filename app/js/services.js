'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
(function () {
	var app = angular.module('angularFireService', ["firebase"]);
  
  app.factory('StoreServices', ['$firebase', function($firebase){
    var _url = 'https://berlin-label-01.firebaseio.com/categories';
    var _ref = new Firebase(_url);
    return $firebase(_ref);
/*
    return{
      setListToScope: function(_ref) {
        $firebase(_ref);
      },
    }

      addItem: function(item){
        _ref.push(item);
      },
      removeAll: function(){
        _ref.remove();
      },
      deleteItem: function(id){
        var itemRef = new Firebase(_url + '/' + id);
        itemRef.remove();
      }
    }
*/
//    var Ref = new Firebase("https://berlin-label-01.firebaseio.com/categories");
//    return $firebase(Ref);
  }]);
})();