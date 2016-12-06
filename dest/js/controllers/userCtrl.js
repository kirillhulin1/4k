app.controller("UserCtrl",["$scope", "$stateParams","$state",function ($scope, $stateParams, $state) {
    console.log($stateParams);
    $scope.index = $stateParams.tab;

    $scope.view = "tile";  //list



    //Функция меняет вывод шин списком или плиткой
    $scope.changeView = function(e) {
        if (!angular.element(e.currentTarget).hasClass("view-settings__view_active")) {
            angular.element(document.querySelectorAll(".view-settings__view_active")[0]).removeClass("view-settings__view_active");
            angular.element(e.currentTarget).addClass("view-settings__view_active");

            $scope.view = ($scope.view == "tile") ? "list" : "tile";
        }
    };


}]);

