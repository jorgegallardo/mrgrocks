var app = angular.module('mrgrocks', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false);

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/livingenvironment', {
      templateUrl: 'views/livingenvironment.html',
      controller: 'LEController'
    })
    .when('/earthscience', {
      templateUrl: 'views/earthscience.html',
      controller: 'ESController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('NavController', ['$scope', function($scope) {
	$scope.currentTab = 'home';
	$scope.changeTab = function(newTab) {
		$scope.currentTab = newTab;
	};
}]);

app.controller('HomeController', function() {

});

app.controller('LEController', function() {

});

app.controller('ESController', function() {

});