var app = angular.module('projectApp', ['ui.bootstrap', 'ngRoute'], ['$interpolateProvider',
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('{%');
        $interpolateProvider.endSymbol('%}');
    }
]);

app.run(['$rootScope', '$http',
    function($rootScope, $http) {
        $rootScope.welcome = "Welcome to project!";
    }
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: ''
            });

        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
    }
]);
