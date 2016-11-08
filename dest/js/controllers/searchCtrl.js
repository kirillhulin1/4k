app.controller("SearchCtrl",["$stateParams","$state","$scope","searchData",function($stateParams,$state,$scope,searchData){
    console.log($stateParams);

    $scope.results = [];
    var i; //вспомогательная переменная для циклов

    if ($stateParams.searchSection) {
        switch ($stateParams.searchSection) {
            case "tire": {
                $state.current.data.displayName = "Поиск по моделям шин";
                for (i=0; i<searchData.length; i++) {
                    searchData[i].searchSection = "tire";
                    $scope.results.push(searchData[i]);
                }
                break;
            }
            case "car": {
                $state.current.data.displayName = "Поиск по автомобилям";
                for (i=0; i<searchData.length; i++) {
                    searchData[i].searchSection = "car";
                    $scope.results.push(searchData[i]);
                }
                break;
            }
            case "size": {
                $state.current.data.displayName = "Поиск по типоразмеру шин";
                for (i=0; i<searchData.length; i++) {
                    searchData[i].searchSection = "size";
                    $scope.results.push(searchData[i]);
                }
                break;
            }
            case "article": {
                $state.current.data.displayName = "Поиск статей";
                for (i=0; i<searchData.length; i++) {
                    searchData[i].searchSection = "article";
                    $scope.results.push(searchData[i]);
                }
                break;
            }
            case "all": {
                $state.current.data.displayName = "Поиск";
                for (i=0; i<searchData[0].tire.length; i++) {
                    searchData[0].tire[i].searchSection = "tire";
                    $scope.results.push(searchData[0].tire[i]);
                }
                for (i=0; i<searchData[0].size.length; i++) {
                    searchData[0].size[i].searchSection = "size";
                    $scope.results.push(searchData[0].size[i]);
                }
                for (i=0; i<searchData[0].car.length; i++) {
                    searchData[0].car[i].searchSection = "car";
                    $scope.results.push(searchData[0].car[i]);
                }
                for (i=0; i<searchData[0].article.length; i++) {
                    searchData[0].article[i].searchSection = "article";
                    $scope.results.push(searchData[0].article[i]);
                }
                break;
            }
        }
    }

    $scope.search = {};

    $scope.search.text = $stateParams.searchText || "";
    $scope.search.theme = $stateParams.searchSection || "";

    $scope.search = function() {
        if ($scope.searchForm.$valid) {
            var searchText = $scope.search.text ? $scope.search.text : "";
            var searchSection = $scope.search.theme ? $scope.search.theme : "";
            $state.go("home.search",{searchText: searchText, searchSection: searchSection});
        }
    }
}]);

