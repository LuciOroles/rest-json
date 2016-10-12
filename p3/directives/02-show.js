angular.module('myApp2', [])
.controller('sCtrl', function($scope, $log, $http) { 
	$http.get("/pagenr").success(function (response) {
        			$log.log(response.page);
        				$scope.my=response.page;
        		});		

});