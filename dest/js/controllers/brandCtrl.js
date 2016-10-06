app.controller("BrandCtrl",["$scope", "$stateParams","$state","brandData",function ($scope, $stateParams, $state, brandData) {
    $scope.brandName = $stateParams.brand;
    $state.current.data.displayName = $stateParams.brand;

    $scope.brand = brandData;

    $scope.countScoreWidth = function(score){
        var starWidth = 27.4;
        var gapWidth = 4;
        var length = 153;
        var percent = score/5*100;
        return ((percent%20)/20*starWidth + Math.floor(percent/20)*(starWidth+gapWidth))*100/length;
    };
}]);

