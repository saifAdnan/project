var app = angular.module('projectApp', ['ui.bootstrap', 'ngRoute'], ['$interpolateProvider',
    function($interpolateProvider) {
        $interpolateProvider.startSymbol(CONFIG.startSymbol);
        $interpolateProvider.endSymbol(CONFIG.endSymbol);
    }
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'mainCtrl'
            });

        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
    }
]);

app.run(['$rootScope', '$http',
    function($rootScope, $http) {
       //
    }
]);