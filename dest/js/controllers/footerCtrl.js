app.controller("FooterCtrl", ["$scope",function ($scope) {
    $scope.hideFixedPanel = function(e){
        e.preventDefault();
        $(".bottom-panel").addClass("bottom-panel_closed");
        $(".footer").css("paddingBottom","10px");
    };
    $scope.showFixedPanel = function(e){
        e.preventDefault();
        $(".bottom-panel").removeClass("bottom-panel_closed");
        $(".footer").css("paddingBottom","44px");
    };
}]);
