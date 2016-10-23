app.controller("CarsCtrl",["carsData","$scope",function (carsData, $scope) {
    $scope.brands = carsData;
}]);

