app.controller("mainCtrl", ['$scope', '$timeout', function ($scope, $timeout) {
    var a = [1,2,5,76,4];
    /*for (var i = 0; i < 20; i++) {
        a[i] = i;
    }*/
    $scope.numbers = a;
}]);
