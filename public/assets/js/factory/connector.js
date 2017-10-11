angular.module('shinnakeht')
.factory('APIsConnector', function($http, BackendPath) {

	var connector = {};
	connector.getAllTenants = function(){
		return $http.get(BackendPath.path+'/')
	    .then(function(resp){
	      return resp;
	    }, function(resp){
	      return resp;
	    })
	}
	return connector;

})