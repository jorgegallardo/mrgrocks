var app = angular.module('mrgrocks', ['ngRoute']);

app.config(['$sceProvider', function($sceProvider) {
  $sceProvider.enabled(false);
}]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false);

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'NavController'
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

app.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.currentTab = $location.path().substring(1);
  if ($location.path() == '/') {
    $scope.currentTab = 'home';
  }
	$scope.changeTab = function(newTab) {
		$scope.currentTab = newTab;
	};
}]);

app.controller('LEController', ['$scope', 'LEposts', function($scope, LEposts) {
  $scope.LEposts = LEposts.posts;
}]);

app.controller('ESController', ['$scope', 'ESposts', function($scope, ESposts) {
  $scope.ESposts = ESposts.posts;
}]);

app.factory('LEposts', function() {
	return {
		posts: [
			{
				"date": "9.29.14",
				"title": "Characteristics of Living Things",
				"files": [
					{
						"name": "hw16",
						"url": "https://www.dropbox.com/s/zhtb2bqg0j19wr3/hw16%20-%20Characteristics%20of%20Living%20Things.pdf?dl=0"
					}
				],
				"body": "In today's lesson, we went over the characteristics that all living organisms share with each other. Be sure to answer the questions in hw16 in your notebook while you are reading pages 16-22 in your textbook!",
				"video": "https://www.youtube.com/embed/S86ISLWn7dc"
			},
			{
				"date": "9.18.14",
				"title": "Experimental Design",
				"files": [
					{
						"name": "hw11",
						"url": "https://www.dropbox.com/s/gituyixxegskgxn/hw11.pdf?dl=0"
					}
				],
				"body": "Remember, try doing the homework first on your own, leaving blank any questions that you get stuck on. You should only watch the video after you've made an honest attempt at completing the work. Send Mr. G. a message if you're still having trouble!",
				"video": "https://www.youtube.com/embed/zkl10aE93pg"
			},
			{
				"date": "9.16.14",
				"title": "Independent & Dependent Variables",
				"files": [
					{
						"name": "hw9",
						"url": "https://www.dropbox.com/s/n456on2qaekj1cu/hw9%20-%20Scientific%20Method%20Practice.pdf?dl=0"
					}
				],
				"body": "We will be taking a quiz on this homework tomorrow as soon as you walk in! Be sure to send Mr. G. a message on Engrade after you create your account!",
				"video": "https://www.youtube.com/embed/K7Ys26q3KvM"
			},
			{
				"date": "9.15.14",
				"title": "Hypotheses, Control & Experimental Groups",
				"files": [
					{
						"name": "hw5",
						"url": "https://www.dropbox.com/s/uttjj0nttkbfxq6/hw5%20-%20Hypotheses.pdf?dl=0"
					},
					{
						"name": "hw7",
						"url": "https://www.dropbox.com/s/xy1zrpqg09mda7x/hw7%20-%20Hypothesis%2C%20Control%2C%20Experimental%20Groups.pdf?dl=0"
					}
				],
				"body": "Try clicking on the buttons above (labeled hw5 and hw7) to access the homework assignments. If you have any further questions or comments send me a message on Engrade."
			}
		]
	};
});

app.factory('ESposts', function() {
	return {
		posts: [
			{
				"date": "9.23.14",
				"title": "Exam Review",
				"files": [
					{
						"name": "hw14",
						"url": "https://www.dropbox.com/s/rhhu88o6yosu0xd/hw14%20-%20Exam%201%20Practice%20Questions.pdf?dl=0"
					},
					{
						"name": "hw14 Answer Key",
						"url": "https://www.dropbox.com/s/60jqj8d0k3irbbb/hw14%20-%20Answer%20Key.pdf?dl=0"
					}
				],
				"body": "This is the final review sheet for tomorrow's exam on science skills. If you want to check your answers, open the Answer Key by clicking the button above. I was a bit tired when I recorded the video but hopefully it'll help. I went over questions 4, 10, 11, 20, 23, and 24 (not in that order). Good luck tomorrow!",
				"video": "https://www.youtube.com/embed/xrvPeWtJsA4"
			},
			{
				"date": "9.22.14",
				"title": "Rate of Change",
				"files": [
					{
						"name": "hw13",
						"url": "https://www.dropbox.com/s/2pzz0fvuglgckr4/hw13%20-%20Rate%20of%20Change.pdf?dl=0"
					}
				],
				"body": "I forgot to explicitly write out the gradient formula in our class notes but I went over it first thing in the video! I reviewed questions 3, 4, 5, 6, and 7. Don't forget to look at the review packet for your exam (check your Engrades). I will release the video for it tomorrow by only doing the questions that are requested.",
				"video": "https://www.youtube.com/embed/ofdHPP95PCU"
			},
			{
				"date": "9.15.14",
				"title": "Mass, Weight, Density, Volume",
				"files": [
					{
						"name": "hw8",
						"url": "https://www.dropbox.com/s/ljnc05fomvgajju/hw8.pdf?dl=0"
					}
				],
				"body": "This is our first official homework assignment of the new school year! We're taking a quiz tomorrow so make sure that you review mass, volume, and density.",
				"video": "https://www.youtube.com/embed/Q2ZdN-iJ71g"
			}
		]
	};
});

			// {
			// 	"date": "",
			// 	"title": "",
			// 	"files": [
			// 		{
			// 			"name": "",
			// 			"url": ""
			// 		}
			// 	],
			// 	"body": "",
			// 	"video": ""
			// }