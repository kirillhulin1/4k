app.controller("BrandCtrl",["$scope", "$stateParams","$state","brandData",function ($scope, $stateParams, $state, brandData) {
    $scope.brandName = $stateParams.brand;
    $state.current.data.displayName = $stateParams.brand;

    $scope.brand = brandData;

    $scope.summerModels = [];
    $scope.winterModels = [];
    $scope.allseasonModels = [];
    angular.forEach(brandData.models, function(model){
        if (model.season == "summer") {
            $scope.summerModels.push(model);
        }
        else if (model.season == "winter") {
            $scope.winterModels.push(model);
        }
        else $scope.allseasonModels.push(model);
    });


}]);

