app.controller("AkziyaCtrl",["$scope","$stateParams","akziyaData","$state",function ($scope,$stateParams,akziyaData,$state) {
    $scope.akziya = akziyaData;
    $state.current.data.displayName = akziyaData.title;
}]);

