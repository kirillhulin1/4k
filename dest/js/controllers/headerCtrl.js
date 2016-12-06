app.controller('HeaderCtrl', ["newsStructure","$scope","lastNews","$uibModal","siteData","MessageResource","modals",function (newsStructure,$scope,lastNews,$uibModal,siteData,MessageResource,modals) {
    $scope.setNewsStructure(newsStructure);
    $scope.setLastNews(lastNews);

    $scope.siteData = siteData;

    $scope.openModalCallMe = modals.openModalCallMe;
    $scope.openModalMorePhones = modals.openModalMorePhones;


}]);
