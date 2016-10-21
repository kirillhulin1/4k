app.controller('HeaderCtrl', ["newsStructure","$scope","lastNews","$uibModal",function (newsStructure,$scope,lastNews,$uibModal) {
    $scope.setNewsStructure(newsStructure);
    $scope.setLastNews(lastNews);


    $scope.openModalCallMe = function(){
        var modalInstance = $uibModal.open({
            controller: ["$uibModalInstance",function($uibModalInstance){
                this.close = function(){
                    $uibModalInstance.close();
                }
            }],
            controllerAs: "$ctrl",
            templateUrl: 'templates/modal-call-me.html'
        });
    };
    $scope.openModalMorePhones = function(){
        var modalInstance = $uibModal.open({
            controller: ["$uibModalInstance",function($uibModalInstance){
                this.close = function(){
                    $uibModalInstance.close();
                }
            }],
            controllerAs: "$ctrl",
            templateUrl: 'templates/modal-more-phones.html'
        });
    };



}]);
