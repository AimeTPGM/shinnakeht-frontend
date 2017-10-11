angular.module('myApp')

.controller('renterForm', ['$scope', '$http', function($scope, $http){
	
	$scope.addRenter = function(){
		console.log('add!')
		console.log($scope.formData)
	}
}])

.controller('tableInfo', ['$scope', '$http', function($scope, $http) {
	$scope.showMoreInfo = function(){
		return false;
	}
	$scope.data = {
		0 : {
			"room" : "101",
			"renter" : "xxx",
			"info" : [
				{ "water" : [
						{"previous" : "100" },
						{"now" : "100" },
						{"total" : "0" }
					] 
				},
				{ "ele" : [
						{"previous" : "200" },
						{"now" : "100" },
						{"total" : "100" }
					] 
				}
			]
		},1 : {
			"room" : "102",
			"renter" : "yyy",
			"info" : [
				{ "water" : [
						{"previous" : "100" },
						{"now" : "100" },
						{"total" : "0" }
					] 
				},
				{ "ele" : [
						{"previous" : "200" },
						{"now" : "100" },
						{"total" : "100" }
					] 
				}
			]
		},2 : {
			"room" : "103",
			"renter" : "zzz",
			"info" : [
				{ "water" : [
						{"previous" : "300" },
						{"now" : "100" },
						{"total" : "200" }
					] 
				},
				{ "ele" : [
						{"previous" : "2160" },
						{"now" : "1300" },
						{"total" : "0" }
					] 
				}
			]
		},3 : {
			"room" : "104",
			"renter" : "aaa",
			"info" : [
				{ "water" : [
						{"previous" : "1030" },
						{"now" : "10230" },
						{"total" : "0" }
					] 
				},
				{ "ele" : [
						{"previous" : "2100" },
						{"now" : "10540" },
						{"total" : "100" }
					] 
				}
			]
		}

	}
	$scope.rentInfo = function(index){
		var roomData = $scope.data[index];
		$scope.selectedRoom = roomData;
		console.log($scope.data[index]);
		$scope.showMoreInfo = function(){
			return true;
		}
	}


}]);