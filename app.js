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
	 .when('/new', {
		templateUrl: 'views/new.html',
		controller: ''
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
				"date": "10.23.14",
				"title": "hw33",
				"files": [
					{
						"name": "hw33",
						"url": "https://www.dropbox.com/s/l9zvf8laloiscqv/hw33.pdf?dl=0"
					},
				],
				"body": "Complete your hypertonic/hypotonic drawings and hw33. Mr. G. and Mr. O'Neal will be creating a video for hw33 that will be up by 7:30pm. Send any questions on Engrade and we'll go over those questions in the video.",
				"video": ""
			},	
			{
				"date": "10.22.14",
				"title": "hw32",
				"files": [
					{
						"name": "hw32",
						"url": "https://www.dropbox.com/s/qmxizrdf8go9pip/hw32%20-%20Hypertonic%20Hypotonic.pdf?dl=0"
					},
				],
				"body": "Today we went over hypertonic and hypotonic solutions. Don't forget to complete your diagrams if you haven't done so already.",
				"video": "https://www.youtube.com/embed/RjZh6AlKz9g"
			},		
			{
				"date": "10.21.14",
				"title": "hw31",
				"files": [
					{
						"name": "hw31",
						"url": "https://www.dropbox.com/s/mq5vsalzauogd9d/hw31%20-%20Osmosis.pdf?dl=0"
					},
				],
				"body": "Review your notes on osmosis and hw30. Make sure that you have both in your notebook tomorrow...",
				"video": ""
			},
			{
				"date": "10.20.14",
				"title": "hw30",
				"files": [
					{
						"name": "hw30",
						"url": "https://www.dropbox.com/s/uk2fdhsm0j5ibbs/hw30.pdf?dl=0"
					},
				],
				"body": "Send messages on Engrade if you do not understand the questions!",
				"video": ""
			},
			{
				"date": "10.14.14",
				"title": "Letter to Mr. G's cousin",
				"files": [
					{
						"name": "hw26",
						"url": "https://www.dropbox.com/s/xfis786zs5pznfv/hw26.pdf?dl=0"
					},
				],
				"body": "This letter is due on Thursday because we have field day tomorrow. Make sure to describe every organelle in a simple form that a 5 year old will understand. Double check your Engrade account to make sure that all of your grades are accurate!",
				"video": ""
			},
			{
				"date": "10.06.14",
				"title": "Organelles",
				"files": [
					{
						"name": "hw21",
						"url": "https://www.dropbox.com/s/rb5o0y4zo2wnu28/hw21%20-%20Organelles.pdf?dl=0"
					},
				],
				"body": "Tonight's homework is review for your upcoming quiz on cell organelles!",
				"video": ""
			},
			{
				"date": "10.02.14",
				"title": "Organelles",
				"files": [
					{
						"name": "hw18",
						"url": "https://www.dropbox.com/s/0xhap57eycv4nj4/hw18%20-%20Intro%20to%20Cells.pdf?dl=0"
					},
					{
						"name": "hw19",
						"url": "https://www.dropbox.com/s/swcp1kvjgrj1mmx/hw19%20-%20Organelles.pdf?dl=0"
					}
				],
				"body": "Here is your homework for the weekend! I have included homework 18 (for those of you that didn't see it yesterday) and homework 19, due Monday. If you did not submit your signed scantrons and exam corrections, make sure to bring those in on Monday as well.",
				"video": ""
			},
			{
				"date": "10.01.14",
				"title": "Exam 1 Corrections",
				"body": "I have included a video for questions 2, 4, 5, 6, 9, 10, 11, 13, 19, 20! Let me know if you still need help by messaging me on Engrade.",
				"video": "https://www.youtube.com/embed/nkwwY68QOH8"
			},
			{
				"date": "10.01.14",
				"title": "Intro to Cells",
				"files": [
					{
						"name": "hw18",
						"url": "https://www.dropbox.com/s/0xhap57eycv4nj4/hw18%20-%20Intro%20to%20Cells.pdf?dl=0"
					}
				],
				"body": "Open your notebooks and make sure to review your notes. We learned about the many levels of life (cells, tissues, organs, organ systems, organisms, population, community, ecosystem, biosphere) in class today. Don't forget that your test corrections (hw17) is due tomorrow. Be sure that the Scantron and the corrections are both signed by a parent/guardian as well.",
				"video": ""
			},
			{
				"date": "09.29.14",
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
				"date": "09.18.14",
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
				"date": "09.16.14",
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
				"date": "09.15.14",
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
				"date": "10.20.14",
				"title": "Exam 2 Review Sheet",
				"files": [
					{
						"name": "Exam 2 Review Packet",
						"url": "https://www.dropbox.com/s/uo1xjo0u5x5xz9c/hw30%20-%20Exam%202%20Review.pdf?dl=0"
					}
				],
				"body": "This packet is your study sheet for Exam 2. You will be recieving a copy of it in class on Tuesday, but if you'd like to start going over the material, you may download it and begin working on the questions. If you get stuck on any topic, send Mr. G. a message and he will include it in the video to be posted here Tuesday evening.",
				"video": ""
			},	
			{
				"date": "10.01.14",
				"title": "hw18",
				"files": [
					{
						"name": "hw18",
						"url": "https://www.dropbox.com/s/srwr7c69jwou9pl/hw18%20-%20Polaris.pdf?dl=0"
					}
				],
				"body": "DO THIS HOMEWORK IN YOUR NOTEBOOK MY FELLOW EARTH SCIENCE STUDENTS!",
				"video": ""
			},
			{
				"date": "09.30.14",
				"title": "hw17",
				"files": [
					{
						"name": "hw17",
						"url": "https://www.dropbox.com/s/2fv1uhiheyhohjh/hw17.pdf?dl=0"
					}
				],
				"body": "Tonight you will be reading from your Earth Science textbook and answering some questions from the hw17 file. As always, send Mr. G. a message on Engrade if you don't understand something! Test corrections are due on Thursday and must be signed by a parent/guardian. The scantron must also be signed.",
				"video": ""
			},
			{
				"date": "09.23.14",
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
				"date": "09.22.14",
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
				"date": "09.15.14",
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