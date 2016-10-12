var myApp = angular.module('myApp',[]);
 	myApp.controller('AppCtrl',['$scope', '$http', function ($scope, $http){
 		var refresh = function () {
 		$http.get('/contactlist').success(function(response){
 		 	$scope.contactlist = response;
 		 	$scope.contact ="";
 		 });	
 		};
 		refresh();
 		 $scope.addContact= function () {
 		 	console.log('Controller add contact ' + $scope.contact.name);
 		 	$http.post('/contactlist',$scope.contact).success(function(res){
 		 		console.log(" success in controller:" + res);
 		 		refresh();

 		 	});
 		 };
 		 $scope.remove = function(id) {
 		 	console.log(id + " id to be removed");
 		 	$http.delete("/contactlist/"+id).success(function(res) {
 		 		alert(" item " + res.id + " was deleted");
 		 		refresh();
 		 	});
 		 };
 		 $scope.edit=function(id) {
 		 	
 		 	$http.get("/contactlist/"+id).success(function(res){
 		 		$scope.contact = res;
 		 	});

 		 };
 		 $scope.update = function() {
 		 		var id = $scope.contact._id;
 		 		console.log(id + " of update");
 		 		$http.put('/contactlist/'+ id, $scope.contact).success(function(response){
 		 			refresh();
 		 		});
 		 };
 		 $scope.deselect = function () {
 		 	$scope.contact = "";
 		 }
 	}]);