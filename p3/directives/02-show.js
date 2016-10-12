angular.module('myApp2', [])
.controller('sCtrl', function($scope, $log, $http) { 
	$http.get("https://shrouded-inlet-88967.herokuapp.com/pagenr").success(function (response) {
        			$log.log(response.page);
        				$scope.my=response.page;
        		});		

});