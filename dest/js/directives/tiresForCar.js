app.directive("tiresForCar",function($http){
    return {
        "restrict": "E",
        "templateUrl": "templates/tires-for-car.html",
        "link": function(scope, element){

            var models = {};
            scope.models = false;

            var years = {};
            scope.years = false;

            var modifications = {};
            scope.modifications = false;

            scope.brands = [];

            $http({
                method: 'GET',
                url: "brands.json"
            }).then(function successCallback(response) {
                scope.brands = response.data;
            }, function errorCallback(response) {
                console.log("Произошла ошибка при загрузке брэндов");
            });

            scope.$watch("brand",function(newValue){
                if (newValue) {
                    scope.models = false;
                    scope.model = "";
                    scope.years = false;
                    scope.modifications = false;
                    scope.year = "";
                    scope.modification = "";
                    $http({
                        method: 'GET',
                        url: newValue.trim()+".json"
                    }).then(function successCallback(response) {
                        scope.models = response.data;
                    }, function errorCallback(response) {
                        console.log("Произошла ошибка при загрузке брэндов");
                    });
                }

            });
            scope.$watch("model",function(newValue){
                if (newValue) {
                    scope.years = false;
                    scope.modifications = false;
                    scope.year = "";
                    scope.modification = "";
                    $http({
                        method: 'GET',
                        url: newValue.trim()+".json"
                    }).then(function successCallback(response) {
                        scope.years = response.data;
                    }, function errorCallback(response) {
                        console.log("Произошла ошибка при загрузке готов выпуска");
                    });
                }

            });
            scope.$watch("year",function(newValue){
                if (newValue) {
                    scope.modifications = false;
                    scope.modification = "";
                    $http({
                        method: 'GET',
                        url: newValue.trim()+".json"
                    }).then(function successCallback(response) {
                        scope.modifications = response.data;
                    }, function errorCallback(response) {
                        console.log("Произошла ошибка при загрузке готов выпуска");
                    });
                }

            });

        }

    }
});