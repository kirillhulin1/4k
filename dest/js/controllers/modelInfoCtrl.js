app.controller("ModelInfoCtrl", ["$scope","$state","$stateParams",function ($scope,$state,$stateParams) {
    $scope.model = $stateParams.model;
    $scope.brand = $stateParams.brand;
    $scope.tab = $stateParams.tab;
    $scope.width= $stateParams.width;
    $scope.height= $stateParams.height;
    $scope.diameter= $stateParams.diameter;

    $scope.data.model = $stateParams.width+"/"+$stateParams.height+"R"+$stateParams.diameter;





}]);

