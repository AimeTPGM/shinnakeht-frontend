angular.module('myApp')


.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
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
		},3 : {
			"room" : "104",
			"renter" : "aaa",
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
		}

	}
	$scope.rentInfo = function(index){
		var roomData = $scope.data[index];
		$scope.selectedRoom = roomData.room;
		console.log($scope.data[index]);
		$scope.showMoreInfo = function(){
			return true;
		}
	}


}])