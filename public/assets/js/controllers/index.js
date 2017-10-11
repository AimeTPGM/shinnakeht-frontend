angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.tenantsInfo = [
		{
				"id": "2",
				"name": "ปานกมล ศรีแก้ว",
				"phone": "0812345678",
				"roomNumber": "103",
				"paymentStatus": "paid"
			},
			{
				"id": "1",
				"name": "สัจจาพร จินดาลิขิต",
				"phone": "0812345678",
				"roomNumber": "101",
				"paymentStatus": "unpaid"
			}
			
		]
		$scope.newTenant = {}

		$scope.addTenant = function(){
			$scope.tenantsInfo.push($scope.newTenant)
		}
	}
]);