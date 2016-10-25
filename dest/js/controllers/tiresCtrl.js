app.controller("TiresCtrl",["$scope","$stateParams","$state",function($scope, $stateParams,$state){
    $state.current.data.displayName = "Шины " + $stateParams.width + "/" + $stateParams.height + $stateParams.diameter;

    $scope.view = "tile";  //list

    $scope.changeView = function(e) {
        if (!angular.element(e.currentTarget).hasClass("view-settings__view_active")) {
            angular.element(document.querySelectorAll(".view-settings__view_active")[0]).removeClass("view-settings__view_active");
            angular.element(e.currentTarget).addClass("view-settings__view_active");

            $scope.view = ($scope.view == "tile") ? "list" : "tile";
        }
    };
}]);
