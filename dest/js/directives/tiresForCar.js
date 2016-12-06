app.directive("tiresForCar",["$http","$state","siteData",function($http,$state,siteData){
    return {
        "restrict": "E",
        "templateUrl": "templates/tires-for-car.html",
        "link": function(scope, element){

            //Переменные для кэширования данных, приходящих по http
            var models = {};
            var years = {};
            var modifications = {};

            //Список моделей, соответствующих текущему брэнду. False если брэнд не выбран
            scope.models = false;
            //Список годов выпуска, соответствующих текущей модели. False если модель не выбрана
            scope.years = false;
            //Список модификаций, соответствующих текущему году выпуска. False если год не выбрана
            scope.modifications = false;

            scope.brands = [];

            scope.siteData = siteData;

            //Получение списка брэндов при загрузке приложения
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
                    if (newValue.trim() in models) {
                        scope.models = models[newValue.trim()];
                        if (scope.models.length == 1) {
                            scope.model = scope.models[0];
                        }
                    }
                    else {
                        $http({
                            method: 'GET',
                            url: newValue.trim()+".json"
                        }).then(function successCallback(response) {
                            scope.models = response.data;
                            models[newValue.trim()] = response.data;
                            if (response.data.length == 1) {
                                scope.model = response.data[0];
                            }
                        }, function errorCallback(response) {
                            console.log("Произошла ошибка при загрузке брэндов");
                        });
                    }

                }

            });
            scope.$watch("model",function(newValue){
                if (newValue) {
                    scope.years = false;
                    scope.modifications = false;
                    scope.year = "";
                    scope.modification = "";
                    if (newValue.trim() in years) {
                        scope.years = years[newValue.trim()];
                        if (scope.years.length == 1) {
                            scope.year = scope.years[0];
                        }
                    }
                    else {
                        $http({
                            method: 'GET',
                            url: newValue.trim()+".json"
                        }).then(function successCallback(response) {
                            scope.years = response.data;
                            years[newValue.trim()] = response.data;
                            if (response.data.length == 1) {
                                scope.year = response.data[0];

                            }
                        }, function errorCallback(response) {
                            console.log("Произошла ошибка при загрузке готов выпуска");
                        });
                    }
                }

            });
            scope.$watch("year",function(newValue){
                if (newValue) {
                    scope.modifications = false;
                    scope.modification = "";
                    if (newValue.trim() in modifications) {
                        scope.modifications = modifications[newValue.trim()];
                        if (scope.modifications.length == 1) {
                            scope.modification = scope.modifications[0];
                        }
                    }
                    else {
                        $http({
                            method: 'GET',
                            url: newValue.trim()+".json"
                        }).then(function successCallback(response) {
                            scope.modifications = response.data;
                            modifications[newValue.trim()] = response.data;
                            if (response.data.length == 1) {
                                scope.modification = response.data[0];
                            }
                        }, function errorCallback(response) {
                            console.log("Произошла ошибка при загрузке готов выпуска");
                        });
                    }
                }

            });

            scope.search = function() {
                if (!scope.brand) {
                    $state.go("home.cars");
                }
                else if (!scope.model) {
                    $state.go("home.cars.models",{car:scope.brand});
                }
                else if (!scope.year) {
                    $state.go("home.cars.models.years",{car:scope.brand, model: scope.model});
                }
                else if (!scope.modification) {
                    $state.go("home.cars.models.years.modifications",{car:scope.brand, model: scope.model, year: scope.year});
                }
                else {
                    $state.go("home.cars.models.years.modifications.result",{car:scope.brand, model: scope.model, year: scope.year, modification: scope.modification});
                }
            }
        }

    }
}]);