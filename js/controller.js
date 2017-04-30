angular.module('myApp')
.controller('tableCtrl', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://192.168.0.2:8082/users'
	}).then(function(resp){
		console.log('success!')
		console.log(resp)
		$scope.peopleList = resp.data;

	}).then(function(resp){
	})


})

.controller('myCtrl', ['$scope', '$http', function($scope, $http) {

	$http({
  method: 'GET',
  url: 'http://localhost:8081/getDocuments'
}).then(function successCallback(response) {
    console.log(response)
  }, function errorCallback(response) {
    console.log('err')
  });


}])


.controller('addNewUser', function($scope, $http){
	$scope.user = {};
	$scope.addUser = function(){
		$http({
			method: 'POST',
			url: 'http://192.168.0.2:8082/newOfficer',
			data: $scope.user
		}).then(function(resp){
			console.log(resp)
		}).then(function(resp){
			console.log('fail!!!!!')
			console.log(resp)

		})
	}


})