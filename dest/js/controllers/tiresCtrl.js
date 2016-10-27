app.controller("TiresCtrl",["$scope","$stateParams","$state","sizeData",function($scope, $stateParams, $state, sizeData){
    $state.current.data.displayName = "Шины " + $stateParams.width + "/" + $stateParams.height + $stateParams.diameter;

    $scope.view = "tile";  //list



    //Функция меняет вывод шин списком или плиткой
    $scope.changeView = function(e) {
        if (!angular.element(e.currentTarget).hasClass("view-settings__view_active")) {
            angular.element(document.querySelectorAll(".view-settings__view_active")[0]).removeClass("view-settings__view_active");
            angular.element(e.currentTarget).addClass("view-settings__view_active");

            $scope.view = ($scope.view == "tile") ? "list" : "tile";
        }
    };

    $scope.tires = sizeData;

    angular.forEach($scope.tires, function(tire){
        tire.amount = (tire.available >= 4) ? 4 : tire.available;
    });

    $scope.sortParameter = "price";
    $scope.sortOrder = true;  //по возрастанию

    $scope.changeOrder = function() {
        $scope.tires.sort(function(a,b){
            if ($scope.sortOrder) {
                return a[$scope.sortParameter] - b[$scope.sortParameter];
            }
            else {
                return b[$scope.sortParameter] - a[$scope.sortParameter];
            }
        })
    };

    $scope.addToCart = function(tire){
        var item = {
            "name": tire.name,
            "brand": tire.brandName,
            "width": tire.width,
            "height": tire.height,
            "diameter": tire.diameter,
            "loadIndex": tire.loadIndex,
            "speedIndex": tire.speedIndex,
            "price": tire.price,
            "quantity": tire.amount,
            "season": tire.season,
            "picture": tire.picture,
            "id": tire.id,
            "available": tire.available
        };
        $scope.user.cartItems.push(item);
    };

}]);
