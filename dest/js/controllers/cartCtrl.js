app.controller("CartCtrl",["$scope",function ($scope) {
    $scope.deliveryCost = 0;

    $scope.user.countTotalCartPrice();

}]);

