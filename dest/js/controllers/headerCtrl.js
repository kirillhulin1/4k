app.controller('HeaderCtrl', ["newsStructure","$scope","lastNews",function (newsStructure,$scope,lastNews) {
    $scope.setNewsStructure(newsStructure);
    $scope.setLastNews(lastNews);

}]);
