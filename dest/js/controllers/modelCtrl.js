app.controller('ModelCtrl', function ($scope, $stateParams) {
    $scope.model = $stateParams.model;
    $scope.brand = $stateParams.brand;
    $scope.tab = $stateParams.tab;

    switch ($scope.tab) {
        case("description"): {
            $scope.index = 2;
            break;
        }
        case("comments"): {
            $scope.index = 4;
            break;
        }
        default: {
            $scope.index = 0;
        }
    }

});
