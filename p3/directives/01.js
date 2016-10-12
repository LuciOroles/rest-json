angular.module('myApp', [])
    .controller('pCtrl', function($scope, $log, $http) {
        
        $scope.getN = function () {
        		$log.log("x");
        		$http.get("/pagenr").success(function (response) {
        			$log.log(response.page);
        			$scope.page = response.page ;
        		});		

        }();
        $scope.writeN = function () {
        	 	$http.put('/pagenr/'+ $scope.page ).success(function(res){
        	 		$log.log(">>> it was successfull");
 		 		});
		}
        
    })
    .directive('counter', function($log) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var incr = parseInt(attrs.incr || 1),
                    val = 0;
                el.bind('click', function() {
                    el.html(val += incr);
                });
            }
        }
    }).directive('counterv', function($log) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {

                el.bind('click', function() {



                    scope.$apply(function() {
                        var t = parseInt(scope.page, 10);
                        t += parseInt(attrs.incr);
                        scope.page = t;
                    });

                    scope.writeN(); //update the json file too

                    $log.log(attrs.incr);
                    $log.log(scope.page);
                });

            }
        }
    });
