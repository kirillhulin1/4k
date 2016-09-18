app.controller('PopularTiresCtrl', function ($scope,$http) {
    $scope.season = "Все";
    $scope.diameter = "R13";
    $scope.results = [];
    $scope.search = "R13Все";
    var results = {};

    function updateResults(search) {
        $scope.search = search;
        if (search in results) {
            $scope.results = results[search];
        }
        else {
            $scope.results = [];
            $http({
                method: 'GET',
                url: 'popular.json'
            }).then(function successCallback(response) {
                $scope.results = response.data[search];
                results[search] = response.data[search];
            }, function errorCallback(response) {
                console.log("Произошла ошибка при загрузке данных");
            });
        }

    }

    $scope.$watch("season",function(newData,oldData){

        updateResults($scope.diameter+""+$scope.season);
    });
    $scope.$watch("diameter",function(newData,oldData){

        updateResults($scope.diameter+""+$scope.season);
    });

});