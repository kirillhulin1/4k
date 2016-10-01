app.controller("NewsCtrl", ["$scope","newsData",function ($scope,newsData) {
    $scope.news = newsData;
}]);
