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
    $scope.openModalSearch = function(){
        $uibModal.open({
            controller: ["$uibModalInstance","$state",function($uibModalInstance,$state){
                this.close = function(){
                    $uibModalInstance.close();
                };
                this.search = {};

                this.search.text="";
                this.search.theme="";

                this.search = function() {

                        var searchText = this.search.text ? this.search.text : "";
                        var searchSection = this.search.theme ? this.search.theme : "";
                    console.log(searchText,searchSection);
                        $state.go("home.search",{searchText: searchText, searchSection: searchSection});

                }
            }],
            controllerAs: "$ctrl",
            templateUrl: 'templates/modal-search.html'
        });
    };



}]);
