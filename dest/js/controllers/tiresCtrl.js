app.controller("TiresCtrl",["$scope","$stateParams","$state",function($scope, $stateParams,$state){
    $state.current.data.displayName = "Шины " + $stateParams.width + "/" + $stateParams.height + $stateParams.diameter;
}]);
